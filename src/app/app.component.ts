import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ngOnInit(): void {

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
    });

  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {

    // CTRL + C
    if (event.ctrlKey && event.key.toLowerCase() === 'c') {
      event.preventDefault();
    }

    // CTRL + U
    if (event.ctrlKey && event.key.toLowerCase() === 'u') {
      event.preventDefault();
    }

    // F12
    if (event.key === 'F12') {
      event.preventDefault();
    }

  }

}