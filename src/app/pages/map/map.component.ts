import { Component } from '@angular/core';
import { OverviewComponent } from '../../components/overview/overview.component';
import { FiltersComponent } from "../../components/filters/filters.component";
import { RouterLink } from '@angular/router';

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

  locations = [
    { id: 0, url: '/', title: 'Lleida', subtitle: '', image: 'https://urbanisme.paeria.cat/sostenibilitat/fitxers/residus-i-neteja-viaria/fotos-deixalleries/deixalleria-fixa' },
    { id: 1, url: '/', title: 'Manresa', subtitle: '', image: 'https://ajuntament.barcelona.cat/neteja-i-residus/sites/default/files/2023-05/PVB_Sant_Andreu_2.jpg' },
    { id: 2, url: '/', title: 'Amposta', subtitle: '', image: 'https://www.olesademontserrat.cat/sites/default/files/2023-04/deixalleria-municipal.jpg' }
  ];
}
