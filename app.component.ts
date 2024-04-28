import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  calculateForm!: FormGroup;
  displayInput: string = '';
  result: string = '';

  constructor(){ }

  ngOnInit(): void {
    this.calculateForm = new FormGroup({
      inputData: new FormControl(null),
      inputResult: new FormControl(null),
      numbers:new FormControl(null),
      operands: new FormControl(null)
    });
  } 

  pressNum(num: string){
    console.log(num);

  } 
    
  pressOperand(operand:string){
    console.log(operand);

  }
  getResult(){
    
  }
  deleteLast(){

  }

  deleteAll(){
    
  }
}

 




  

