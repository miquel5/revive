import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './general.component.html',
  styleUrl: './general.component.css'
})
export class GeneralComponent {

}
