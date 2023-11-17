import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffServiceService } from './staff-service.service';
import { TableComponent } from "../table/table.component";
@Component({
    selector: 'app-staff',
    standalone: true,
    templateUrl: './staff.component.html',
    styleUrl: './staff.component.css',
    imports: [CommonModule, TableComponent]
})
export class StaffComponent implements OnInit {
  tableHeadings = ['ID','Name','Country','Age']
  public details:any =[]
  public staff:any="staff"
  ngOnInit():void {
    this.details = this.list.getStaff();
  }
  constructor(private list:StaffServiceService){

  }

}
