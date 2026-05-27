import { Injectable } from '@angular/core';
import { DIEFFENBACHIA_GUIDE } from '../data/plants/diffenbachia.data';
import { MONSTERA_DELICIOSA_GUIDE } from '../data/plants/monstera.data';
import { MINI_SANSEVIERIA_GUIDE } from '../data/plants/dracaena.data';
import { PLATYCERIUM_SUPERBUM_GUIDE } from '../data/plants/superbum.data';

@Injectable({
  providedIn: 'root',
})
export class PlantGuideService {

  getPlantGuide(slug: string) {

    const guides = [
      DIEFFENBACHIA_GUIDE,
      MONSTERA_DELICIOSA_GUIDE,
      MINI_SANSEVIERIA_GUIDE,
      PLATYCERIUM_SUPERBUM_GUIDE,
    ];

    return guides.find(item => item.slug === slug);
  }
}