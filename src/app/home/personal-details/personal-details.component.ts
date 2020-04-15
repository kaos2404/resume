import { Component } from '@angular/core'

import { SwipeNavigateService } from 'src/app/common/service/swipe-navigate.service'
import { PersonalDetails } from 'src/app/common/model/personal-detail'
import { DataStoreService } from 'src/app/common/service/data-store.service'

@Component({
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent {
  public details: PersonalDetails
  constructor(public swipeNavigate: SwipeNavigateService, dataStore: DataStoreService) {
    this.details = dataStore.personalDetails
  }
  public onLinkClicked(event: Event, link: string) {
    window.open(link, '_blank')
  }
}
