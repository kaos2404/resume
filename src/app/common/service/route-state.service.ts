import { BehaviorSubject } from 'rxjs'

export class RouteStateService {
  private _activatedRoute: string
  public activeRoute: BehaviorSubject<string>
  public animate: string
  private _pos: number
  constructor() {
    this.activeRoute = new BehaviorSubject(null)
  }
  public set activatedRoute(route: string) {
    this._activatedRoute = route
    this.activeRoute.next(this._activatedRoute)
  }
  public setAnimate(pos: number) {
    if (this._pos && pos && this._pos != pos) {
      this.animate = this._pos > pos ? 'fromLeft' : 'fromRight'
    }
    this._pos = pos
  }
}
