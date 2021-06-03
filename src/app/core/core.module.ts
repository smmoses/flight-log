import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../core/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    MatToolbarModule, 
    CommonModule,
  ],
  exports: [
    MatToolbarModule,
    ToolbarComponent
  ],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule){
    super(parentModule);
  }
}
