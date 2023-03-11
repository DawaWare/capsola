import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { API_URL,SITE_URL } from '../global';
import { Drug } from '../pages/tabs/home/home.page';
import { StorageService } from './storage.service';

export interface Data {
  version: string;
}

export interface CurrentAPIResponse {
  data: Data;
}


@Injectable({
  providedIn: 'root',
})
export class DrugsService {
  drugs$: BehaviorSubject<Drug[]> = new BehaviorSubject<Drug[]>([]);
  constructor(private http: HttpClient, private storage: StorageService) {
    this.getDrugs();
  }

  checkForUpdate() {
     this.http.get<CurrentAPIResponse>(`${SITE_URL}/api/current-api-version.json`).subscribe((res:CurrentAPIResponse) => {
      console.log('current api version', res.data.version);
      this.storage.get('api-version').then((version) => {
        console.log('api version', version);
        if (version !== res) {
          this.storage.set('api-version', res.data.version);
          this.storage.remove('drugs')
          this.drugs$.next([]);
        }
      });
    })
  }




  async getDrugs(): Promise<any> {
    await this.storage.create();
    if (this.drugs$.getValue().length > 0) {
      return this.drugs$;
    } else {
      this.storage.get('drugs').then((data) => {
        if (data) {
          const drugs: Drug[] = JSON.parse(data);
          this.drugs$.next(drugs);
        } else {
          this.http
            .get<Drug[]>(API_URL)
            //take the data from the response from drug key
            .pipe(
              map((response: Drug[]) => {
                response.sort((a, b) => {
                  if (a.tradename > b.tradename) {
                    return 1;
                  } else if (a.tradename < b.tradename) {
                    return -1;
                  } else {
                    return 0;
                  }
                })
                //save the drugs in the service
                this.drugs$.next(response);
                //save the drugs in the storage
                this.storage.set(
                  'drugs',
                  JSON.stringify(this.drugs$.getValue())
                );
              })
            )
            .subscribe(
              (_) => {
                //console.log('data fetched from api');
              },
              (err) => {
                //console.log('error', err);
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
