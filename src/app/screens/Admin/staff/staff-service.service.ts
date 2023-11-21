import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class StaffServiceService {
  private myArray: any[] = [];
  constructor() {
    this.getStaff
  }
  async getStaff() {
    try {
      let data = await axios.get("https://localhost:7185/api/staff");
      return data.data;
      //console.log(data)
      //return data.data
    } catch (error) {
      console.log(error)
    }
  }
  async addStaff(name: string, dept: string, age: number, cno: string, email: string) {
    //console.log(qty)
    try {
      await axios.post("https://localhost:7185/api/staff", {
        "name": name,
        "department": dept,
        "age": age,
        "contact_no": cno,
        "contact_email": email
      })
    } catch (error) {

    }
  }
  async deleteStaff(id: string) {
    console.log(id)
  }
}
