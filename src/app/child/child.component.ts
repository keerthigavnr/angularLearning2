import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit {
  @Input() message: string = '';
  // @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit("hello from child");
  }


  // passData() {
  //   this.notify.emit('Data from child to parent');
  // }

  constructor() {

  }

  ngOnInit(): void {

  }


}
