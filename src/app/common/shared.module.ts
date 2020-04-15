import { NgModule } from '@angular/core'

/* Module */
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

/* Service */

/* Component */

/* Directive + Pipe */
import { ClickOutsideDirective } from './directives-pipes/clickoutside.directive'
import { FilterPipe } from './directives-pipes/filter.pipe'
import { RatingDirective } from './directives-pipes/rating.directive'

@NgModule({
  declarations: [ClickOutsideDirective, FilterPipe, RatingDirective],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ClickOutsideDirective,
    FilterPipe,
    RatingDirective
  ]
})
export class SharedModule {}
