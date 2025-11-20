import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 @Input() event: any;
  @Output() liked = new EventEmitter<any>();

  likeEvent() {
    this.event.nbrLike++;
    this.liked.emit(this.event);
  }
}
