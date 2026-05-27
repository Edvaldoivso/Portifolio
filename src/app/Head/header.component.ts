import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public textoHellow = 'Uma plataforma de Plantas de quem ama Plantas para quem ama Plantas'
  public botaoSortPlant = `Escolha a especie do Mês para a coleção`
  public subtexto = 'Plantas para a sua vida e para sua casa...'

  constructor() { }
  ngOnInit(): void {

  }
}
