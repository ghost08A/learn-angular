import { Component, signal } from '@angular/core';

import { DUMMY_USERS } from './dummy-user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectUserId = '';

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectUserId)!;
  }
  onSelectUser(id: string) {
    //รับข้อมูลจาก component ลูกเมื่อมีการเลือกผู้ใช้
    console.log('Selected user ID:', id);
    this.selectUserId = id;
  }
}
