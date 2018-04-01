import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 
import {MatButtonModule, MatGridListModule, MatInputModule, MatIconModule} from '@angular/material';
 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { UsersComponent } from './users/users.component';
import { UsersRegisterComponent } from './users/users-register/users-register.component';
import { UsersViewComponent } from './users/users-view/users-view.component';
 
@NgModule({
  declarations: [
      AppComponent,
      HeaderComponent,
      LoginComponent,
      AuthComponent,
      UsersComponent,
      UsersRegisterComponent,
      UsersViewComponent
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatGridListModule,
      MatInputModule,
      MatIconModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }