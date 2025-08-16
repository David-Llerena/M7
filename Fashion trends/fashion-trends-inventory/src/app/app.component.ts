import { Component } from '@angular/core';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CompanyInfoComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fashion-trends-inventory';
}