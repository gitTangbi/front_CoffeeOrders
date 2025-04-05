import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.page.html',
  styleUrls: ['./update-page.page.scss'],
  standalone: false,
})
export class UpdatePagePage implements OnInit {
  orderId!: any;
  order: any;
  updateForm!: FormGroup;

  constructor(private activedRoute: ActivatedRoute, private orderServ: OrderService) {}

  ngOnInit() {
    this.orderId = this.activedRoute.snapshot.paramMap.get('id') || '';
    this.getOrderDetails(this.orderId);

    this.updateForm = new FormGroup({
      temp: new FormControl(null, Validators.required),
      milk: new FormControl(null, Validators.required),
      sweetness: new FormControl(null, Validators.required),
      brew: new FormControl(null, Validators.required),
      size: new FormControl(null, Validators.required),
    });

    // this one use to update the order object when the properties in the form changes
    this.updateForm.valueChanges.subscribe(() => {
      this.updateOrderFromForm();
    });
  }

  updateOrderFromForm() {
    if (this.order && this.updateForm.valid) {
      this.order = {
        ...this.order, // an object store the existing properties of the order

        // update and override the new properties from the form that the user has choosen
        temperature: this.updateForm.value.temp,
        milk: this.updateForm.value.milk,
        sweetness: this.updateForm.value.sweetness,
        brew: this.updateForm.value.brew,
        size: this.updateForm.value.size,
      };
    }
  }

  getOrderDetails(orderId: number) {
    this.orderServ.getOrder(orderId.toString()).subscribe(
      (order) => {
        this.order = order;
        if (this.order) {
          this.updateForm.patchValue({
            temp: this.order.temperature,
            milk: this.order.milk,
            sweetness: this.order.sweetness,
            brew: this.order.brew,
            size: this.order.size,
          });
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  submit() {
    const orderID = this.orderId;
    const updatedOrder = {
      temperature: this.updateForm.value.temp,
      milk: this.updateForm.value.milk,
      sweetness: this.updateForm.value.sweetness,
      brew: this.updateForm.value.brew,
      size: this.updateForm.value.size,
    };
    
    /* this.orderServ.update(orderID, updatedOrder).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: () => {
        console.error('Error updating order');
      },
      complete: () => console.info('Complete'),
    }); */
  }
}
