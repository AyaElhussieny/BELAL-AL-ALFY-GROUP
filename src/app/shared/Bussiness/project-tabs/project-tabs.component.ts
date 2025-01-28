import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-project-tabs',
  imports: [
    CommonModule,
    TabsModule],
  templateUrl: './project-tabs.component.html',
  styleUrl: './project-tabs.component.css'
})
export class ProjectTabsComponent {

}
