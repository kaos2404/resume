import { Component } from '@angular/core'

import { Achievement, Filter } from 'src/app/common/model/achievements.model'
import { SwipeNavigateService } from 'src/app/common/service/swipe-navigate.service'
import { DataStoreService } from 'src/app/common/service/data-store.service'

@Component({
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent {
  public list: Achievement[]

  public filter: Filter[]

  public filterBy: (i: Achievement, filter: Filter[]) => boolean
  constructor(public swipeNavigate: SwipeNavigateService, dataStore: DataStoreService) {
    this.list = dataStore.achivements

    this.filter = this.list
      .map(i => i.type)
      .filter((i, index, arr) => arr.indexOf(i) === index)
      .map(i => ({
        type: i,
        active: true
      }))

    this.filterBy = (i: Achievement, filter: Filter[]) =>
      filter
        .filter(i => i.active)
        .map(i => i.type)
        .indexOf(i.type) > -1
  }

  public onToggleFilter(item: { type: 'award' | 'certificate' | 'scroll'; active: boolean }) {
    item.active = !item.active
    this.filter = [...this.filter]
  }
}
