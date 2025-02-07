import { Component } from '@angular/core';
import { OverviewComponent } from "../../components/overview/overview.component";

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [OverviewComponent],
  templateUrl: './management.component.html',
  styleUrl: './management.component.css'
})

export class ManagementComponent
{
    title: string = 'Gestionar aplicación';
    description: string = 'Panel administrativo para gestionar la aplicación';
}
