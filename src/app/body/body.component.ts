import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  skills = [
    { img: 'img1', texto: '1' },
    { img: 'img2', texto: '1' },
    { img: 'img3', texto: '1' },
    { img: 'img4', texto: '1' }]

  constructor() { }
  ngOnInit(): void {

  }
}
