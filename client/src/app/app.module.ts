import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { SharedModule } from './_modules/shared.module';
import { TestErrorComponent } from './errors/test-error/test-error.component';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';

@NgModule({
  declarations: [ // declare components that the module needs to load
    AppComponent, 
    NavComponent, 
    HomeComponent, 
    RegisterComponent, 
    MemberListComponent, 
    MemberDetailComponent, 
    ListsComponent, 
    MessagesComponent, TestErrorComponent, NotFoundComponent, ServerErrorComponent
  ],
  imports: [       // to use any other modules of angular/personal we import them here
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule           // Shared modules imports any extra modules that arent angular specified.
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}  // multi: true means that it adds our interceptor alongside the rest of the implemented interceptors. If it is false then it means it will overright the others.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
