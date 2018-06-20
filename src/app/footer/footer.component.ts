import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
	licenseText = "@2018 All rights reserved";

  constructor() { }

  ngOnInit() {
  }

}
