import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { RoutePaths } from '../shared/routes';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: RoutePaths.STUDENTS,
        loadComponent: () => import('./features/students-table/students-table').then(m => m.StudentsTable)
    },
    {
        path: RoutePaths.STUDENT,
        loadComponent: () => import('./features/student/student').then(m => m.Student)
    },
    {
        path: RoutePaths.REGISTER_ST,
        loadComponent: () => import('./features/add-form/add-form').then(m => m.AddForm)
    },
    {
        path: RoutePaths.REGISTER,
        loadComponent: () => import('./features/registrations/registrations').then(m => m.Registrations)
    },
    {
        path: RoutePaths.COURSES,
        loadComponent: () => import('./features/courses/courses').then(m => m.Courses)
    },
    {
        path: RoutePaths.NO_PAGE,
        loadComponent: () => import('./features/no-page/no-page').then(m => m.NoPage)
    }
];
