//BASE DE DADES PROVISIONAL

export const FRAMES = [
  { id: 0, url: '/objects', title: 'Objetos', image: 'https://e0.pxfuel.com/wallpapers/970/9/desktop-wallpaper-green-forest-trees-dark-green-forest.jpg' },
  { id: 1, url: '/perfile', title: 'Perfil', image: 'https://img.freepik.com/fotos-premium/infografia-que-muestra-beneficios-plantar-arboles_964851-179216.jpg' }
];

export const LOCATIONS = [
  { id: 0, url: '', title: 'Lleida', subtitle: '', image: 'https://urbanisme.paeria.cat/sostenibilitat/fitxers/residus-i-neteja-viaria/fotos-deixalleries/deixalleria-fixa' },
  { id: 1, url: '', title: 'Manresa', subtitle: '', image: 'https://ajuntament.barcelona.cat/neteja-i-residus/sites/default/files/2023-05/PVB_Sant_Andreu_2.jpg' },
  { id: 2, url: '', title: 'Amposta', subtitle: '', image: 'https://www.olesademontserrat.cat/sites/default/files/2023-04/deixalleria-municipal.jpg' }
];

export const OBJECTS = [
  { id: 0, url: '', title: 'Object 1', subtitle: 'Description', points: '12', image: '' },
  { id: 1, url: '', title: 'Object 2', subtitle: 'Description', points: '30', image: '' },
  { id: 2, url: '', title: 'Object 2', subtitle: 'Description', points: '10', image: '' },
  { id: 3, url: '', title: 'Object 3', subtitle: 'Description', points: '27', image: '' },
  { id: 4, url: '', title: 'Object 4', subtitle: 'Description', points: '19', image: '' },
  { id: 5, url: '', title: 'Object 5', subtitle: 'Description', points: '48', image: '' },
  { id: 6, url: '', title: 'Object 6', subtitle: 'Description', points: '20', image: '' },
  { id: 7, url: '', title: 'Object 7', subtitle: 'Description', points: '51', image: '' }
];

export const CRUDS = {
  'users': {columns: ['#', 'Usuario', 'Nombre', 'Primer apellido', 'Segundo apellido', 'Teléfono', 'Rol', 'Estado'],},
  'warehouse': {columns: ['#', 'Nombre', 'Categoria', 'Peso', 'Tamaño', 'Puntos', 'Vendedor', 'Comprador','Ciudad', 'Organización', 'Estado'],},
  'history': {columns: ['#', 'Nombre', 'Categoria', 'Peso', 'Tamaño', 'Puntos', 'Organización', 'Fecha'],},
  'organizations': {columns: ['#', 'Nombre', 'Dirección', 'Teléfono', 'Estado']},
  'categories': {columns: ['#', 'Categoria', 'Subcategoria', 'Puntos', 'Estado'],}
};
