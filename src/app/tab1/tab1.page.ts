import { Component } from '@angular/core';
import { OrderService } from '../order.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
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

  outMsg:any;

  responseMsg: any = [];
  orders:any=[];
  id:number=1;
  result?:String;
  constructor(private service: OrderService, private ar:ActivatedRoute, private r:Router) {
    //Default values
    this.temp = "Hot";
    this.milk = "2";
    this.sweetness = "100";
    this.brew = "Regular";
    this.size = "Medium";
    this.id=1;
   
  }

  


  insert(){
    let data = {
      temp: this.temp, 
      milk: this.milk, 
      sweetness: this.sweetness, 
      brew: this.brew, 
      size: this.size,
      id:this.id
    }
    this.service.insert(data).subscribe({
      next: (data:any)=>{
        console.log(data);
        this.orders=[];
        this.outMsg="Order Added!!"
        
      },
      error:(e)=>{
        console.error(e);
        this.outMsg="Error adding order"

      },
      complete:()=>console.info('Complete')
    });


    //the above will add the order and the below will show the order added in the database
  
   this.retrieveOne();

    

  }
    // this.service.insert(data)({
    //   next:(data:any) =>{
    //     console.log(data);
    //     this.responseMsg = data.message;
    //   },
    //   error:(e) =>{
    //     console.error(e);
    //     this.responseMsg = e.message;
    //   },
    //   complete: () => console.info('Successfully added!');
    // })

   retrieveOne(){
  
      const params={id:this.id};  
      console.log("Params being sent:", params);
      this.service.retrieveOne(params).subscribe({
        next:(data:any)=>{
          console.log( "data sent ",  data);
          this.orders=data;
        
        },
        error:(e)=>{
          console.error(e);
  
        },
        complete:()=>console.info('Complete')
      });
      
    }

    nextOrder(){
      this.id++;
      this.outMsg="";
    }
  }

