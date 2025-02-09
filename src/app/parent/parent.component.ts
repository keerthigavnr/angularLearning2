import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',

  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  parentMessage: string = 'Hello from parent';
}
