import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-plant-modal',
  templateUrl: './plant-modal.component.html',
  styleUrls: ['./plant-modal.component.scss']
})

export class PlantModalComponent {

  @Input() guide: any;

  @Input() isOpen = false;

  @Output() close = new EventEmitter<void>();


  closeModal() {

    this.close.emit();
  }
}