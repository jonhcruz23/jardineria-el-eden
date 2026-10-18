# Jardinería El Edén

Sistema de gestión para un negocio dedicado a la comercialización de plantas, flores y productos de jardinería.

## Descripción

"Jardinería El Edén" es un sistema web que permite gestionar el inventario, los clientes, la facturación y las alertas de stock de un negocio de jardinería. El proyecto está desarrollado con HTML, CSS, JavaScript y utiliza LocalStorage para la persistencia local de datos.

## Tecnologías Seleccionadas

### Backend
- *Node.js* (18.x): Entorno de ejecución de JavaScript en el servidor.
- *Express.js* (4.x): Framework para construir APIs REST.
- *Mongoose* (7.x): ODM para MongoDB.

### Base de Datos
- *MongoDB* (8.x): Base de datos NoSQL documental.
- *MongoDB Compass*: Interfaz gráfica para MongoDB.

### Frontend
- *HTML5*: Estructura de las páginas.
- *CSS3*: Diseño visual y responsive.
- *JavaScript (ES6+)*: Interactividad y lógica del cliente.
- *Bootstrap 5*: Framework CSS para diseño responsive.

### Librerías
- *bcrypt*: Encriptación de contraseñas.
- *jsonwebtoken (JWT)*: Autenticación y autorización.
- *cors*: Permitir peticiones desde el frontend.
- *dotenv*: Gestión de variables de entorno.

## Módulos Funcionales

| Módulo | Descripción |
|--------|-------------|
| *Login* | Inicio de sesión de usuarios con validación de credenciales. |
| *Dashboard* | Panel de control con estadísticas del negocio. |
| *Inventario* | Gestión de productos con CRUD y persistencia local. |
| *Alertas* | Alertas de stock mínimo y crítico. |
| *Facturación* | Registro y gestión de ventas con carrito dinámico. |
| *Administración* | Gestión de usuarios y roles del sistema. |

## Estándares de Codificación

### Variables
- *camelCase*: `nombreProducto`, `precioVenta`
- *Constantes*: `UPPER_SNAKE_CASE` → `IVA_PORCENTAJE`
- *Booleanos*: Prefijo `is` o `has` → `isActive`

### Clases
- *PascalCase*: `Producto`, `Factura`, `Cliente`

### Métodos y Funciones
- *camelCase + verbo*: `crearProducto()`, `calcularTotal()`
- *Funciones privadas*: Prefijo `_` → `_validarDatos()`

### Organización de Archivos


## Autor

**Jonh Alexander Cruz Nieto**  
Tecnólogo en Análisis y Desarrollo de Software  
SENA - Centro de Gestión de Mercados, Logística y Tecnologías de la Información  
Agosto 2026