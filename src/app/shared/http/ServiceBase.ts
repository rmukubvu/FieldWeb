import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export abstract class ServiceBase  {

  protected constructor(private http: HttpClient) {
  }

  fetch<T>(url: string) {
    return this.http.get<T>(url);
  }

  postOf(url: string, payload: any) {
    return this.http.post(url, payload , { responseType: 'text' });
  }

  post<T>(url: string, payload: any): Observable<T> {
    return this.http.post<T>(url, payload);
  }

}
