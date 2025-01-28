import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-main-btn',
  imports: [CommonModule],
  templateUrl: './main-btn.component.html',
  styleUrl: './main-btn.component.css'
})
export class MainBtnComponent {

  btnName = input();

}
