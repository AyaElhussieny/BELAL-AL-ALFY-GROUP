import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-services',
  imports: [
    CommonModule
  ],
  templateUrl: './card-services.component.html',
  styleUrl: './card-services.component.css'
})
export class CardServicesComponent {

  imgUrl = input();
  numCard = input();
  title = input();
  description = input();
}
