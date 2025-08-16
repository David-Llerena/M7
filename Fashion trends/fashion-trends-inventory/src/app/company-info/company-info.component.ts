import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory.service';
import { Company } from '../models/Company';

@Component({
  selector: 'app-company-info',
  standalone: true,
  templateUrl: './company-info.component.html',
  styleUrl: './company-info.component.css'
})
export class CompanyInfoComponent implements OnInit {
  company!: Company;

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.company = this.inventoryService.getCompany();
  }
}