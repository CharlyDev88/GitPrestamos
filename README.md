# GitPrestamos · Pañol ETHA (versión demo web)

Demo del **Sistema de Gestión de Inventario del pañol** de la Escuela Técnica "Ing. Herminio Arrieta"
(Libertador General San Martín, Jujuy): préstamos y devoluciones, consumos, inventario con alertas de stock,
pedidos y facturas de compra, proveedores, responsables, informes y permisos por rol.

> **Todos los datos son ficticios.** Nombres, DNI, CUIT, teléfonos y correos son inventados.

## Probarla

Abrí la página publicada con GitHub Pages y elegí un usuario de prueba en la pantalla de ingreso:

| Usuario | Rol | Contraseña |
|---|---|---|
| `admin` | Administrador | `demo2026` |
| `directora` | Directivo | `demo2026` |
| `panolero` | Pañolero | `demo2026` |
| `docente` | Docente | `demo2026` |
| `administrativo` | Administrativo | `demo2026` |

Cada rol ve y puede hacer cosas distintas: probá entrar con varios.

## Cómo funciona

Es un sitio estático: no hay servidor ni base de datos externa.

- El servidor del sistema (las mismas reglas de negocio, permisos y validaciones) corre **dentro del navegador**, en `js/demo-backend.js`.
- Los datos de ejemplo se cargan la primera vez, con las fechas corridas al día de hoy.
- Lo que se carga queda guardado **solo en ese navegador** (almacenamiento local). Otra persona que abra la demo ve los datos de ejemplo originales.
- El botón **«Restablecer datos de la demo»** de la pantalla de ingreso vuelve todo a cero.
- En la demo no se puede cambiar la contraseña.

## Publicarla con GitHub Pages

1. Subí el contenido de esta carpeta a la raíz del repositorio (rama `main`).
2. En el repositorio: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, rama `main`, carpeta `/ (root)` → **Save**.
3. En uno o dos minutos queda publicada en `https://<usuario>.github.io/<repositorio>/`.

## La versión completa

El sistema real funciona con Node.js (servidor propio) y guarda los datos en JSON, MySQL o SQLite.
Esta demo se genera desde ese proyecto con `node scripts/demo/armar-demo-web.js`.

---

Copyright© 2026 Colegio Técnico Ing. Herminio Arrieta. Todos los derechos reservados. | Desarrollado por Carlos Vasquez · carlitosvasquez005@gmail.com
