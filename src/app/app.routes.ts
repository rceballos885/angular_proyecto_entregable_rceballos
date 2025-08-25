import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Login } from './features/login/login';
import { RoutePaths } from '../shared/routes';
import { roleGuardGuard } from '../shared/guards/role-guard-guard';
import { access } from 'fs';
import { accessguardGuard } from '../shared/guards/accessguard-guard';

export const routes: Routes = [
    {
        path: RoutePaths.LOGIN,
        component: Login
    },
    // {
    //     path: '',
    //     component: Home
    // },
    {
        path: RoutePaths.STUDENTS,
        canActivate: [accessguardGuard],
        loadComponent: () => import('./features/students-table/students-table').then(m => m.StudentsTable)
    },
    {
        path: RoutePaths.STUDENT,
        canActivate: [accessguardGuard],
        loadComponent: () => import('./features/student/student').then(m => m.Student)
    },
    {
        path: RoutePaths.REGISTER_ST,
        canActivate: [accessguardGuard],
        loadComponent: () => import('./features/add-form/add-form').then(m => m.AddForm)
    },
    {
        path: RoutePaths.REGISTER,
        canActivate: [accessguardGuard],
        loadComponent: () => import('./features/registrations/registrations').then(m => m.Registrations)
    },
    {
        path: RoutePaths.COURSES,
        canActivate: [accessguardGuard],
        loadComponent: () => import('./features/courses/courses').then(m => m.Courses)
    },
    {
        path: RoutePaths.NO_PAGE,
        loadComponent: () => import('./features/no-page/no-page').then(m => m.NoPage)
    }
];
