import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-start-title',
  imports: [
    CommonModule
  ],
  templateUrl: './start-title.component.html',
  styleUrl: './start-title.component.css'
})
export class StartTitleComponent {

  smallTitle = input();
  bigTitle = input();
}
