import {GridColumnDefinition} from '../../../shared/grid.column.definition';

export class GridColumnsTasks implements GridColumnDefinition {

  constructor() {
  }

  columns = [
    {
      field: 'id',
      headerName: 'ID',
      checkboxSelection: true,
      resizable: true
    },
    {
      field: 'name',
      headerName: 'Name',
      checkboxSelection: true,
      resizable: true
    },
    {
      field: 'destination',
      headerName: 'Destination',
      checkboxSelection: true,
      resizable: true
    },
    {
      field: 'validFrom',
      headerName: 'Start Date',
      checkboxSelection: true,
      resizable: true
    }
  ];

}
