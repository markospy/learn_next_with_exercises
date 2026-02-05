# Prueba 1: Dashboard de Clientes y Streaming (Data Fetching)

**Objetivo:** Implementar la obtención de datos en el servidor (Server Components) y manejar estados de carga con Suspense.

## Requerimientos

- **Fetch de Datos:** Crea una página que liste los clientes del gimnasio consumiendo el endpoint `GET /clients/`.

- **Server Component:** La petición debe realizarse directamente en un componente de servidor usando `fetch`.

- **Optimización de Carga:**
  - Envuelve la lista de clientes en un componente `<Suspense>`.
  - Crea un archivo `loading.tsx` que muestre una estructura de esqueleto (skeleton) mientras se cargan los datos.

- **Búsqueda:** Implementa una barra de búsqueda que utilice el endpoint `GET /clients/name/{name}` para filtrar clientes por nombre dinámicamente.