import { NgModule } from '@angular/core'
import { BrowserModule, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ServiceWorkerModule } from '@angular/service-worker'
import { NgxLocalStorageModule } from 'ngx-localstorage'
import { environment } from '../environments/environment'

/* Module */
import { AppRoutingModule } from './app-routing.module'
import { MaterialModule } from './common/material.module'
import { SharedModule } from './common/shared.module'

/* Service */
import { ThemeService } from './common/service/theme.service'
import { RouteStateService } from './common/service/route-state.service'

/* Component */
import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { AboutComponent } from './about/about.component'

@NgModule({
  declarations: [AppComponent, NavbarComponent, AboutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HammerModule,
    AppRoutingModule,
    NgxLocalStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MaterialModule,
    SharedModule
  ],
  providers: [ThemeService, RouteStateService],
  bootstrap: [AppComponent]
})
export class AppModule {}
