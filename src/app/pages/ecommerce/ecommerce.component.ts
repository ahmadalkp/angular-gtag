import { Component, OnInit } from '@angular/core';
import { AnalyticsGtag } from 'src/app/services/analyticsGtag';
import { AnalyticsManual } from 'src/app/services/analyticsManual';
import { AnalyticsUtils } from 'src/app/services/analyticsUtils';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {

  dataProperties: any = {};

  constructor(
    private analyticsUtils: AnalyticsUtils,
    private analyticsGtag: AnalyticsGtag,
    private analyticsManual: AnalyticsManual
  ) { }

  ngOnInit(): void {
    this.dataProperties.idProduct = 0
    this.dataProperties.namaProduct = "Baju"
    this.dataProperties.categoryProduct = "Pakaian"
    this.dataProperties.brandProduct = "H&M"
    this.dataProperties.variantProduct = "und"
  }

  input() {
    const total = this.dataProperties.priceProduct * this.dataProperties.quantityProduct    
    this.analyticsManual.addProductEC('FlexiHealth00', 'Product Flexi Health', 'Product Flexi Health', 'Insurance Flexi Health',
      'Product Insurance Flexi Health', total, 1);
  }

  purchase() {
    const total = this.dataProperties.priceProduct * this.dataProperties.quantityProduct
    this.analyticsManual.setActionEC('purchase', undefined, undefined, undefined, "BELI001",
      'ilovelife - Product Flexi Health', 0, total);
  }

  event() {
    this.analyticsManual.eventAnalytics("click", "category", "label")
  }

  action(event: string) {
    switch (event) {
      case "click":
        this.analyticsManual.setActionEC("click", "List Product");
        break;
      case "detail":
        this.analyticsManual.setActionEC("detail", undefined);
        break;
      case "checkout":
        this.analyticsManual.setActionEC("checkout", undefined, "Flexi Health", 1);
    }
  }

}
