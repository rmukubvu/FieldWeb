import { Injectable } from '@angular/core';
import {ServiceBase} from '../../../shared/http/ServiceBase';
import {Client} from '../model/client.model';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends ServiceBase {

  create(client: Client) {
    this.post<Client>('client', client).pipe(map( data => {
        console.log('client' + data);
    }));
  }

  fetchAll(): Observable<Client[]> {
    return this.fetch<Client[]>('client');
  }

}
