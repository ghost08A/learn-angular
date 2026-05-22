import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrls: ['./rect.component.css'],
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  // @Input({ required: true }) size!: { width: number; height: number };
  // @Output() sizeChange = new EventEmitter<{ width: number; height: number }>();
  size = model.required<{ width: string; height: string }>();
  onReset() {
    this.size.set({ width: '200', height: '100' });
  }
}
