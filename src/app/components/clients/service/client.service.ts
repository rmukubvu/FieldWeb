import { Injectable } from '@angular/core';
import {ServiceBase} from '../../../shared/http/ServiceBase';
import {Client} from '../model/client.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends ServiceBase{

  constructor(http: HttpClient) {
    super(http);
  }

  add(model: Client) {
   return this.post<Client>('client-site', model);
  }

  fetchAll(): Observable<Client[]> {
    return this.fetch<Client[]>('client-site');
  }

}
