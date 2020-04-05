import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

/* Guard */
import { HomeChildGuard } from '../common/guards/home-child.guard'

/* Component */
import { PersonalDetailsComponent } from './personal-details/personal-details.component'
import { SkillsComponent } from './skills/skills.component'
import { AcademicsComponent } from './academics/academics.component'
import { WorkHistoryComponent } from './work-history/work-history.component'
import { AchievementsComponent } from './achievements/achivements.component'
import { CodeComponent } from './code/code.component'

export const routes: Routes = [
  {
    path: '',
    canActivateChild: [HomeChildGuard],
    children: [
      { path: 'details', component: PersonalDetailsComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'academics', component: AcademicsComponent },
      { path: 'work', component: WorkHistoryComponent },
      { path: 'achievements', component: AchievementsComponent },
      { path: 'code', component: CodeComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [HomeChildGuard]
})
export class HomeRoutingModule {}
