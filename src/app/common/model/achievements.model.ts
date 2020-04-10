export interface Achievement {
  type: 'award' | 'certificate' | 'scroll'
  message: string
}

export interface Filter {
  type: 'award' | 'certificate' | 'scroll'
  active: boolean
}
