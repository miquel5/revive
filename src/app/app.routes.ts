import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MainAsideLayoutComponent } from './pages/layouts/main-aside-layout/main-aside-layout.component';
import { GeneralComponent } from './pages/layouts/general/general.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { MainLayoutComponent } from './pages/layouts/main-layout/main-layout.component';
import { CrudsComponent } from './pages/cruds/cruds.component';
import { PerfileComponent } from './components/perfile/perfile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


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
                        path: 'crud',
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
