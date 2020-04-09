import { NgModule } from '@angular/core'

/* Module */
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

/* Service */

/* Component */

/* Directive + Pipe */
import { ClickOutsideDirective } from './directives-pipes/clickoutside.directive'
import { FilterPipe } from './directives-pipes/filter.pipe'

@NgModule({
  declarations: [ClickOutsideDirective, FilterPipe],
  exports: [CommonModule, ReactiveFormsModule, FormsModule, ClickOutsideDirective, FilterPipe]
})
export class SharedModule {}
