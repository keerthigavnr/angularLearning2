import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-modal',

  templateUrl: './view-modal.component.html',
  styleUrl: './view-modal.component.scss'
})
export class ViewModalComponent {
  @Input() userData: any = null;
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  closeModal(): void {
    this.close.emit();
  }

}
