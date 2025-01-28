import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-cover-page',
  imports: [
    CommonModule
  ],
  templateUrl: './cover-page.component.html',
  styleUrl: './cover-page.component.css'
})
export class CoverPageComponent {
// home : string = `/Images/home.svg`

coverPage = input.required();
title = input();
smallTitle = input();
}
