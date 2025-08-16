import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryService } from '../services/inventory.service';
import { Product } from '../models/Products';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  branches: string[] = [];
  totalStock: number = 0;

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.products = this.inventoryService.getProducts();
    this.branches = this.inventoryService.getCompany().branches;
    this.totalStock = this.inventoryService.getTotalStock();
  }

  getProductsByBranch(branch: string): Product[] {
    return this.inventoryService.getProductsByBranch(branch);
  }

  getTotalStockByBranch(branch: string): number {
    return this.inventoryService.getTotalStockByBranch(branch);
  }

  getBranchInfo(branch: string) {
    return this.inventoryService.getBranchInfo(branch);
  }

  getStockClass(stock: number): string {
    if (stock <= 10) return 'low-stock';
    if (stock <= 20) return 'medium-stock';
    return 'high-stock';
  }
}