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
  
  constructor(private orderServ: OrderService, private router: Router) {}

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    this.orderServ.getAllOrder().subscribe((data) => {
      this.orders = data || [];
    });
  }

  selectOrder(order: any) {
    this.selectedOrder = order;
    for (let i = 0; i < this.orders.length; i++) {
      this.orders[i].selected = false;
    }
    order.selected = true; 
  }

  updateOrder() {
    if (this.selectedOrder) {
      this.router.navigate(['/update-page', this.selectedOrder.id]); 
    }
  }

  deleteOrder() {
    
  }
}

