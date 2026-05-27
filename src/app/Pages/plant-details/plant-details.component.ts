import { Component } from '@angular/core';
import { PlantGuideService } from '../../services/plant-guide.service';

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.scss']
})

export class PlantDetailsComponent {

  guide = this.plantGuideService.getPlantGuide('dieffenbachia-seguine');

  constructor(
    private plantGuideService: PlantGuideService
  ) {}

}