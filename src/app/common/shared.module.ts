import { NgModule } from '@angular/core'

/* Module */
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

/* Service */

/* Component */

/* Directive */
import { ClickOutsideDirective } from './directives-pipes/clickoutside.directive'

@NgModule({
  declarations: [ClickOutsideDirective],
  exports: [ReactiveFormsModule, FormsModule, ClickOutsideDirective]
})
export class SharedModule {}
