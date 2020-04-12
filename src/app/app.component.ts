import { Component, OnInit } from '@angular/core'
import { trigger } from '@angular/animations'

import { ThemeService } from './common/service/theme.service'
import { RouteStateService } from './common/service/route-state.service'
import { routeSlide } from './common/model/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [trigger('route', routeSlide)]
})
export class AppComponent implements OnInit {
  public sideNav: boolean
  public bannerDown: boolean
  public breadcrumbIcon: string
  private _iconMap: { [key: string]: string }
  constructor(public themeService: ThemeService, public routeStateService: RouteStateService) {
    this.bannerDown = false
    this._iconMap = {
      details: 'account_circle',
      skills: 'assessment',
      academics: 'school',
      work: 'work',
      achievements: 'emoji_events',
      code: 'code'
    }
  }

  ngOnInit() {
    this.routeStateService.activeRoute.subscribe(route => {
      if (route) {
        this.breadcrumbIcon = this._iconMap[route.split('/')[2]]
      }
    })
  }

  public toggleNavBar(event: Event) {
    event.stopPropagation()
    this.sideNav = !this.sideNav
  }

  public closeNavBar(isClose: boolean) {
    this.sideNav = false
  }

  public resetAnimation() {
    this.routeStateService.animate = 'void'
  }

  public resetRouteState(event: Event) {
    this.breadcrumbIcon = null
    this.routeStateService.setAnimate(null)
  }
}
