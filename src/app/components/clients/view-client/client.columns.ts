import {GridColumnDefinition} from '../../../../shared/grid.column.definition';

export class ClientColumns implements GridColumnDefinition {
  columns = [
    {headerName: 'Name', field: 'name'},
    {headerName: 'Account Number', field: 'accountNumber'},
    {headerName: 'Address', field: 'address'}
  ];
}
