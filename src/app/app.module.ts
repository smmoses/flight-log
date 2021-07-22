import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ShellComponent } from './shell/shell.component';
import { LogBookModule } from './log-book/log-book.module';

@NgModule({
  declarations: [AppComponent, ShellComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    LogBookModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
