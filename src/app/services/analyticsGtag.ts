// import { Injectable } from '@angular/core';
// import { Gtag } from 'angular-gtag';

// @Injectable({
//     providedIn: 'root'
// })
// export class AnalyticsGtag {
//     constructor(
//         private gtagService: Gtag 
//     ) { }

//     addToCart(): void {
//         this.gtagService.event('add_to_cart', {
//             currency: 'USD',
//             items: [
//                 {
//                     item_id: 'ITEM_ID_1',
//                     item_name: 'Product 1',
//                     item_category: 'Category 1',
//                     price: 9.99,
//                     quantity: 1,
//                 },
//                 // Add more items if needed
//             ],
//         });
//     }

//     purchase(): void {
//         this.gtagService.event('purchase', {
//             currency: 'USD',
//             items: [
//                 {
//                     item_id: 'ITEM_ID_1',
//                     item_name: 'Product 1',
//                     item_category: 'Category 1',
//                     price: 9.99,
//                     quantity: 1,
//                 },
//                 // Add more items if needed
//             ],
//             value: 9.99, // Total purchase value
//         });
//     }
// }