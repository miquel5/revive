import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})

export class WelcomeComponent
{

}
