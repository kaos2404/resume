import { Component } from '@angular/core'

import { SwipeNavigateService } from 'src/app/common/service/swipe-navigate.service'

@Component({
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsComponent {
  constructor(public swipeNavigate: SwipeNavigateService) {}
  public onLinkClicked(event: Event, link: string) {
    console.debug(link)
    window.open(link, '_blank')
  }
}
