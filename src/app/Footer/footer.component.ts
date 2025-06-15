import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public contato: string = `Tem alguma dúvida ou sugestão? Estamos sempre prontos para ouvir! 📧 E-mail: contato@seudominio.com 📞 Telefone: +55 11 99999-9999 📍 Endereço: Rua Imaginária, 123 - Cidade Fictícia, Brasil 🕘 Horário de Atendimento: Segunda a Sexta, das 9h às 18`


  constructor() { }
  ngOnInit(): void {

  }

}
