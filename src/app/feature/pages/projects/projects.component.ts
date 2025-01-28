import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CoverPageComponent } from '../../../core/UI/cover-page/cover-page.component';

@Component({
  selector: 'app-projects',
  imports: [
    CommonModule ,
    CoverPageComponent ,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
