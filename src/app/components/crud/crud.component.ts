import { Component } from '@angular/core';
import { FiltersComponent } from "../filters/filters.component";
import { OverviewComponent } from "../overview/overview.component";

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [FiltersComponent, OverviewComponent],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})

export class CrudComponent
{
  title: string = 'Crud';
  description: string = 'Esta es la descripción del crud';
}
