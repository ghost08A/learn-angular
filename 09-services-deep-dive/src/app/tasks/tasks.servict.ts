import { inject, Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';
import { LoggingService } from '../logging.service';

// @Injectable({
//   providedIn: 'root',
// })
export class TasksService {
  private tasks = signal<Task[]>([]);
  private loggingService = inject(LoggingService);

  alltasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newtask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN' as const,
    };
    this.tasks.update((oldtasks) => [...oldtasks, newtask]);
    this.loggingService.log(`Task added with id ${newtask.id}`);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map(
        (task) => (task.id === taskId ? { ...task, status: newStatus } : task), //ถ้าเจอidตัวที่แก้ให้ก็อปค่ามาและัเปลี่ยนstatus ถ้าไม่เจอก็คืนค่าเดิม
      ),
    );
    this.loggingService.log(
      `Task with id ${taskId} updated to status ${newStatus}`,
    );
  }
}
