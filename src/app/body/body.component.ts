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
    { img: '#', texto: '5' },
    { img: '#', texto: '6' },
    { img: '#', texto: '7' },
    { img: '#', texto: '8' },
    { img: '#', texto: '9' }]


  constructor() { }
  ngOnInit(): void {

  }
}
