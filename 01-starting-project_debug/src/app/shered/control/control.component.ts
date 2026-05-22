import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') className = 'control';
  label = input.required<string>();
  private el = inject(ElementRef);
  //   @ContentChild('input') private control?: ElementRef<
  //     HTMLInputElement | HTMLTextAreaElement
  // >;
  private control = contentChild<HTMLInputElement | HTMLTextAreaElement>(
    'input',
  );

  constructor() {
    afterRender(() => {
      console.log('After render');
    });
    afterNextRender(() => {
      console.log('After next render');
    });
  }

  ngAfterContentInit() {
    console.log('After content init');
  }

  // @HostListener('click')
  onClick() {
    console.log('Clicked');
    console.log(this.el);
    console.log(this.control());
  }
}
