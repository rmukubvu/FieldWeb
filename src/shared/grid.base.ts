import {GridColumnDefinition} from './grid.column.definition';

export class GridBase<T extends GridColumnDefinition> {

  selectedColumns: T;

  constructor(column: T) {
    this.selectedColumns = column;
    console.log('in super');
  }

  getColumns() {
    return this.selectedColumns?.columns;
  }

}
