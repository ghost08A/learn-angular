import { CanMatchFn, RedirectCommand, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {
  resolveTitle,
  resolveUserName,
  UserTasksComponent,
} from './users/user-tasks/user-tasks.component';
import { routes as userRouts } from './users/user.routes';

const dummyCanMatch: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const shouldGetAccess = Math.random();
  if (shouldGetAccess < 0.5) {
    return true;
  }
  return new RedirectCommand(router.parseUrl('/unauthorized'));
};

export const routes: Routes = [
  {
    path: '', //your Domain
    component: NoTaskComponent,
    // redirectTo: 'users/u1',
    // pathMatch: 'prefix',
    title: 'No Task Selected',
  },
  {
    path: 'users/:userId', //<your Domain>/users/<uId>
    component: UserTasksComponent,
    children: userRouts,
    canMatch: [dummyCanMatch],
    data: {
      message: 'Hello eiei',
    },
    resolve: {
      userName: resolveUserName,
    },
    title: resolveTitle,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
