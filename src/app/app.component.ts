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
    let node = document.createElement('script'); // creates the script tag
    node.src = 'https://www.googletagmanager.com/gtag/js?id=G-TBX2CD8HSE'; // sets the source (insert url in between quotes)
    node.type = 'text/javascript'; // set the script type
    node.async = true; // makes script run asynchronously
    // append to head of document

    let node2 = document.createElement('script'); // creates the script tag
    node2.innerHTML = `window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'G-TBX2CD8HSE');`

    document.getElementsByTagName('head')[0].appendChild(node); 
    document.getElementsByTagName('head')[0].appendChild(node2); 
  }
}