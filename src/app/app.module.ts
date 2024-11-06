import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';  
import { ApiService } from './api.service';  
import { AppRoutingModule } from './app-routing.module';  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  
    AppRoutingModule,  
  ],
  providers: [ApiService],  
  bootstrap: [AppComponent]
})
export class AppModule { }
