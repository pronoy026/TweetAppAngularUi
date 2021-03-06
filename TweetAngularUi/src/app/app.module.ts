import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { TweetsComponent } from './tweets/tweets.component';
import { AllusersComponent } from './allusers/allusers.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UsersettingsComponent } from './usersettings/usersettings.component'
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { DatashareService } from './datashare.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { TweetService } from './tweet.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
    HomeComponent,
    TweetsComponent,
    AllusersComponent,
    UserdashboardComponent,
    UsersettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ AuthService, AuthGuard, DatashareService,
    { provide : HTTP_INTERCEPTORS, useClass : TokenInterceptorService, multi : true },
  TweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
