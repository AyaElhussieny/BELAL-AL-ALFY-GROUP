import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { title } from 'process';
interface Item{
  img : string ,
  title : string[] ,
  smallTitle : string[]
}
@Component({
  selector: 'app-cover-home',
  imports: [
    CommonModule ,
    GalleriaModule ,
    CarouselModule
  ],
  templateUrl: './cover-home.component.html',
  styleUrl: './cover-home.component.css'
})
export class CoverHomeComponent {
  // images = model([]); 
  images  : Item[] = [
    {img:'Images/home01.svg',
      title :['Make your home' , 'an ode to joy'],
      smallTitle :['We turn your empty house to a lovely home, making','the compact spaces  with sapce saving furnitures.',' Making the unique tastes of yours into reality! ']
    },
    {
      img:'Images/home02.svg',
      title :['Turn Your Home into a ','Haven of Happiness'],
      smallTitle :['Bring your dream home to life. From compact','solutions to personalized designs, we craft spaces that',' reflect your taste and inspire happiness.']
    },
    {img: 'Images/home03.svg',
      title : ['Create a Home ',' That Inspires Joy'],
      smallTitle :['Transform your house into a home filled with joy. We',' create cozy, functional spaces with smart, space-saving ',' furniture tailored to your unique style.']

    }]

    responsiveOptions: any[] = [
        {
            breakpoint: '1300px',
            numVisible: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

}
