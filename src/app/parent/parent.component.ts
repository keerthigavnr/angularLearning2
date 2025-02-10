import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',

  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements OnInit {
  parentMessage: string = 'Hello from parent';

  constructor() {

  }

  ngOnInit(): void {

  }
  passData: any;
  // parentMethod(event: any) {
  //   this.passData = event;
  // }

  receiveMessage(event: any) {
    this.passData = event;
  }
}
