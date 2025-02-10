import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent implements OnInit {

  name: string = 'Angular';
  today = new Date();

  pageTitle = "Pipes in angular";

  users: any[] = [
    { id: 1, name: 'john', city: 'hyderabad', salary: 10000, dob: new Date('1/12/1990') },
    { id: 2, name: 'peter', city: 'bangalore', salary: 20000, dob: new Date('2/12/1991') },
    { id: 3, name: 'mark', city: 'chennai', salary: 30000, dob: new Date('5/12/1992') },
    { id: 4, name: 'bruce', city: 'pune', salary: 40000, dob: new Date('20/12/1993') },

  ]


  constructor() {

  }

  ngOnInit(): void {

  }


}
