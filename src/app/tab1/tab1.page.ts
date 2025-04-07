import { Component } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  temp: any;
  milk: any;
  sweetness: any;
  brew: any;
  size: any;

  responseMsg: any = [];

  constructor(private service: OrderService) {
    //Default values
    this.temp = "Hot";
    this.milk = "2";
    this.sweetness = "100";
    this.brew = "Regular";
    this.size = "Medium";
  }


  insert(){
    let data = {
      temp: this.temp, 
      milk: this.milk, 
      sweetness: this.sweetness, 
      brew: this.brew, 
      size: this.size
    }
    
    this.service.insert(data).subscribe({
      next:(data:any) =>{
        console.log(data);
        this.responseMsg = data.message;
      },
      error:(e) =>{
        console.error(e);
        this.responseMsg = e.message;
      },
      complete: () => console.info('Successfully added!')
    })

  }
}
