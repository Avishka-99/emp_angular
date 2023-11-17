import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffServiceService {

  constructor() { }
  getStaff(){
    return[
      {'id':1, 'name':'Davido', 'country':'Nigeria','age':34},
      {'id':2, 'name':'Burna Boy', 'country':'Nigeria','age':22},
      {'id':3, 'name':'Diamondz Platinum', 'country':'Tanzania','age':27},
      {'id':4, 'name':'Sarkodie', 'country':'Ghana','age':31},
      {'id':5, 'name':'Mr. Eazi', 'country':'Nigeria','age':29}
    ];
  }
}
