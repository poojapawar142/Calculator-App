import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-calculator',
  templateUrl: './basic-calculator.component.html',
  styleUrls: ['./basic-calculator.component.css']
})
export class BasicCalculatorComponent implements OnInit {
   output = "0";
  inOperation = false;
  num1 = 0;
  constructor() { 
    
  }

  ngOnInit() {
  }
  getValue(btn)
  {
   if(this.output === '0')
   this.output = String(btn);
   else

    this.output += String(btn);
  }
  
  Setoperator(op)
  {
   
		if(this.output && !this.inOperation){
			this.num1 = parseInt(this.output);
			this.output += op;
			this.inOperation = true;
		}else if(this.output.length > this.num1.toString().length+1){
			this.output = eval(this.output);
			this.output += op;	
	};
  }
  reset(){
    this.output = '0'
    this.inOperation = false;
  }
  equal():void {
    this.inOperation = false;
		if(this.output.length > this.num1.toString().length+1){
			this.output = eval(this.output);
      this.num1 = parseInt(this.output);
		}else{
			this.output = (this.num1).toString();
		}
	};
	


}
