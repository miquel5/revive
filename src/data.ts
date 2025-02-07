//BASE DE DADES PROVISIONAL

export const LOCATIONS = [
  { id: 0, url: '/', title: 'Lleida', subtitle: '', image: 'https://urbanisme.paeria.cat/sostenibilitat/fitxers/residus-i-neteja-viaria/fotos-deixalleries/deixalleria-fixa' },
  { id: 1, url: '/', title: 'Manresa', subtitle: '', image: 'https://ajuntament.barcelona.cat/neteja-i-residus/sites/default/files/2023-05/PVB_Sant_Andreu_2.jpg' },
  { id: 2, url: '/', title: 'Amposta', subtitle: '', image: 'https://www.olesademontserrat.cat/sites/default/files/2023-04/deixalleria-municipal.jpg' }
];

export const OBJECTS = [
    { id: 0, url: '/', title: 'Object 1', subtitle: 'Description', points: '12', image: '' },
    { id: 1, url: '/', title: 'Object 2', subtitle: 'Description', points: '30', image: '' },
    { id: 2, url: '/', title: 'Object 2', subtitle: 'Description', points: '10', image: '' },
    { id: 3, url: '/', title: 'Object 3', subtitle: 'Description', points: '27', image: '' },
    { id: 4, url: '/', title: 'Object 4', subtitle: 'Description', points: '19', image: '' },
    { id: 5, url: '/', title: 'Object 5', subtitle: 'Description', points: '48', image: '' },
    { id: 6, url: '/', title: 'Object 6', subtitle: 'Description', points: '20', image: '' },
    { id: 7, url: '/', title: 'Object 7', subtitle: 'Description', points: '51', image: '' }
];

export const CRUD_DATA = {
    '/users': {
        columns: ['ID', 'Usuario', 'Nombre', 'Primer apellido', 'Segundo apellido', 'Teléfono', 'Rol', 'Estado'],
        data: [
            { id: 1, username: 'user1', name: 'Pedro', surname1: 'surname1', surname2: 'surname2', phone: '987563452', rol: 'Admin', status: 'Activo' },
            { id: 2, username: 'user2', name: 'Marta', surname1: 'surname2', surname2: 'surname2', phone: '987563452', rol: 'User', status: 'Inactivo' },
        ]
    },
    '/history': {
        columns: ['ID', 'Fecha', 'Objeto', 'Usuario'],
        data: [
            { id: 1, fecha: '2024-03-20', objeto: 'Objeto 1', usuario: 'Usuario 1' },
            { id: 2, fecha: '2024-03-21', objeto: 'Objeto 2', usuario: 'Usuario 2' },
        ]
    },
    '/warehouse': {
        columns: ['ID', 'Nombre', 'Organización', 'Ciudad', 'Vendedor', 'Comprador', 'Puntos',  'Subcategoria', 'Peso', 'Tamaño', 'Estado'],
        data: [
            { id: 1, nombre: 'Producto 1', organizacion: 'Org 1', ciudad: 'Barcelona', vendedor: 'Juan Pérez', comprador: 'María García', puntos: '100',  subcategoria: 'Sub 1', peso: '10kg', tamano: 'Grande', estado: 'Disponible' },
            { id: 2, nombre: 'Producto 2', organizacion: 'Org 2', ciudad: 'Madrid', vendedor: 'Ana López', comprador: 'Pedro Sánchez', puntos: '150', subcategoria: 'Sub 2', peso: '5kg', tamano: 'Mediano', estado: 'Disponible' }
        ]
    },
    '/organizations': {
        columns: ['ID', 'Nombre', 'Dirección', 'Telefono'],
        data: [
            { id: 1, nombre: 'Org 1', direccion: 'Dir 1', telefono: '123456789' },
            { id: 2, nombre: 'Org 2', direccion: 'Dir 2', telefono: '987654321' },
        ]
    },
    '/categories': {
        columns: ['ID', 'Nombre', 'Descripción'],
        data: [
            { id: 1, nombre: 'Cat 1', descripcion: 'Desc 1' },
            { id: 2, nombre: 'Cat 2', descripcion: 'Desc 2' },
        ]
    }
};
