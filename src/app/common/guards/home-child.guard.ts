import { Injectable } from '@angular/core'
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

import { RouteStateService } from '../service/route-state.service'

@Injectable()
export class HomeChildGuard implements CanActivateChild {
  constructor(private routeStateService: RouteStateService) {}
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    route.data.pos && this.routeStateService.setAnimate(route.data.pos)
    this.routeStateService.activatedRoute = '/home/' + route.url[0].path
    return true
  }
}
