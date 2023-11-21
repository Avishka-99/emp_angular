import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffServiceService } from './staff-service.service';
import { TableComponent } from "../../../components/table/table.component";
import axios from 'axios';
@Component({
  selector: 'app-staff',
  standalone: true,
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.css',
  imports: [CommonModule, TableComponent]
})
export class StaffComponent {
  tableHeadings = ['Name', 'Department', 'Age', 'Contact no', 'Email', ' ']
  public details: any = []
  public staff: any = "staff"
  // ngOnInit(): void {
  //   this.details = this.staff.getStaff();
  // }
  constructor(private list: StaffServiceService) {
    this.list.getStaff().then((result) => {
      //console.log(result)
      this.details = result;
      console.log(this.details)
    });

  }
  regStaff(name: HTMLInputElement, dept: HTMLSelectElement, age: HTMLInputElement, cno: HTMLInputElement, email: HTMLInputElement, event: Event): void {
    event.preventDefault();
    this.list.addStaff(name.value, dept.value, parseInt(age.value), cno.value, email.value).then(() => {
      this.list.getStaff().then((result) => {
        console.log(result)
        this.details = result;
      });
    })
  }
  async delStaff(id: string): Promise<void> {
    //console.log(id)
    await axios.delete(`https://localhost:7185/api/staff/${id}`).then(async () => {
      try {
        let data = await axios.get("https://localhost:7185/api/staff");
        console.log(data.data)
        this.details = data.data
      } catch (error) {
        console.log(error)
      }
    })

  }

}
