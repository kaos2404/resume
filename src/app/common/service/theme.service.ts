import { Injectable } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { LocalStorageService } from 'ngx-localstorage'


import { environment } from 'src/environments/environment';

@Injectable()
export class ThemeService {
  public cssUrl
  public theme: string
  public isLight: boolean
  public themes: {
    light: boolean
    primary: string
    accent: string
    name: string
  }[]
  constructor(private localStorage: LocalStorageService, private domSanitzier: DomSanitizer) {
    this.themes = environment.themes
    this.setTheme(this.localStorage.get('theme') ? this.localStorage.get('theme') : 'dark-cyan')
  }
  public setTheme(name: string) {
    this.theme = name
    this.isLight = this.theme.startsWith('light')
    this.localStorage.set('theme', this.theme)
    this.cssUrl = this.domSanitzier.bypassSecurityTrustResourceUrl('assets/themes/' + this.theme + '.css')
  }
}
