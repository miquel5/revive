import { Component, OnInit } from '@angular/core';
import { FiltersComponent } from "../filters/filters.component";
import { OverviewComponent } from "../overview/overview.component";
import { Router } from '@angular/router';
import { CRUDS } from '../../../data';

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
        ['users', 'Gestión de usuarios', 'Administra los usuarios del sistema'],
        ['history','Historial','Historial de objetos'],
        ['warehouse', 'Gestión de almacén', 'Administra el inventario del almacén'],
        ['organizations', 'Gestión de organizaciones', 'Administra las organizaciones registradas'],
        ['categories', 'Gestión de categorías', 'Administra las categorías del sistema']
    ];
  
    constructor(private router: Router) {}
  
    ngOnInit()
    {
        this.getData();
    }
  
    private getData()
    {
        const currentRoute = this.router.url.substring(1);
        
        // Obtener título y descripción
        const config = this.crudConfigs.find(([path]) => path === currentRoute);
        if (config)
        {
            [, this.title, this.description] = config;
        }
        
        // Obtener columnas
        const routeData = CRUDS[currentRoute as keyof typeof CRUDS];
        if (routeData)
        {
            this.currentColumns = routeData.columns;
        }
    }
}
  
