import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CoverPageComponent } from '../../../core/UI/cover-page/cover-page.component';
// import { CoverPageComponent } from '../../../core/UI/cover-page/cover-page.component';

@Component({
  selector: 'app-services',
  imports: [
    CommonModule ,
    CoverPageComponent ,
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
