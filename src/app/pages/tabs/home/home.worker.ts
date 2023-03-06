/// <reference lib="webworker" />
import Fuse from 'fuse.js';
interface Drug {
  id: number;
  tradename: string;
  activeingredient: string;
  price: string;
  company: string;
  group: string;
  pamphlet: string;
  dosage: string;
  composition: string;
}
let drugs: Drug[] = [];
addEventListener('message', ({ data }) => {
  console.log('worker got message: ', data);
  //get drugs from main thread and store them in the worker
  if (data.drugs && data.drugs.length > 0) {
    drugs = data.drugs;
  }

  if (
    data.searchTerm &&
    data.searchTerm.length > 0 &&
    data.searchType === 'exact'
  ) {
    const response = doSearch(drugs, data.searchKey, data.searchTerm);
    postMessage(response);
  } else if (
    data.searchTerm &&
    data.searchTerm.length > 0 &&
    data.searchType === 'approximate'
  ) {
    const response = doApproximateSearch(
      drugs,
      data.searchKey,
      data.searchTerm
    );
    postMessage(response);
  } else {
    postMessage(drugs);
  }
});

const doApproximateSearch = (
  drugs: Drug[],
  key: SearchableKeys,
  term: string
) => {
  const options = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [key],
  };
  const fuse = new Fuse(drugs, options);
  const result = fuse.search(term).map((drug) => drug.item);
  return result;
};

type SearchableKeys =
  | 'tradename'
  | 'activeingredient'
  | 'price'
  | 'company'
  | 'group'
  | 'pamphlet'
  | 'dosage'
  | 'composition';

const doSearch = (drugs: Drug[], key: SearchableKeys, term: string) => {
  const response = drugs.filter((drug: Drug) => {
    return drug[key].toLowerCase().includes(term.toLowerCase());
  });
  return response;
};
