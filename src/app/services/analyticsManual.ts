import { Injectable } from '@angular/core';

declare const gtag: Function;

@Injectable({
    providedIn: 'root'
})
export class AnalyticsManual {
    constructor() { }

    public eventAnalytics(action: string, category: string, label: string): void {
        gtag('event', action, {
            category: category,
            label: label
        });
    }

    public addProductEC(id: string, name: string, category: string, brand: string, variant: string, price: number, quantity?: number): void {
        quantity = quantity ? quantity : 1;
        gtag("event", "add_to_cart", {
            currency: "IDR",
            value: quantity * price,
            items: [
                {
                    item_id: id,
                    item_name: name,
                    item_brand: brand,
                    item_category: category,
                    item_variant: variant,
                    price: price,
                    quantity: quantity
                }
            ]
        });
    }

    public setActionEC(action: string, list?: string, option?: string, step?: number, id?: string, affilation?: string, shipping?: number, revenue?: number) {

        if (action == 'click') {
            gtag("event", "select_item", {
                item_list_name: list,
                items: [{}]
            });
        }

        if (action == 'detail') {
            gtag("event", "view_item", {
                items: [{}]
            });
        }

        if (action == 'checkout') {
            gtag("event", "begin_checkout", {
                items: [
                    {
                        item_name: option,
                    }
                ]
            });
        }

        if (action == 'purchase') {
            gtag("event", "purchase", {
                transaction_id: id,
                value: revenue,
                shipping: shipping,
                currency: "IDR",
                items: [
                    {
                        affiliation: affilation,
                        price: revenue,
                        quantity: 1
                    }]
            });
        }

    }

    public ecAddImpression(id: any, category: string): void {
        gtag("event", "view_promotion", {
            promotion_id: id,
            promotion_name: category,
            items: [{}]
        });
    }
}