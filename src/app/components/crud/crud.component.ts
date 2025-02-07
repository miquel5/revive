import { Component, OnInit } from '@angular/core';
import { FiltersComponent } from "../filters/filters.component";
import { OverviewComponent } from "../overview/overview.component";
import { Router } from '@angular/router';
import { CRUD_DATA } from '../../../data';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [FiltersComponent, OverviewComponent],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})

export class CrudComponent implements OnInit
{
    title: string = ' ';
    description: string = ' ';
    currentColumns: string[] = [];
    currentData: any[] = [];
  
    private crudConfigs = [
        ['/users', 'Gestión de usuarios', 'Administra los usuarios del sistema'],
        ['/history','Historial','Historial de objetos'],
        ['/warehouse', 'Gestión de almacén', 'Administra el inventario del almacén'],
        ['/organizations', 'Gestión de organizaciones', 'Administra las organizaciones registradas'],
        ['/categories', 'Gestión de categorías', 'Administra las categorías del sistema']
    ];
  
    constructor(private router: Router) {}
  
    ngOnInit()
    {
        this.setTitleAndDescription();
        this.setCurrentData();
    }
  
    // Afegir titol i descripció depenent de cada ruta
    private setTitleAndDescription()
    {
        const currentRoute = this.router.url;
        const config = this.crudConfigs.find(([path]) => path === currentRoute);
      
        if (config)
        {
            [, this.title, this.description] = config;
        }
    }

    // Informació CRUD
    private setCurrentData()
    {
        const currentRoute = this.router.url;
        const routeData = CRUD_DATA[currentRoute as keyof typeof CRUD_DATA];
        
        if (routeData)
        {
            this.currentColumns = routeData.columns;
            this.currentData = routeData.data;
        }
    }
}
  
