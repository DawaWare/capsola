import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { API_URL } from '../global';
import { Drug } from '../pages/tabs/home/home.page';
import { StorageService } from './storage.service';

interface Drugs {
  drugs: Drug[];
}
@Injectable({
  providedIn: 'root',
})
export class DrugsService {
  drugs$: BehaviorSubject<Drug[]> = new BehaviorSubject<Drug[]>([]);
  constructor(private http: HttpClient, private storage: StorageService) {
    console.log('Drugs Service');
    this.getDrugs();
  }

  getDrugs(): any {
    console.log('i am here');
    if (this.drugs$.getValue().length > 0) {
      console.log('i am here 2');
      return this.drugs$;
    } else {
      console.log('i am here 3');
      this.storage.get('drugs').then((data) => {
        if (data) {
          console.log('i am here 4', JSON.stringify(data));
          const drugs: Drug[] = JSON.parse(data);
          this.drugs$.next(drugs);
        } else {
          console.log('i am here 5');
          this.http
            .get<Drugs>(API_URL)
            //take the data from the response from drug key
            .pipe(
              map((response: Drugs) => {
                //save the drugs in the service
                console.log('i am here 6', response.drugs);
                this.drugs$.next(response.drugs);
                console.log('i am here 7');
                //save the drugs in the storage
                this.storage.set(
                  'drugs',
                  JSON.stringify(this.drugs$.getValue())
                );
              })
            )
            .subscribe((_) => {
              console.log('data fetched from api');
            });
        }
      });
    }
  }

  getDrugsFromLocal() {
    // return new Observable((observer) => {
    //   const data = Drugs as Drugs;
    //   observer.next(data.drugs);
    //   observer.complete();
    //   this.drugs = data.drugs;
    // });
  }
}
