import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CoverPageComponent } from '../../../core/UI/cover-page/cover-page.component';

@Component({
  selector: 'app-about',
  imports: [
    CommonModule ,
    CoverPageComponent ,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
