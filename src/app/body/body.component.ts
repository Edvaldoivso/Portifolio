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
      img: './assets/images/Costela.png',
      texto: 'Costela de Adão',
      slug: 'monstera-deliciosa'
    },

    {
      img: './assets/images/Superbum.png',
      texto: 'Platycerium Superbum',
      slug: 'platycerium-superbum'
    },

    {
      img: './assets/images/MiniEspada.png',
      texto: 'mini-espada',
      slug: 'mini-espada-de-sao-jorge'
    },

    {
      img: './assets/images/Diffenbachia.png',
      texto: 'Comigo Ninguém Pode',
      slug: 'dieffenbachia-seguine'
    },

    // {
    //   img: './assets/images/LirioListrado.png',
    //   texto: 'Lirio Listrado',
    //   slug: 'monstera-deliciosa'
    // },

    // {
    //   img: './assets/images/AnturioFantasia.png',
    //   texto: 'Anturio Fantasia',
    //   slug: 'platycerium-superbum'
    // }

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