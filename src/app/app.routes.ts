import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MainAsideLayoutComponent } from './pages/layouts/main-aside-layout/main-aside-layout.component';
import { GeneralComponent } from './pages/layouts/general/general.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { MainLayoutComponent } from './pages/layouts/main-layout/main-layout.component';
import { CrudsComponent } from './components/cruds/cruds.component';
import { PerfileComponent } from './pages/perfile/perfile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SettingsComponent } from './pages/settings/settings.component';


export const routes: Routes = [
    {
        path: '',
        title: 'ReVive',
        component: GeneralComponent,
        children: [
            {
                path: '',
                component: MainLayoutComponent,
                children: [
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
                        title: 'ReVive | Perfile',
                        path: 'perfile',
                        component: PerfileComponent
                    },
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
                        title: 'ReVive | Ajustes',
                        path: 'settings',
                        component: SettingsComponent
                    }
                ]
            },
            {
                path: '',
                component: MainAsideLayoutComponent,
                children: [
                    {
                        path: 'dashboard',
                        component: WidgetsComponent
                    },
                    {
                        path: 'users',
                        component: CrudsComponent
                    },
                    {
                        path: 'objects',
                        component: CrudsComponent
                    },
                    {
                        path: 'organizations',
                        component: CrudsComponent
                    },
                    {
                        path: 'categories',
                        component: CrudsComponent
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
