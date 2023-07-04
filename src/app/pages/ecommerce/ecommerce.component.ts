import { Component, OnInit } from '@angular/core';
import { AnalyticsGtag } from 'src/app/services/analyticsGtag';
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
    private analyticsGtag: AnalyticsGtag
  ) { }

  ngOnInit(): void {
    this.dataProperties.idProduct = 0
    this.dataProperties.namaProduct = "Baju"
    this.dataProperties.categoryProduct = "Pakaian"
    this.dataProperties.brandProduct = "H&M"
    this.dataProperties.variantProduct = "und"
  }

  input() {
    this.dataProperties.idProductNew = "BA" + (this.dataProperties.idProduct + 1);
    // this.analyticsUtils.addProductEC(this.dataProperties.idProductNew, this.dataProperties.namaProduct, this.dataProperties.categoryProduct, this.dataProperties.brandProduct, this.dataProperties.variantProduct, this.dataProperties.priceProduct, this.dataProperties.quantityProduct)
    this.analyticsGtag.addToCart();
  }

  checkout() {
    // this.analyticsUtils.setActionEC("checkout", undefined, "checkout", 1);
    // this.analyticsUtils.setActionEC("purchase",  undefined, undefined, undefined, this.dataProperties.idProductNew, "Beli Baju", this.dataProperties.quantityProduct, this.dataProperties.quantityProduct * this.dataProperties.priceProduct)
    this.analyticsGtag.purchase();
  }
}
