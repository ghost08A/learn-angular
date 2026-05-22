import {
  Component,
  computed,
  Input,
  Output,
  EventEmitter,
  signal,
} from '@angular/core';
import { type User } from './user.model';

import { DUMMY_USERS } from '../dummy-user';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) isSelected!: boolean; //รับข้อมูลจาก component แม่เพื่อระบุว่าผู้ใช้ถูกเลือกหรือไม่
  @Output() select = new EventEmitter<string>(); //สร้าง EventEmitter เพื่อส่งข้อมูลเมื่อมีการเลือกผู้ใช้
  // avatar = input.required<string>();
  // name = input.required<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  // imagePath = computed(() => `assets/users/${this.avatar()}`);
  onSelectUser() {
    this.select.emit(this.user.id); //ยิงข้อมูลกลับไปcomponentแม่เมื่อมีการเลือกผู้ใช้
  }
}
