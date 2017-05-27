import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SelectGroupComponent } from './select-group.component';
import { SelectGroupService } from './services/select-group.service';
import { NavbarComponent } from './navbar.component';
import { TestComponent } from './do-test.component';
import { HttpModule } from '@angular/http';
import { appRoutes } from './app.routes';
import{FormsModule} from '@angular/forms';
import {ResuiltComponent} from './resuilt.component';


@NgModule({
  imports: [
    BrowserModule, HttpModule, appRoutes,FormsModule
  ],
  declarations: [
    AppComponent,
    SelectGroupComponent,
    NavbarComponent,
    TestComponent,
    ResuiltComponent
  ],
  providers: [
    SelectGroupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
