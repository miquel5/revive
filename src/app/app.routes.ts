import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MainAsideLayoutComponent } from './pages/layouts/main-aside-layout/main-aside-layout.component';
import { GeneralComponent } from './pages/layouts/general/general.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { MainLayoutComponent } from './pages/layouts/main-layout/main-layout.component';
import { CrudComponent } from './components/crud/crud.component';
import { PerfileComponent } from './pages/perfile/perfile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/map/map.component';
import { ObjectsComponent } from './pages/objects/objects.component';
import { AboutComponent } from './pages/about/about.component';
import { HistoryComponent } from './pages/history/history.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    },
    {
        title: 'ReVive | Inicio',
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        title: 'ReVive | Sobre nosotros',
        path: 'about',
        component: AboutComponent
    },
    {
        path: '',
        title: 'ReVive',
        component: GeneralComponent,
        children: [
            {
                title: 'ReVive | Register',
                path: 'register',
                component: RegisterComponent
            },
            {
                title: 'ReVive | Login',
                path: 'login',
                component: LoginComponent
            },
            {
                path: '',
                component: MainLayoutComponent,
                children: [
                    {
                        title: 'ReVive | Perfile',
                        path: 'perfile',
                        component: PerfileComponent
                    },
                    {
                        title: 'ReVive | productos',
                        path: 'objects',
                        component: ObjectsComponent
                    },
                    {
                        title: 'ReVive | Historial',
                        path: 'history',
                        component: HistoryComponent
                    },
                    {
                        title: 'ReVive | Inicio',
                        path: 'home',
                        component: HomeComponent
                    },
                    {
                        title: 'ReVive | Ubicaciones',
                        path: 'map',
                        component: MapComponent
                    }
                ]
            },
            {
                title: 'ReVive | Gestión',
                path: '',
                component: MainAsideLayoutComponent,
                children: [
                    {
                        path: 'dashboard',
                        component: WidgetsComponent
                    },
                    {
                        path: 'users',
                        component: CrudComponent
                    },
                    {
                        path: 'warehouse',
                        component: CrudComponent
                    },
                    {
                        path: 'organizations',
                        component: CrudComponent
                    },
                    {
                        path: 'categories',
                        component: CrudComponent
                    }
                ]
            },
        ]
    },
    { 
        path: '**',
        component: NotFoundComponent,
    }
];
