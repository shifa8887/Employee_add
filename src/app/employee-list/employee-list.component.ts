import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  EmployeeForm:FormGroup

  constructor(private fb:FormBuilder){
    this.EmployeeForm = this.fb.group({
      ename:['',[Validators.required,Validators.pattern("[a-zA-Z]*")]],
      contactno:['',[Validators.required,Validators.pattern("[0-9]*")]],
      email:['',[Validators.required,Validators.email]],
      address:['',[Validators.required,Validators.pattern("[a-zA-Z0-9]*")]]
    })
  }
}
