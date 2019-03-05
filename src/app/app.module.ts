import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {UserDetailsComponent} from './user-details/user-details.component';
import {FormsModule} from '@angular/forms';
import {CreateUserComponent} from './create-user/create-user.component';
import { UserFilterPipe } from './user-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    CreateUserComponent,
    UserFilterPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
