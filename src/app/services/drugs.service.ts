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
    if (this.drugs$.getValue().length > 0) {
      return this.drugs$;
    } else {
      this.storage.get('drugs').then((data) => {
        if (data) {
          const drugs: Drug[] = JSON.parse(data);
          this.drugs$.next(drugs);
        } else {
          this.http
            .get<Drugs>(API_URL)
            //take the data from the response from drug key
            .pipe(
              map((response: Drugs) => {
                //save the drugs in the service
                this.drugs$.next(response.drugs);
                //save the drugs in the storage
                this.storage.set(
                  'drugs',
                  JSON.stringify(this.drugs$.getValue())
                );
              })
            )
            .subscribe(
              (_) => {
                console.log('data fetched from api');
              },
              (err) => {
                console.log('error', err);
              }
            );
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
