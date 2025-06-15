import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  skills = [
    { img: '#', texto: '1' },
    { img: '#', texto: '2' },
    { img: '#', texto: '3' },
    { img: '#', texto: '4' },
]


  constructor() { }
  ngOnInit(): void {

  }
}
