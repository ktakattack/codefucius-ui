import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RevieweeComponent } from './reviewee/reviewee.component';
import { ReviewerComponent } from './reviewer/reviewer.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';

import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{MaterialModule} from './material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RevieweeComponent,
    ReviewerComponent,
    AdminComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
