import { Component } from '@angular/core';
import { FiltersComponent } from "../../components/filters/filters.component";
import { OverviewComponent } from "../../components/overview/overview.component";
import { OBJECTS } from '../../../data';

@Component({
  selector: 'app-objects',
  standalone: true,
  imports: [FiltersComponent, OverviewComponent],
  templateUrl: './objects.component.html',
  styleUrl: './objects.component.css'
})

export class ObjectsComponent
{
    title: string = 'Objectos';
    description: string = 'Esta es la descripción de objectos.';
    objects = OBJECTS;
}
