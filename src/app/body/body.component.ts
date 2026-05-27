import { Component } from '@angular/core';

import { PlantGuideService } from '../services/plant-guide.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})

export class BodyComponent {

  isModalOpen = false;

  selectedGuide: any = null;


  skills = [

    {
      img: './assets/images/Desconhecido.PNG',
      texto: 'Filodendro',
      slug: 'monstera-deliciosa'
    },

    {
      img: './assets/images/espiritosanto.jpg',
      texto: 'Filodendro Billietiae',
      slug: 'platycerium-superbum'
    },

    {
      img: './assets/images/filodendro.jpg',
      texto: 'Filodendro Verrucosum',
      slug: 'mini-espada-de-sao-jorge'
    },

    {
      img: './assets/images/Verrucosum.jpg',
      texto: 'Filodendro',
      slug: 'dieffenbachia-seguine'
    },

    {
      img: './assets/images/Florida.jpg',
      texto: 'Filodendro',
      slug: 'monstera-deliciosa'
    },

    {
      img: './assets/images/brasileiro.jpg',
      texto: 'Filodendro',
      slug: 'platycerium-superbum'
    }

  ];


  constructor(
    private plantGuideService: PlantGuideService
  ) {}


  ngOnInit(): void {

  }


  openPlantModal(slug: string) {

    this.selectedGuide =
      this.plantGuideService.getPlantGuide(slug);

    this.isModalOpen = true;
  }


  closeModal() {

    this.isModalOpen = false;
  }

}