import {IWorkFlow} from './workflow.model';
import {ApproveWorkflow} from './approve.workflow';
import {ReviewWorkflow} from './review.workflow';

export class WorkflowFactory {

  private factories: Record<string, IWorkFlow> = {
    'approve': new ApproveWorkflow(),
    'review': new ReviewWorkflow()
  }

  executeWorkFlow(action: string) {
    return this.factories[action].process(action);
  }
}
