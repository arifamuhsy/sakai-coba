import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { AuthGuard } from './core/guards/auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                canActivate: [AuthGuard],
                canActivateChild: [AuthGuard],
                children: [
                    { path: '', loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'uikit', loadChildren: () => import('./components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./components/pages/pages.module').then(m => m.PagesModule) }
                ]
            },
            { path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
