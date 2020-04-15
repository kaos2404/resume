import { Component } from '@angular/core'

import { SwipeNavigateService } from 'src/app/common/service/swipe-navigate.service'
import { Skill } from 'src/app/common/model/skills.model'
import { DataStoreService } from 'src/app/common/service/data-store.service'

@Component({
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  public list: Skill[]
  public active: Skill
  public showActive: boolean

  constructor(public swipeNavigate: SwipeNavigateService, dataStore: DataStoreService) {
    this.list = dataStore.skills
    this.active = this.list[0]
    this.showActive = false
  }

  public onItemClicked(event: Event, item: Skill) {
    this.active = item
    setTimeout(() => {
      this.showActive = true
    }, 300)
  }
}
