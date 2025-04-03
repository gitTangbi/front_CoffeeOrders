import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePagePageRoutingModule } from './update-page-routing.module';

import { UpdatePagePage } from './update-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdatePagePage]
})
export class UpdatePagePageModule {}
