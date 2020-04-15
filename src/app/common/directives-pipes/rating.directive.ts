import { Directive, Input, ElementRef, OnChanges, SimpleChanges, Renderer2 } from '@angular/core'

@Directive({
  selector: '[rating]'
})
export class RatingDirective implements OnChanges {
  @Input() rating: number

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.rating) {
      const children = this.el.nativeElement.children
      for (let index = 0; index < children.length; index++) {
        this.renderer.removeChild(this.el.nativeElement, children[index])
      }

      let i = 0
      while (i < this.rating) {
        if (i + 1 <= this.rating) {
          this.renderer.appendChild(this.el.nativeElement, this.createElement('star'))
          i += 1
        } else if (i + 0.5 <= this.rating) {
          this.renderer.appendChild(this.el.nativeElement, this.createElement('star_half'))
          i += 0.5
        }
      }

      while (i + 1 <= 5) {
        this.renderer.appendChild(this.el.nativeElement, this.createElement('star_outline'))
        i++
      }
    }
  }

  createElement(star: string) {
    const icon = this.renderer.createElement('span')
    const text = this.renderer.createText(star)
    this.renderer.addClass(icon, 'material-icons')
    this.renderer.addClass(icon, 'icon')
    this.renderer.addClass(icon, 'detail-icon-clr')
    this.renderer.appendChild(icon, text)
    return icon
  }
}
