import { Company } from '../models/Company';
import { Product } from '../models/Products';

export const COMPANY_DATA: Company = {
  name: 'Fashion Trends',
  ruc: '1234567890001',
  address: 'Av. Principal 123, Guayaquil',
  branches: ['Centro', 'Norte', 'Sur', 'Samborondón', 'Ceibos']
};

export const PRODUCTS_DATA: Product[] = [
  // Sucursal Centro
  { id: 1, name: 'Camiseta Polo', category: 'Camisas', stock: 25, branch: 'Centro' },
  { id: 2, name: 'Blusa Elegante', category: 'Camisas', stock: 18, branch: 'Centro' },
  { id: 3, name: 'Pantalón de Vestir', category: 'Pantalones', stock: 22, branch: 'Centro' },
  { id: 4, name: 'Zapatos de Cuero', category: 'Calzado', stock: 15, branch: 'Centro' },
  
  // Sucursal Norte
  { id: 5, name: 'Jeans Clásico', category: 'Pantalones', stock: 15, branch: 'Norte' },
  { id: 6, name: 'Camisa Casual', category: 'Camisas', stock: 20, branch: 'Norte' },
  { id: 7, name: 'Zapatillas Deportivas', category: 'Calzado', stock: 12, branch: 'Norte' },
  { id: 8, name: 'Chaqueta Sport', category: 'Chaquetas', stock: 8, branch: 'Norte' },
  
  // Sucursal Sur
  { id: 9, name: 'Vestido Casual', category: 'Vestidos', stock: 10, branch: 'Sur' },
  { id: 10, name: 'Falda Midi', category: 'Faldas', stock: 14, branch: 'Sur' },
  { id: 11, name: 'Top Elegante', category: 'Camisas', stock: 19, branch: 'Sur' },
  { id: 12, name: 'Sandalias', category: 'Calzado', stock: 16, branch: 'Sur' },
  
  // Sucursal Samborondón
  { id: 13, name: 'Zapatos Deportivos', category: 'Calzado', stock: 8, branch: 'Samborondón' },
  { id: 14, name: 'Polo Premium', category: 'Camisas', stock: 13, branch: 'Samborondón' },
  { id: 15, name: 'Shorts Deportivos', category: 'Pantalones', stock: 17, branch: 'Samborondón' },
  { id: 16, name: 'Gorra Deportiva', category: 'Accesorios', stock: 25, branch: 'Samborondón' },
  
  // Sucursal Ceibos
  { id: 17, name: 'Chaqueta Denim', category: 'Chaquetas', stock: 12, branch: 'Ceibos' },
  { id: 18, name: 'Vestido de Noche', category: 'Vestidos', stock: 6, branch: 'Ceibos' },
  { id: 19, name: 'Tacones Altos', category: 'Calzado', stock: 9, branch: 'Ceibos' },
  { id: 20, name: 'Blazer Ejecutivo', category: 'Chaquetas', stock: 11, branch: 'Ceibos' }
];

// Datos adicionales por sucursal
export const BRANCH_INFO = {
  'Centro': {
    manager: 'Ana García',
    phone: '04-2345678',
    address: 'Av. 9 de Octubre 123, Centro Histórico'
  },
  'Norte': {
    manager: 'Carlos López',
    phone: '04-2456789',
    address: 'Mall del Norte, Local 45'
  },
  'Sur': {
    manager: 'María Rodríguez',
    phone: '04-2567890',
    address: 'Av. Las Américas 567, Sur de Guayaquil'
  },
  'Samborondón': {
    manager: 'Luis Mendoza',
    phone: '04-2678901',
    address: 'City Mall, Planta Baja, Local 23'
  },
  'Ceibos': {
    manager: 'Patricia Silva',
    phone: '04-2789012',
    address: 'Mall del Sur, Segundo Piso, Local 89'
  }
};
