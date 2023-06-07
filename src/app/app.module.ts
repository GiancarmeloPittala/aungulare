import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoverComponent } from './cover/cover.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoComponent } from './todo/todo.component';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule } from '@angular/router';

import { AboutComponent } from './views/about/about.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    TodoInputComponent,
    TodoComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
