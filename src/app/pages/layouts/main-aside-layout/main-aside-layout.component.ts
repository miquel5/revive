import { Component } from '@angular/core';
import { AsideComponent } from '../../../components/aside/aside.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-aside-layout',
  standalone: true,
  imports: [AsideComponent, RouterOutlet],
  templateUrl: './main-aside-layout.component.html',
  styleUrl: './main-aside-layout.component.css'
})

export class MainAsideLayoutComponent
{

}
