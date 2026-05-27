import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public contato: string = `PlantasTropic © 2026 - Todos os direitos reservados.`;


  constructor() { }
  ngOnInit(): void {

  }

}
