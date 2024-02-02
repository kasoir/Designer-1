import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  news: any[] = [
    { title: 'New Version here', text: `Here is new version you can see that we added the toolbar and home screen here` },
    { title: 'The old version', text: `The old version we added log in and sign up` },
    { title: 'The first version', text: `The first version was about html elements` },
    { title: 'New Version here', text: `Here is new version you can see that we added the toolbar and home screen here` },
    { title: 'The old version', text: `The old version we added log in and sign up` },
    { title: 'The first version', text: `The first version was about html elements` },
  ];
  responsiveOptions!: any[];
  constructor() { }

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '1220px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '1100px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

}
