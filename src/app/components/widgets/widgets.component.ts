import { Component } from '@angular/core';
import { OverviewComponent } from "../overview/overview.component";

@Component({
  selector: 'app-widgets',
  standalone: true,
  imports: [OverviewComponent],
  templateUrl: './widgets.component.html',
  styleUrl: './widgets.component.css'
})

export class WidgetsComponent
{
  title: string = 'Panel general';
  description: string = 'Esta es la descripción del panel general';
}
