import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { UsersService } from '../users.service';
import {
  ActivatedRoute,
  RouterOutlet,
  RouterLink,
  ResolveFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent {
  // userId = input.required<string>();
  private userService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);
  message = input.required<string>();
  userName = input.required<string>();
  private destroyedRef = inject(DestroyRef);

  // ngOnInit(): void {
  //   const subscription = this.activatedRoute.data.subscribe({
  //     next: (data) => {
  //       console.log(data);
  //     }
  //   });
  //   this.destroyedRef.onDestroy(() => {
  //     subscription.unsubscribe();
  //   });
  // }
}

// ฟังก์ชันนี้จะถูกเรียกโดย Angular Router เมื่อมีการนำทางไปยังเส้นทางที่กำหนดไว้ใน app.routes.ts
// และจะทำหน้าที่ในการดึงข้อมูลชื่อผู้ใช้จาก UsersService โดยใช้ userId ที่ได้จาก ActivatedRouteSnapshot
// เพื่อค้นหาชื่อผู้ใช้ที่ตรงกับ userId นั้น ๆ และส่งกลับเป็นผลลัพธ์ของการ resolve ข้อมูลสำหรับเส้นทางนั้น ๆ
export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot,
) => {
  const userService = inject(UsersService);
  const userName =
    userService.users.find(
      (u) => u.id === activatedRoute.paramMap.get('userId'),
    )?.name || '';
  return userName;
};

export const resolveTitle: ResolveFn<string> = (
  activatedRoute,
  routerState,
) => {
  return resolveUserName(activatedRoute, routerState) + "'s Tasks"; //Max's Tasks
};
