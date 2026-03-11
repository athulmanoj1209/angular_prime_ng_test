import { Routes } from '@angular/router';
import { RenderMode } from '@angular/ssr';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./expensive-component/expensive-component').then(com => com.ExpensiveComponent),
    },
    {
        path: 'under-develop',
        loadComponent: () => import('./under.development/under.development').then(com => com.UnderDevelopment)
    },
    {
        path: 'auditor-details/:id',
        loadComponent: () => import('./auditorprofile/auditorprofile').then(com => com.Auditorprofile),
        // renderMode: RenderMode.Server,
    }
];
