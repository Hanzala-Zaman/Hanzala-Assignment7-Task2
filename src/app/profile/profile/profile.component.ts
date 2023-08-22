import { Component } from '@angular/core';
import { NurseService } from 'src/app/nurse.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent
{
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
}
