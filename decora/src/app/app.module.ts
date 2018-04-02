import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 
import {MatButtonModule, MatGridListModule, MatInputModule, MatIconModule, MatCardModule} from '@angular/material';
 
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
      routing,
      MatButtonModule,
      MatGridListModule,
      MatInputModule,
      MatIconModule,
      MatCardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }