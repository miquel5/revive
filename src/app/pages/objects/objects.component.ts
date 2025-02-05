import { Component } from '@angular/core';
import { CrudComponent } from "../../components/crud/crud.component";

@Component({
  selector: 'app-objects',
  standalone: true,
  imports: [CrudComponent],
  templateUrl: './objects.component.html',
  styleUrl: './objects.component.css'
})

export class ObjectsComponent
{

}
