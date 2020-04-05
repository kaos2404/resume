import { Component } from '@angular/core'

import { SwipeNavigateService } from 'src/app/common/service/swipe-navigate.service'

@Component({
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  constructor(public swipeNavigate: SwipeNavigateService) {}
}
