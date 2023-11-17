import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffServiceService {

  constructor() { }
  getStaff() {
    return [
      { 'id': 1, 'name': 'Davido', 'dep': 'Admin', 'age': 34, 'cno': '0713473321', 'email': 'david@aol.com' },
      { 'id': 2, 'name': 'Burna Boy', 'dep': 'HR', 'age': 22, 'cno': '0763343322', 'email': 'burna@gmail.com' },
      { 'id': 3, 'name': 'Diamondz Platinum', 'dep': 'IT', 'age': 27, 'cno': '0783422341', 'email': 'platz@hotmail.com' },
      { 'id': 4, 'name': 'Sarkodie', 'dep': 'Finance', 'age': 31, 'cno': '0773628592', 'email': 'sarkodi@aol.com' },
      { 'id': 5, 'name': 'Mr. Eazi', 'dep': 'HR', 'age': 29, 'cno': '0774383104', 'email': 'eazi@yahoo.com' }
    ];
  }
}
