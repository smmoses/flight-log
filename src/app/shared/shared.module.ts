import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [],
  imports: [CommonModule, FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class SharedModule {
  /**
   *
   */
  constructor(library: FaIconLibrary) {
    library.addIcons(faSun);
  }
}
