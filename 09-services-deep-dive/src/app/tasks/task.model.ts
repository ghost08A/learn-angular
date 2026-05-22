import { InjectionToken } from '@angular/core';

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

type TaskStatusOptions = {
  value: 'open' | 'in-progress' | 'done';
  tasksStatus: TaskStatus;
  Text: string;
}[];

export const TASK_STATUS_OPTIONS = new InjectionToken<TaskStatusOptions>(
  'task-status-options',
);

export const TaskStatusOptions: TaskStatusOptions = [
  {
    value: 'open',
    tasksStatus: 'OPEN',
    Text: 'Open',
  },
  {
    value: 'in-progress',
    tasksStatus: 'IN_PROGRESS',
    Text: 'In Progress',
  },
  {
    value: 'done',
    tasksStatus: 'DONE',
    Text: 'Done',
  },
];

export const taskStatusOptionsPovider = {
  provide: TASK_STATUS_OPTIONS,
  useValue: TaskStatusOptions,
};

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
