import { Component } from '@angular/core';
import { OverviewComponent } from '../../components/overview/overview.component';
import { FiltersComponent } from "../../components/filters/filters.component";
import { RouterLink } from '@angular/router';
import { LOCATIONS } from '../../../data';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [OverviewComponent, FiltersComponent, RouterLink],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class MapComponent
{
  title: string = 'Ubicaciones';
  description: string = 'Esta es la descripción del ubicaciones.';
  locations = LOCATIONS;
}
