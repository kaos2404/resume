import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AboutComponent } from './about/about.component'
import { AppGuard } from './common/guards/app-guard'

const routes: Routes = [
  { path: 'home', canActivate: [AppGuard], loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: '', pathMatch: 'full', component: AboutComponent, canActivate: [AppGuard] }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
