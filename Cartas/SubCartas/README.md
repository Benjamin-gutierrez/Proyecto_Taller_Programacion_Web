# Sistema de Cartas Dinámico - Majala Restaurant

## 📋 Descripción
Este sistema centraliza todos los datos del menú en un solo archivo JavaScript (`menuData.js`) y genera automáticamente las tablas de productos en cada página de subcarta.

## 🗂️ Estructura de Archivos

```
SubCartas/
├── menuData.js          # ✨ Datos centralizados del menú
├── template.html        # 📄 Template base para todas las páginas
├── generateFiles.js     # 🔧 Script para generar archivos HTML
├── README.md           # 📖 Esta documentación
├── alitas.html         # 🍗 Página de alitas (generada automáticamente)
├── ceviches.html       # 🐟 Página de ceviches (generada automáticamente)
├── combos.html         # 🍽️ Página de combos (generada automáticamente)
├── criollazos.html     # 🍲 Página de criollazos (generada automáticamente)
├── drinks.html         # 🍹 Página de drinks (generada automáticamente)
├── entrada.html        # 🥟 Página de entradas (generada automáticamente)
├── makisC.html         # 🍣 Página de makis clásicos (generada automáticamente)
├── makisE.html         # 🍣 Página de makis especiales (generada automáticamente)
├── otrasBebidas.html   # 🥤 Página de otras bebidas (generada automáticamente)
└── salchivilla.html    # 🌭 Página de salchimostros (generada automáticamente)
```

## 🚀 Características Principales

### 1. **Datos Centralizados**
- Todos los productos están organizados en `menuData.js`
- Fácil mantenimiento: cambias en un lugar, se actualiza en todas las páginas
- Estructura consistente para todos los elementos del menú

### 2. **Generación Automática**
- Las tablas se generan dinámicamente con JavaScript
- No hay código HTML repetitivo
- Cada página detecta automáticamente qué categoría mostrar basándose en su nombre de archivo

### 3. **Rutas Relativas**
- Todas las rutas son relativas, funciona en cualquier entorno
- Navegación consistente entre páginas
- Enlaces optimizados

## 📝 Cómo Usar el Sistema

### ✏️ Para Agregar/Editar Productos

1. **Abre el archivo `menuData.js`**
2. **Encuentra la categoría correspondiente** (alitas, ceviches, makisC, etc.)
3. **Agrega o modifica elementos** siguiendo esta estructura:

```javascript
{
    producto: "Nombre del producto",
    descripcion: "Descripción detallada del producto",
    precio: "S/. XX.XX"
}
```

**Ejemplo - Agregar una nueva alita:**
```javascript
alitas: {
    title: "ALITAS",
    items: [
        // ...elementos existentes...
        {
            producto: "Alitas BBQ Premium",
            descripcion: "8 piezas de alitas premium bañadas en salsa BBQ artesanal más papas gourmet",
            precio: "S/. 28.00"
        }
    ]
}
```

### 🔄 Para Regenerar Archivos HTML

Si modificas el template o quieres asegurar consistencia:

```bash
cd SubCartas
node generateFiles.js
```

### 🆕 Para Agregar Una Nueva Categoría

1. **Agrega la nueva categoría en `menuData.js`:**
```javascript
nuevaCategoria: {
    title: "NUEVA CATEGORÍA",
    items: [
        {
            producto: "Producto ejemplo",
            descripcion: "Descripción del producto",
            precio: "S/. 20.00"
        }
    ]
}
```

2. **Agrega el nombre de archivo en `generateFiles.js`:**
```javascript
const categories = [
    'alitas',
    'ceviches',
    // ...otras categorías...
    'nuevaCategoria'  // ← Agregar aquí
];
```

3. **Ejecuta el script de generación:**
```bash
node generateFiles.js
```

## 🔧 Estructura del Objeto menuData

```javascript
const menuData = {
    nombreCategoria: {
        title: "TÍTULO PARA MOSTRAR",
        items: [
            {
                producto: "Nombre del producto",
                descripcion: "Descripción detallada",
                precio: "S/. XX.XX"
            },
            // ... más productos
        ]
    },
    // ... más categorías
};
```

## 🎯 Ventajas del Sistema

✅ **Mantenimiento Simplificado**: Cambios en un solo lugar  
✅ **Consistencia Garantizada**: Mismo formato en todas las páginas  
✅ **Fácil Escalabilidad**: Agregar nuevas categorías es simple  
✅ **Código Limpio**: Sin repetición de HTML  
✅ **SEO Optimizado**: Títulos dinámicos y estructura semántica  
✅ **Performance**: Carga rápida y eficiente  

## 🐛 Resolución de Problemas

### La tabla no se muestra
- Verifica que `menuData.js` esté incluido en el HTML
- Asegúrate de que el nombre del archivo coincida con una categoría en `menuData`
- Revisa la consola del navegador para errores

### Productos no actualizados
- Limpia la caché del navegador (Ctrl+F5)
- Verifica que hayas guardado los cambios en `menuData.js`

### Enlaces rotos
- Asegúrate de que todos los archivos HTML existan
- Verifica que las rutas relativas sean correctas

## 📞 Soporte

Para dudas o problemas con el sistema, consulta la documentación o contacta al desarrollador.

---
*Sistema creado para Majala Restaurant - 2025*
