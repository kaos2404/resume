import { Component } from '@angular/core'

import { SwipeNavigateService } from 'src/app/common/service/swipe-navigate.service'
import { School } from 'src/app/common/model/academics'
import { DataStoreService } from 'src/app/common/service/data-store.service'

@Component({
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.scss']
})
export class AcademicsComponent {
  public list: School[]
  constructor(public swipeNavigate: SwipeNavigateService, dataStore: DataStoreService) {
    this.list = dataStore.academics
  }
}
