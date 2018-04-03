import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
 
import {MatButtonModule, MatGridListModule, MatInputModule, MatIconModule, MatCardModule, MatTableModule} from '@angular/material';
 
import { fakeBackendProvider } from './_helpers/fake-backend';
import { UserService } from './_services/user.service';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { AuthService } from './_services/auth.service';
import { AuthGuard } from './_guards/auth.guard';


import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
 
@NgModule({
  declarations: [
      AppComponent,
      HeaderComponent,
      LoginComponent,
      HomeComponent,
      RegisterComponent
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpClientModule,
      routing,
      MatButtonModule,
      MatGridListModule,
      MatInputModule,
      MatIconModule,
      MatCardModule,
      MatTableModule
    ],
    providers: [
      AuthGuard,
      AuthService,
      UserService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
      },
      fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }