import { Component, input, Input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  // @Input({ required: true }) data!: Ticket;
  data = input.required<Ticket>();

  close = output();
  detailIsVisible = signal(false);

  ontoggleDetails() {
    this.detailIsVisible.update((value) => !value);
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
