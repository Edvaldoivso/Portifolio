import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public textoHellow = 'Hello I talk about Plants here.'
  public botaoSortPlant = `Sort Month Specie`
  public subtexto = 'Currently located in Brasil...'

  constructor() { }
  ngOnInit(): void {

  }
}
