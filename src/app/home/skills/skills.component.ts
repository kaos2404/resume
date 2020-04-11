import { Component } from '@angular/core'

import { SwipeNavigateService } from 'src/app/common/service/swipe-navigate.service'
import { Skill } from 'src/app/common/model/skills.model'

@Component({
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  public list: Skill[]
  public active: Skill
  public showActive: boolean

  constructor(public swipeNavigate: SwipeNavigateService) {
    this.list = [
      {
        icon: 'angular',
        type: 'fab',
        name: 'Angular (6, 8 and 9)',
        description: [
          'Apr, 2018 - Present',
          'A colleague in TCS introduced me to a SPA developed in AngularJS.',
          'Mesmerized with the fluidity and ease of use, I wanted to understand how it worked. When browsing through materials on AngularJS, I came across Angular 4. The difference was stark and Angular appealed to me more than AngularJS.',
          'I started learning Angular 6 and showcased an application to my managers who approved of the design. Soon I had built my first application using Angular 6 on the frontend and Spring MVC REST Controllers at the backend.'
        ]
      },
      {
        icon: 'flask',
        type: 'fas',
        name: 'Jasmine/Karma Unit Testing',
        description: [
          'Aug, 2019 - Present',
          'Upon being asked by my managers, I started writing test cases to automate few of the testing scenarios that were being repeated too ofter.',
          'I was very quick in picking up the intricacies involved in writing test cases, sat with the testers to understand what they did and I tried to replicate the exact process, from a mouse click to a keyboard input. Nothing was spared.',
          'I adhere to testing both the logic in the TS files as well the templates(checking whether necessary classes were applied, if the item is to be hidden, etc.).'
        ]
      },
      {
        icon: 'js-square',
        type: 'fab',
        name: 'Javascript/jQuery',
        description: [
          'Nov, 2016 - Present',
          'When asked to develop an admin portal in Spring MVC, I had my first interaction with Javascript and jQuery. Simple form validations, DOM manipulations and sometimes even animations! I learnt most of my javascript further down the line when I was learning Angular.'
        ]
      },
      {
        icon: 'html5',
        type: 'fab',
        name: 'HTML',
        description: [
          'Nov, 2016 - Present',
          'HTML and JSP were one of the technologies that I had learnt when working on Spring MVC applications.'
        ]
      },
      {
        icon: 'sass',
        type: 'fab',
        name: 'SASS/SCSS Preprocessing',
        description: [
          'Jun, 2018 - Present',
          'When learning Angular, I came across Angular Material. When trying to make my own theme for Material, I started learning about SCSS and it was an amazing experience. Since then I have used a lot of mixins, rules and other features heavily in all of my applications.',
          'You should check out the mixins I have written for the themes of this application. '
        ]
      },
      {
        icon: 'css3-alt',
        type: 'fab',
        name: 'CSS',
        description: [
          'Nov, 2016 - Present',
          'Styling HTML elements is an obsession for me. Everything needs to be picture perfect and CSS has helped me achieve so much!',
          'Having started with bootstrap, simple layouts, responsive designs and now PWA I have learnt a lot, and still have a lot to learn. CSS has allowed me to express my creativity and let me turn my imagination into beautiful interfaces.'
        ]
      },
      {
        icon: 'chart-bar',
        type: 'fas',
        name: 'Jasper Report/iReport Designer',
        description: [
          'Jun, 2017 - Present',
          'Having worked in TCS-SBI, statements and reports of various sorts were a regular feature. Inititally most of the applications I was working on used to generate report using direct connection between the database and iReport designer.',
          'I thought that to be inefficient and set out to learn JasperReports and iReport. It took me a week but I was able to move all of the database interfacing reports to use Java beans instead.',
          'This allowed rapid generation of reports. Instead of iReport creating separate connections to generate each report, I could fetch all the data once from the database via one connection and generate all the reports in one go. The improvement was drastic.'
        ]
      },
      {
        icon: 'java',
        type: 'fab',
        name: 'Java',
        description: [
          'Nov, 2016 - Present',
          'In class 11, I started learning about Java for the first time. Everyone else had two years of experience over me and that was a challenge.',
          'In the same way that I treat most challenges, this one was no exception. I have always been attracted to logic and analytical thinking, and that coupled with my hunger to overcome challenges pushed me towards Java. I fell in love with the language, derived great satisfaction from solving problems, improving code and converting logic to algorithm.',
          'Java has helped me to be one of the top performers in TCS notably being awarded prizes for being 2nd (all India) and 71st (global) in coding contests.'
        ]
      },
      {
        icon: 'leaf',
        type: 'fas',
        name: 'Spring 4 MVC',
        description: [
          'Apr, 2017 - Apr, 2019',
          'Spring was introduced to me when my client requested for an admin portal to the application I was working on.',
          'The concepts of dependency injection, annotations, contexts were all new to me then. I had spent a lot of time studying and understanding how things actually worked. It was then that I realized how powerful annotaions were and had soon developed two programs using annotation proccessing that reduced the efforts of many across my team and outside.'
        ]
      },
      {
        icon: 'globe',
        type: 'fas',
        name: 'REST and SOAP Webservice',
        description: [
          'Nov, 2016 - Apr, 2019',
          'The first application that I had worked on was based on SOAP communication between two nodes of a stack. I learnt REST when working on the backend for my Angular applications.'
        ]
      },
      {
        icon: 'server',
        type: 'fas',
        name: 'Oracle Weblogic Server',
        description: [
          'Nov, 2016 - Apr, 2019',
          'All of my web applications(Java) were deployed on Weblogic server. And it was slow. So slow that I was compelled to write scripts that used to automate the entire process- stop, deploy, stage and start. Weblogic helped me to understand how servers worked and more importantly how to write scripts.'
        ]
      },
      {
        icon: 'server',
        type: 'fas',
        name: 'Apache HTTP Server',
        description: [
          'Nov, 2016 - Apr, 2019',
          'From routing between the web facing server to deploying Angular applications, Apache has been a feature for most of the time in TCS. With HTTP server I learnt about certificates, keys and encryption.'
        ]
      },
      {
        icon: 'database',
        type: 'fas',
        name: 'Oracle PL/SQL',
        description: [
          'Nov, 2016 - Apr, 2019',
          'Queries, procedures and millions of records ofter made my life very difficult. Understanding how queries worked, joins, keys, cascading, sqlldr, and so much more made my life less difficult but not that much. Sometimes I have stayed in office for 16 hrs straight because the data took too much time to process.'
        ]
      },
      {
        icon: 'linux',
        type: 'fab',
        name: 'Linux (RHEL 6 and 7)',
        description: [
          'Nov, 2016 - Apr, 2019',
          'During my training in Trivandrum I was first introduced to the bash. Scripting has been so fun over the course of my career. I have learnt so much with shell and implemented so much, to the point that there was no manual work involved in anything. Even the disaster recovery drills were automated! Configurations changed, logs verified, servers started, applications deployed, everything had a script. Even fixing servers that I had mistakenly broken by deleting files that were not supposed to be deleted had a script. But no one knows that! '
        ]
      }
    ]
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
