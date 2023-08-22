import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NurseService } from '../nurse.service';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,HttpClientModule 
  ]
})
export class ProfileModule { }
