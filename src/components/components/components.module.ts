import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShopComponent } from "./shop/shop.component";
import { CartComponent } from "./cart/cart.component";
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [ShopComponent, CartComponent, ParentComponent, ChildComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    ShopComponent,
  ],
})
export class ComponentsModule {}
