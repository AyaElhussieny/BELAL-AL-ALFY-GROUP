import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CoverHomeComponent } from '../../UI/cover-home/cover-home.component';
import { StartTitleComponent } from '../../../shared/UI/start-title/start-title.component';
import { CheckIconComponent } from '../../../shared/UI/check-icon/check-icon.component';
import { MainBtnComponent } from '../../../shared/UI/main-btn/main-btn.component';
import { CardServicesComponent } from '../../../shared/UI/card-services/card-services.component';
import { FooterComponent } from '../../../core/layout/footer/footer.component';
import { ProjectTabsComponent } from "../../../shared/Bussiness/project-tabs/project-tabs.component";
import { FaqsComponent } from '../../../shared/Bussiness/faqs/faqs.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    CoverHomeComponent,
    StartTitleComponent,
    CheckIconComponent,
    MainBtnComponent,
    CardServicesComponent,
    FooterComponent,
    // ProjectTabsComponent ,
    // FaqsComponent 
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
