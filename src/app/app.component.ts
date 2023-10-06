import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app-14';
  dataProperties : any = {};

  ngOnInit() {
    this.loadScript();
  }

  click() {
    console.log(this.dataProperties);
  }

  loadScript() {
    const idMeasurement =  "G-TBX2CD8HSE"

    let node = document.createElement('script'); // creates the script tag
    node.src = 'https://www.googletagmanager.com/gtag/js?id=' + idMeasurement; // sets the source (insert url in between quotes)
    node.async = true; // makes script run asynchronously
    // append to head of document

    let node2 = document.createElement('script'); // creates the script tag
    node2.innerHTML = `window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', '`+idMeasurement+`');`

    document.getElementsByTagName('head')[0].appendChild(node); 
    document.getElementsByTagName('head')[0].appendChild(node2); 
  }
}