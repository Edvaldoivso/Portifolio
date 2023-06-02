import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public textoEdvaldo = 'Teste Hello I.m Edvaldo'
  public botaogetTouch = `Let's get in touch!`
  public subtexto = 'Currently located in Brasil...'

  constructor() { }
  ngOnInit(): void {

  }
}
