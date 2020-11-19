import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstrumentComponent } from './instrument/instrument.component';
import { BuildingComponent } from './building/building.component';
import { BillComponent } from './bill/bill.component';
import { ManagementRoutingModule } from './management-routing.module';

//Expantion panel
import {MatExpansionModule} from '@angular/material/expansion';





@NgModule({
  declarations: [
    BillComponent,
    BuildingComponent,
    InstrumentComponent
  ],
  imports: [
    ManagementRoutingModule,
    CommonModule,
//Expantion panel
    MatExpansionModule,
  ]
})
export class ManagementModule { }
