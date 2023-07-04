import { Injectable } from '@angular/core';
import { Angulartics2, Angulartics2GoogleAnalytics, Angulartics2GoogleAnalyticsEnhancedEcommerce } from 'angulartics2';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsUtils {

  constructor(
    private angulartics2: Angulartics2,
    private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private angulartics2GoogleAnalyticsEnhancedEcommerce: Angulartics2GoogleAnalyticsEnhancedEcommerce
  ) { 
    angulartics2GoogleAnalytics.startTracking();
  }

  public eventAnalytics(action: string, category: string, label: string) {
    this.angulartics2.eventTrack.next({
      action: action,
      properties: {
        category: category,
        label: label
      },
    });
  }

  public addProductEC(id: string, name: string, category: string, brand: string, variant: string, price: number, quantity?: number) {
    this.angulartics2GoogleAnalyticsEnhancedEcommerce.ecAddProduct({
      'id': id,
      'name': name,
      'category': category,
      'brand': brand,
      'variant': variant,
      'price': price,
      'quantity': quantity ? quantity : 1
    })
  }

  public setActionEC(action: string, list?: string, option?: string, step?: number, id?: string, affilation?: string, shipping?: number, revenue?: number) {

    if (action == 'click') {
      this.angulartics2GoogleAnalyticsEnhancedEcommerce.ecSetAction('click', {
        'list': list
      });
    }

    if (action == 'detail') {
      this.angulartics2GoogleAnalyticsEnhancedEcommerce.ecSetAction('detail', {});
    }

    if (action == 'checkout') {
      this.angulartics2GoogleAnalyticsEnhancedEcommerce.ecSetAction('checkout', {
        'step': step,
        'option': option
      });
    }

    if (action == 'purchase') {
      this.angulartics2GoogleAnalyticsEnhancedEcommerce.ecSetAction('purchase', {
        'id': id,
        'affiliation': affilation,
        'shipping': shipping ? shipping : 0,
        'revenue': revenue
      });
    }

  }

  public ecAddImpression(id: any, category: string) {
    this.angulartics2GoogleAnalyticsEnhancedEcommerce.ecAddImpression({
      'id': category + id,
      'name': 'Product ' + category,
      'category': category,
      'brand': 'Insurance ' + category,
      'variant': 'Product Insurance ' + category,
      'list': 'List Product Insurance ' + category,
      'position': id,
    });
  }
}