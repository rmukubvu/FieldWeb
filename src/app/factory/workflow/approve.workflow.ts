import {IWorkFlow} from './workflow.model';
import {Observable, of} from 'rxjs';

export class ApproveWorkflow implements IWorkFlow {
  process(action: string): Observable<boolean> {
    return of(true);
  }

}
