import { Injectable } from '@angular/core';
import { Product } from '../models/Products';
import { Company } from '../models/Company';
import { COMPANY_DATA, PRODUCTS_DATA, BRANCH_INFO } from '../data/inventory.data';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private company: Company = COMPANY_DATA;
  private products: Product[] = PRODUCTS_DATA;

  getCompany(): Company {
    return this.company;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByBranch(branchName: string): Product[] {
    return this.products.filter(product => product.branch === branchName);
  }

  getTotalStock(): number {
    return this.products.reduce((total, product) => total + product.stock, 0);
  }

  getTotalStockByBranch(branchName: string): number {
    return this.getProductsByBranch(branchName)
      .reduce((total, product) => total + product.stock, 0);
  }

  getBranchInfo(branchName: string) {
    return BRANCH_INFO[branchName as keyof typeof BRANCH_INFO];
  }

  getAllBranchesInfo() {
    return BRANCH_INFO;
  }

  // Método para obtener estadísticas por sucursal
  getBranchStats() {
    return this.company.branches.map(branch => ({
      name: branch,
      totalProducts: this.getProductsByBranch(branch).length,
      totalStock: this.getTotalStockByBranch(branch),
      info: this.getBranchInfo(branch)
    }));
  }
}