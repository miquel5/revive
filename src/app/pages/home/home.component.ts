import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OverviewComponent } from '../../components/overview/overview.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, OverviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent
{
  title: string = 'Inicio';
  description: string = 'Esta es la descripción del inicio.';
}
