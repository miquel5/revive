import { Component } from '@angular/core';
import { OverviewComponent } from '../../components/overview/overview.component';
import { FiltersComponent } from "../../components/filters/filters.component";

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [OverviewComponent, FiltersComponent],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class MapComponent
{
  title: string = 'Ubicaciones';
  description: string = 'Esta es la descripción del ubicaciones.';

  locations = [
    { id: 0, url: '' },
    { id: 1, url: '' },
    { id: 2, url: '' },
    { id: 3, url: '' },
    { id: 4, url: '' },
    { id: 5, url: '' }
  ];
}
