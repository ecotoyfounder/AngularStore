import {Component, OnInit} from '@angular/core';
import {IProduct} from "./models/product";
import {ProductService} from "./services/product.service";
import {Observable, tap} from "rxjs";
import {ModalService} from "./services/modal.service";
import {products} from "./data/products";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
