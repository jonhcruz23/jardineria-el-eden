#  Jardinería El Edén - Sistema de Gestión

Sistema web integral diseñado para la administración de inventario, ventas y facturación de la empresa Jardinería El Edén.

## Descripción del Proyecto
Este proyecto nace con el objetivo de digitalizar y optimizar los procesos operativos del negocio. Permite llevar un control estricto del stock de productos, gestionar las ventas a clientes, emitir facturas y generar alertas automáticas cuando los productos están por agotarse.

##  Tecnologías Utilizadas
El proyecto utiliza una arquitectura Cliente-Servidor (MVC):

*   **Backend:** Node.js, Express.js
*   **Base de Datos:** MongoDB (con Mongoose)
*   **Frontend:** HTML5, CSS3, JavaScript
*   **Seguridad:** bcrypt (encriptación de contraseñas) y JSON Web Tokens (JWT)
*   **Control de versiones:** Git y GitHub

##  Módulos Desarrollados
El sistema está dividido en los siguientes módulos principales:
1.  **Autenticación y Seguridad:** Login de usuarios con contraseñas encriptadas y control de acceso por roles (Administrador, Vendedor, Almacenista).
2.  **Gestión de Inventario (CRUD):** Registro, actualización, eliminación y consulta de productos. Incluye alertas de stock mínimo.
3.  **Ventas y Facturación:** Registro de ventas, cálculo automático de subtotales e IVA, y generación de historial de facturas.
4.  **Dashboard:** Panel de control visual con estadísticas del negocio.

##  Estándares de Codificación Aplicados
Para garantizar un código limpio, escalable y mantenible, se aplicaron las siguientes convenciones:
*   **Variables y Funciones:** `camelCase` (ej. `nombreProducto`, `calcularTotal()`).
*   **Clases y Modelos:** `PascalCase` (ej. `Producto`, `UsuarioModel`).
*   **Constantes:** `UPPER_SNAKE_CASE` (ej. `IVA_PORCENTAJE`).
*   **Booleanos:** Prefijos `is` o `has` (ej. `isActive`, `hasStock`).
*   **Estructura Backend:** Separación de responsabilidades por carpetas (`controllers`, `models`, `routes`, `config`).

5. prueba final 

