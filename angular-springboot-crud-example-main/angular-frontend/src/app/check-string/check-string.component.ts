import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-check-string',
  templateUrl: './check-string.component.html',
  styleUrls: ['./check-string.component.css']
})
export class CheckStringComponent implements OnInit {
  s:String;
  constructor(private empservice :EmployeeService) { }

  ngOnInit(): void {
    this.empservice.getString().subscribe(data=>{
      this.s =data;
      console.log(this.s);
  });}
  }
