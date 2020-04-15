import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { DataStoreService } from '../service/data-store.service'

@Injectable()
export class AppGuard implements CanActivate {
  constructor(private httpClient: HttpClient, private dataStore: DataStoreService) {}
  canActivate(): Observable<boolean> {
    return this.httpClient.get('assets/json/data.json').pipe(
      map((data: any) => {
        this.dataStore.academics = data.academics
        this.dataStore.achivements = data.achievements
        this.dataStore.personalDetails = data.personalDetails
        this.dataStore.skills = data.skills
        return true
      })
    )
  }
}
