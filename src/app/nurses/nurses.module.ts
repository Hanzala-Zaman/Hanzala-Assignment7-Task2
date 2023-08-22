import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NurseListComponent } from './nurse-list/nurse-list.component';
import { NurseService } from '../nurse.service';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    HttpClientModule 
  ],
  providers: 
  [
    NurseService 
  ]
})
export class NursesModule { }
