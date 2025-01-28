import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent : ()=> import ('./feature/pages/home/home.component').then( p => p.HomeComponent),
        title :'Home'
    },
    {
        path:'about',
        loadComponent : ()=> import ('./feature/pages/about/about.component').then( p => p.AboutComponent),
        title :'About Us'
    },
    {
        path:'services',
        loadComponent : ()=> import ('./feature/pages/services/services.component').then( p => p.ServicesComponent),
        title :'Services'
    },
    {
        path:'projects',
        loadComponent : ()=> import ('./feature/pages/projects/projects.component').then( p => p.ProjectsComponent),
        title :'Projects'
    },
    
    {
        path:'contact-us',
        loadComponent : ()=> import ('./feature/pages/contact/contact.component').then( p => p.ContactComponent),
        title :'Contact Us'
    }
];
