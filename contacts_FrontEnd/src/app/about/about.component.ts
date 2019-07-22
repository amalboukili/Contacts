import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  infos={
    name :'Amal BOUKILI',
    email :'amal@gmail.com'
  };
  constructor() { }

  ngOnInit() {
  }

}
