import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CoverPageComponent } from '../../../core/UI/cover-page/cover-page.component';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule ,
    CoverPageComponent ,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
