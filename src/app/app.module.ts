import { LogService } from './services/log.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogsComponent } from './components/logs/logs.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LogFormComponent } from './components/log-form/log-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LogsComponent,
    NavBarComponent,
    LogFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],

  providers: [LogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
