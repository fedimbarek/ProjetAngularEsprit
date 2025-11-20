import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { FormsModule } from '@angular/forms';
import { ListEventComponent } from './list-event/list-event.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { BesteventComponent } from './bestevent/bestevent.component';


@NgModule({
  declarations: [
    EventsComponent,
    ListEventComponent,
    EventDetailComponent,
    EventCardComponent,
    BesteventComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule
  ]
})
export class EventsModule { }
