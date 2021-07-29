import {Observable} from 'rxjs';

export interface IWorkFlow {
   process(action: string): Observable<boolean>;
}
