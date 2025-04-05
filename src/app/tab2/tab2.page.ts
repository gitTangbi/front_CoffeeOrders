import { Component } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  orders: any[] = [];
  selectedOrder!: any;
  orderID!: number;
  
//******** */
updateOrders:any;
orders1:any=[];
size: any;


  constructor(private orderServ: OrderService, private router: Router) {
    
  }

  ngOnInit() {
   // this.loadOrders();
   this.retrieve();
  }

  // loadOrders() {
  //   this.orderServ.retrieveAll().subscribe((data) => {
  //     this.orders = data || [];
  //   });
  // }

  selectOrder(order: any) {
    this.selectedOrder = order;
    for (let i = 0; i < this.orders.length; i++) {
      this.orders[i].selected = false;
    }
    order.selected = true; 
    console.log("seejsdjlk",this.selectedOrder.id);
  }

  updateOrder() {
  
  if (this.selectedOrder) {
    this.router.navigate(['/update-page', this.selectedOrder.id]); 
  }
}



  deleteOrder() {
    const params={id:this.selectedOrder.id};
    this.orderServ.delete(params).subscribe({
      next:(data:any)=>{
        console.log("data deleted: ",data);
      },
      error: (e) => { 
        console.error("error for ts file: ", e);
        
       },
      complete: () => console.info('deletion Complete')
    });

    //below for refresh
    this.retrieve();
    
  }


retrieve(){
  const params={size:this.size};  
  console.log("Params being sent:", params);
  this.orderServ.retrieveAll(params).subscribe({
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
}

