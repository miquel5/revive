import { Component } from '@angular/core';
import { OverviewComponent } from '../../components/overview/overview.component';

@Component({
  selector: 'app-perfile',
  standalone: true,
  imports: [OverviewComponent],
  templateUrl: './perfile.component.html',
  styleUrl: './perfile.component.css'
})

export class PerfileComponent
{
    title: string = 'Tu perfil';
    description: string = 'Esta es la descripción de perfil.';
}
