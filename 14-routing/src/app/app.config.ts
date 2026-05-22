import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';
import { routes } from './app.routes';

export const appConfig = {
  providers: [provideRouter(routes,withComponentInputBinding(), withRouterConfig({
    paramsInheritanceStrategy: 'always',
  }))],
};
