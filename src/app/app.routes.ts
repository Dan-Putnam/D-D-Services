import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AboutUs } from './about-us/about-us';
import { Contact } from './contact/contact';
import { LawnCare } from './lawn-care/lawn-care';
import { PetCare } from './pet-care/pet-care';
import { Cleaning } from './cleaning/cleaning';
import { PowerWashing } from './power-washing/power-washing';
import { SnowRemoval } from './snow-removal/snow-removal';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: Home,
        title: 'Home',
    },
    {
        path: 'about',
        component: AboutUs,
        title: 'AboutUs',
    },
    {
        path: 'contact',
        component: Contact,
        title: 'ContactUs',
    },
    {
        path: 'lawn',
        component: LawnCare,
        title: 'Lawn Care',
    },
    {
        path: 'pet-care',
        component: PetCare,
        title: 'Pet Care',
    },
    {
        path: 'cleaning',
        component:  Cleaning,
        title: 'Cleaning',
    },
    {
        path: 'power-washing',
        component:  PowerWashing,
        title: 'Power Washing',
    },
    {
        path: 'snow-removal',
        component:  SnowRemoval,
        title: 'Snow Removal',
    },
];
