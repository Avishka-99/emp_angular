import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormserviceService } from './formservice.service';

@Component({
  selector: 'app-resignation-request',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resignation-request.component.html',
  styleUrl: './resignation-request.component.css'
})
export class ResignationRequestComponent {
  public step: number = 1;
  constructor(private formservice: FormserviceService) { }
  async setStep(value:number){
    this.step+=value;
  }
}
