import { BehaviorSubject } from 'rxjs'

export class RouteStateService {
  private _activatedRoute: string
  public activeRoute: BehaviorSubject<string>
  constructor() {
    this.activeRoute = new BehaviorSubject(null)
  }
  public set activatedRoute(route: string) {
    this._activatedRoute = route
    this.activeRoute.next(this._activatedRoute)
  }
}
