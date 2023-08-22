import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NurseListComponent } from './nurses/nurse-list/nurse-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile/profile.component';

const routes: Routes = [
  
  { path: 'nurses', component: NurseListComponent },
  { path: 'profile', component: ProfileComponent }
  
];
@NgModule({
  declarations: [
    NurseListComponent,
    AppComponent,ProfileComponent
  ],
  imports: [[RouterModule.forRoot(routes)],
    BrowserModule, HttpClientModule, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
