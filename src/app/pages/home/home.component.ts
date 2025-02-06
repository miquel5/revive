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

  cards = [
    { id: 0, url: '/objects', title: 'Objetos', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKtKkuCjVMZ09HHU7OxCs0h7421BzTwVWGjA&s' },
    { id: 1, url: '/perfile', title: 'Perfil', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxHJMjLCo9RjX0ltbLXrKp5vNGAKfZNsBW7g&s' }
  ];
}
