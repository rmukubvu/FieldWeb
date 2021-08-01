import {Component, OnInit} from '@angular/core';
import {ClientService} from '../service/client.service';
import {Client} from '../model/client.model';
import {GridBase} from '../../../../shared/grid.base';
import {ClientColumns} from './client.columns';


@Component({
  selector: 'field-eye-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.scss']
})
export class ViewClientComponent extends GridBase<ClientColumns> implements OnInit {

  constructor(private service: ClientService) {
    super(new ClientColumns()); }

  ngOnInit(): void {
    this.service.fetchAll().subscribe(data => {
      this.rowData = [...data];
    });
  }

  onRowClicked(params: any) {
    if (params?.data)
      console.log((params.data as Client).id);
  }
}
