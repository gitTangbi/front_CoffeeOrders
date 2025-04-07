import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  temp: any;
  milk: any;
  sweetness: any;
  brew: any;
  size: any;
  _id: any;

  orders: any[] = [];
  selectedOrder!: any;
  orderID!: number;

  constructor(private orderServ: OrderService, private router: Router) { }

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    this.orderServ.getAllOrder().subscribe({
      next: (data: any) => {
        this.orders = data;
      },
      error: (e) => {
        console.error('Data somehow failed to load!');
      },
      complete: () => {
        console.info('Data loaded succcessfully!');
      }
    });
  }

  selectOrder(order: any) {
    this.selectedOrder = order;
    console.log(this.selectedOrder._id);  
    for (let i = 0; i < this.orders.length; i++) {
      this.orders[i].selected = false;
    }
    order.selected = true;
  }

  updateOrder() {
    if (this.selectedOrder) {
      console.log(this.selectedOrder._id);
      this.router.navigate(['/update-page', this.selectedOrder._id]);
    }
  }

  //responseMsg: any;

  deleteOrder() {
    let params = {
      _id: this.selectedOrder.id,
      temp: this.selectedOrder.temp,
      milk: this.selectedOrder.milk,
      sweetness: this.selectedOrder.sweetness,
      brew: this.selectedOrder.brew,
      size: this.selectedOrder.size
    };

    this.orderServ.delete(params).subscribe({
      next: (params: any) => {
        console.log(params);
      },
      error: (e) => {
        console.error(e);
      },
      complete: () => console.info('Successfully deleted!')
    })
  }
}

