import { Component, OnInit } from '@angular/core';
import { NurseService } from 'src/app/nurse.service';

interface Schedule {
  id: number;
  nurse_id: number;
  start_time: string;
  end_time: string;
  description: string;
  
}
@Component({
  selector: 'app-nurse-list',
  templateUrl: './nurse-list.component.html',
  styleUrls: ['./nurse-list.component.css']
})
export class NurseListComponent implements OnInit {
  nurseDetails: any;
  selectedNurseSchedule: any[] = [];
  selectedNurseId: number | null = null;
  showProfile: boolean = false;
  showSchedule: boolean = false;
  constructor(private nurseService: NurseService) {}

  ngOnInit(): void {
    this.nurseService.getNurseDetails().subscribe(
      (data) => {
        console.log('Received nurse data:', data);
        this.nurseDetails = data;
      },
      (error) => {
        console.error('Error fetching nurse details:', error);
      }
    );
}

showProf(): void {
  this.showProfile = !this.showProfile;
  this.showSchedule = false; 
}

toggleScheduleModal(nurseId: number): void {
  console.log('ID:', nurseId);
  this.showSchedule = !this.showSchedule;
  if (this.showSchedule) {
    this.selectedNurseId = nurseId;
    this.setSelectedNurseSchedule(nurseId);
  }
  this.showProfile = false;
}

setSelectedNurseSchedule(nurseId: number): void {
  if (this.nurseDetails.data && this.nurseDetails.data.schedules) {
    this.selectedNurseSchedule = this.nurseDetails.data.schedules.filter(
      (schedule: Schedule) => schedule.nurse_id === nurseId
    );
  } else {
    this.selectedNurseSchedule = [];
  }
}
closeScheduleModal(): void {
  this.showSchedule = false;
}


}


