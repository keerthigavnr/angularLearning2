import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  users = [
    { name: 'John', age: 25, email: 'john@gmail.com' },
    { name: 'keerthi', age: 21, email: 'keerthi@gmail.com' },
    { name: 'sai', age: 22, email: 'sai@gmail.com' }
  ]

}
