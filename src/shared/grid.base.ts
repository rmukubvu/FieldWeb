import {GridColumnDefinition} from './grid.column.definition';

export class GridBase<T extends GridColumnDefinition> {

  columnDefs: {};
  rowData: any;
  defaultColDef = {
    flex: 1,
    sortable: true,
    resizable: true,
    filter: true,
  };
  rowSelection: 'single';

  constructor(column: T) {
    this.columnDefs = column.columns;
  }


}
