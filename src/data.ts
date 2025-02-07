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
        columns: ['ID', 'Nombre', 'Email', 'Rol'],
        data: [
            { id: 1, name: 'Usuario 1', email: 'user1@email.com', role: 'Admin' },
            { id: 2, name: 'Usuario 2', email: 'user2@email.com', role: 'User' },
        ]
    },
    '/history': {
        columns: ['ID', 'Fecha', 'Objeto', 'Usuario'],
        data: [
            { id: 1, date: '2024-03-20', object: 'Objeto 1', user: 'Usuario 1' },
            { id: 2, date: '2024-03-21', object: 'Objeto 2', user: 'Usuario 2' },
        ]
    },
    '/warehouse': {
        columns: ['ID', 'Nombre', 'Stock', 'Categoría'],
        data: [
            { id: 1, name: 'Producto 1', stock: 10, category: 'Cat 1' },
            { id: 2, name: 'Producto 2', stock: 20, category: 'Cat 2' },
        ]
    },
    '/organizations': {
        columns: ['ID', 'Nombre', 'Dirección', 'Teléfono'],
        data: [
            { id: 1, name: 'Org 1', address: 'Dir 1', phone: '123456789' },
            { id: 2, name: 'Org 2', address: 'Dir 2', phone: '987654321' },
        ]
    },
    '/categories': {
        columns: ['ID', 'Nombre', 'Descripción'],
        data: [
            { id: 1, name: 'Cat 1', description: 'Desc 1' },
            { id: 2, name: 'Cat 2', description: 'Desc 2' },
        ]
    }
};
