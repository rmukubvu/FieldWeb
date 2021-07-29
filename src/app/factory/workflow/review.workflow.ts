import {IWorkFlow} from './workflow.model';
import {Observable, of} from 'rxjs';

export class ReviewWorkflow implements IWorkFlow {

  process(action: string): Observable<boolean> {
    return of(true);
  }

}
