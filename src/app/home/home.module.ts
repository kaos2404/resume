import { HomeRoutingModule } from './home-routing.module'
import { NgModule } from '@angular/core'

/* Module */
import { SharedModule } from '../common/shared.module'
import { MaterialModule } from '../common/material.module'

/* Service */
import { SwipeNavigateService } from '../common/service/swipe-navigate.service'

/* Component */
import { HomeComponent } from './home.component'
import { AcademicsComponent } from './academics/academics.component'
import { AchievementsComponent } from './achievements/achievements.component'
import { CodeComponent } from './code/code.component'
import { PersonalDetailsComponent } from './personal-details/personal-details.component'
import { SkillsComponent } from './skills/skills.component'
import { WorkHistoryComponent } from './work-history/work-history.component'

@NgModule({
  declarations: [
    HomeComponent,
    AcademicsComponent,
    AchievementsComponent,
    CodeComponent,
    PersonalDetailsComponent,
    SkillsComponent,
    WorkHistoryComponent
  ],
  imports: [SharedModule, MaterialModule, HomeRoutingModule],
  providers: [SwipeNavigateService]
})
export class HomeModule {}
