import { Component, OnInit } from '@angular/core'

import { ThemeService } from './common/service/theme.service'
import { RouteStateService } from './common/service/route-state.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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

  toggleNavBar(event: Event) {
    event.stopPropagation()
    this.sideNav = !this.sideNav
  }

  closeNavBar(isClose: boolean) {
    this.sideNav = false
  }
}
