let categoriaActual = 'entrada';

function loadCategory(nombreCategoria) {
    const categoria = menuData[nombreCategoria];
    
    if (!categoria) {
        mostrarError(`La categoría "${nombreCategoria}" no existe`);
        return;
    }
    
    categoriaActual = nombreCategoria;
    
    cambiarTitulo(categoria.title);

    mostrarProductos(categoria.items);

    marcarBotonActivo(nombreCategoria);
}

// ===== MOSTRAR PRODUCTOS EN LA TABLA =====
function mostrarProductos(productos) {
    const tabla = document.getElementById('menu-tbody');
    
    if (!tabla) {
        console.log('No se encontró la tabla');
        return;
    }
    
    tabla.innerHTML = '';
    
    for (const element of productos) {
        const producto = element;
        
        const fila = document.createElement('tr');

        const columnasString = "<td>" + producto.producto + "</td>" 
        + "<td>" + producto.descripcion + "</td>"
        + "<td>" + producto.precio + "</td>";
        
        fila.innerHTML = columnasString;

        tabla.appendChild(fila);
    }

}

// ===== CAMBIAR EL TÍTULO DE LA PÁGINA =====
function cambiarTitulo(nombreCategoria) {
    document.title = `${nombreCategoria} - Majala Restaurant`;
    
    const titulo = document.getElementById('category-title');
    if (titulo) {
        titulo.textContent = `CONOCE NUESTRA CARTA - ${nombreCategoria}`;
    }
}

// ===== MARCAR BOTÓN ACTIVO EN EL MENÚ =====
function marcarBotonActivo(nombreCategoria) {
    // 1. Quitar el estilo activo de todos los botones
    const botones = document.querySelectorAll('.menu-carta a');
    botones.forEach(boton => {
        boton.style.fontWeight = 'normal';
        boton.style.color = '';
    });
    
    // 2. Encontrar el botón de la categoría actual
    const botonActivo = document.querySelector(`[onclick="loadCategory('${nombreCategoria}')"]`);
    
    // 3. Marcarlo como activo
    if (botonActivo) {
        botonActivo.style.fontWeight = 'bold';
        botonActivo.style.color = '#ff6b35';
    }
}


// ===== CUANDO SE CARGA LA PÁGINA =====
document.addEventListener('DOMContentLoaded', function() {
    loadCategory('entrada');
});
