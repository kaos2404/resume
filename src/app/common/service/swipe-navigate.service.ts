import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { RouteStateService } from './route-state.service'

@Injectable()
export class SwipeNavigateService {
  public routes: string[]
  public active: number
  constructor(private _router: Router, private routeStateService: RouteStateService) {
    this.active = -1
    this.routes = ['details', 'skills', 'academics', 'work', 'achievements', 'code']
    this.routeStateService.activeRoute.subscribe(data => {
      if (data) {
        this.active = this.routes.indexOf(data.split('/')[2])
      }
    })
  }

  onSwipeLeft(event) {
    if (this.active < this.routes.length - 1) {
      this.active++
      this._router.navigate(['/home', this.routes[this.active]])
    }
  }

  onSwipeRight(event) {
    if (this.active > 0) {
      this.active--
      this._router.navigate(['/home', this.routes[this.active]])
    }
  }
}
