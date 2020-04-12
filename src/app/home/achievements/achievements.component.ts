import { Component } from '@angular/core'

import { Achievement, Filter } from 'src/app/common/model/achievements.model'
import { SwipeNavigateService } from 'src/app/common/service/swipe-navigate.service'
import { fadeOut } from 'src/app/common/model/animations'

@Component({
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent {
  public list: Achievement[]

  public filter: Filter[]

  public filterBy: (i: Achievement, filter: Filter[]) => boolean
  constructor(public swipeNavigate: SwipeNavigateService) {
    this.list = [
      {
        type: 'award',
        message: 'Runners up in inter-school basketball competition(2012, Salt Lake School, Kolkata).'
      },
      {
        type: 'award',
        message: 'First place in Java coding contest Paridhi(Meghnad Saha Institute of Technology, Kolkata, 2013).'
      },
      {
        type: 'award',
        message:
          'First place in zonal round of autonomous robotics competition Robotryst organized by Robosapiens Technologies(2014).'
      },
      {
        type: 'certificate',
        message: 'Certificate of professional course in Network Management(2015).'
      },
      {
        type: 'certificate',
        message:
          'Certificate of honour for co-organizing manual robotics competition in Techtix(2016, Kalyani Government Engineering College, Kalyani).'
      },
      {
        type: 'award',
        message:
          'Awarded “On the Spot Award” multiple times for technical assistance, problem solving and analytical abilities for efficient and effective solutions(2016-2018).'
      },
      {
        type: 'award',
        message: 'Awarded “Star of the Month” for fast production issue resolution in multiple projects(2018).'
      },
      {
        type: 'award',
        message: 'Awarded "Innovation Pride Award" for securing 24th rank in TCS India coding contest(Codevita, 2018).'
      },
      {
        type: 'award',
        message:
          'Awarded “Star of the Quarter” for delivering under strict timelines and assisting multiple projects in their development bottlenecks at the same time(2019).'
      },
      {
        type: 'award',
        message: 'Awarded "Innovation Pride Award" for securing 2nd rank in TCS India coding contest(Codevita, 2019).'
      },
      {
        type: 'award',
        message: 'Secured 71st rank in TCS Global coding contest(Supercoders, 2019).'
      },
      {
        type: 'scroll',
        message: 'Published white paper on Java Web Application Security under TCS Internal knowledge database(2019).'
      },
      {
        type: 'award',
        message: 'Runners up(in team) for bay decoration during Durga Puja event(2019).'
      }
    ]

    this.filter = [
      {
        type: 'award',
        active: true
      },
      {
        type: 'certificate',
        active: true
      },
      {
        type: 'scroll',
        active: true
      }
    ]

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
