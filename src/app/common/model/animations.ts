import { trigger, state, style, animate, transition, query, group } from '@angular/animations'

export function fade(time: '0.25s ease') {
  return trigger('fade', [
    state(
      'void',
      style({
        opacity: 0
      })
    ),
    transition('void <=> *', animate(time))
  ])
}

export function fadeOut(time: string = '0.5s ease') {
  return trigger('fadeOut', [
    state(
      'void',
      style({
        opacity: 0,
        transform: 'scale(0)'
      })
    ),
    transition('* => void', animate(time))
  ])
}
const BEIZER = 'cubic-bezier(0.6, 0.1, 0.4, 0.2)'

export const routeSlide = [
  transition('* => fromLeft', [
    query(
      ':enter, :leave',
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      })
    ),
    query(
      ':enter',
      style({
        transform: 'translateX(-100%)'
      })
    ),
    query(
      ':leave',
      style({
        transform: 'translateX(0%)'
      })
    ),
    group([
      query(
        ':enter',
        animate(
          `0.5s ${BEIZER}`,
          style({
            transform: 'translateX(0%)'
          })
        )
      ),
      query(
        ':leave',
        animate(
          `0.5s ${BEIZER}`,
          style({
            transform: 'translateX(100%)'
          })
        )
      )
    ])
  ]),
  transition('* => fromRight', [
    query(
      ':enter, :leave',
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      })
    ),
    query(
      ':enter',
      style({
        transform: 'translateX(100%)'
      })
    ),
    query(
      ':leave',
      style({
        transform: 'translateX(0%)'
      })
    ),
    group([
      query(
        ':enter',
        animate(
          `0.5s ${BEIZER}`,
          style({
            transform: 'translateX(0%)'
          })
        )
      ),
      query(
        ':leave',
        animate(
          `0.5s ${BEIZER}`,
          style({
            transform: 'translateX(-100%)'
          })
        )
      )
    ])
  ])
]
