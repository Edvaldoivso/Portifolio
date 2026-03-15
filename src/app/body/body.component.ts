import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  skills = [
    { img: './assets/images/Desconhecido.PNG', texto: 'Filodendro' },
    { img: './assets/images/espiritosanto.jpg', texto: 'Filodendro Billieteae' },
    { img: './assets/images/filodendro.jpg', texto: 'Filodendro Verrucosum' },
    { img: './assets/images/Verrucosum.jpg', texto: 'Filodendro' },
        { img: './assets/images/Florida.jpg', texto: 'Filodendro' },
            { img: './assets/images/brasileiro.jpg', texto: 'Filodendro' },
]


  constructor() { }
  ngOnInit(): void {

  }
}
