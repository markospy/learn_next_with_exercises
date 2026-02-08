Prueba 2: Detalle de Membresías y Revalidación (Caching)
Objetivo: Gestionar el almacenamiento en caché y la actualización de datos específicos.

Requerimientos:

Rutas Dinámicas: Crea una ruta dinámica /memberships/[id] que muestre la información de una membresía específica usando GET /memberships/{id_membership}.

Estrategia de Caching:

Configura la petición para que use ISR (Incremental Static Regeneration) con una revalidación de 3600 segundos (1 hora).

Acción de Usuario: Añade un botón de "Refrescar" que ejecute una Server Action para llamar a revalidatePath y forzar la actualización de los datos de esa membresía.

Manejo de Errores: Si el id no existe, utiliza la función notFound() de Next.js para mostrar la página de error 404 personalizada.