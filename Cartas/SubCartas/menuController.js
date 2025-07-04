class MenuController {
    constructor() {
        this.currentCategory = null;
        this.init();
    }

    init() {
        // Cargar categoría inicial basada en parámetros URL o mostrar entradas por defecto
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('categoria') || 'entrada';
        this.loadCategory(category);
        
        // Actualizar enlaces del menú para mostrar categoría activa
        this.updateActiveMenuItem(category);
    }

    // Cargar y mostrar una categoría específica
    loadCategory(categoryName) {
        const data = menuData[categoryName];
        if (!data) {
            this.showError(`Categoría "${categoryName}" no disponible`);
            return;
        }

        this.currentCategory = categoryName;
        this.updatePageTitle(data.title);
        this.generateTable(data);
        this.updateActiveMenuItem(categoryName);
        this.updateURL(categoryName);
        
        // Scroll hacia la tabla
        const tableContainer = document.getElementById('table-container');
        if (tableContainer) {
            tableContainer.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Generar la tabla con los productos
    generateTable(data) {
        const tbody = document.getElementById('menu-tbody');
        if (!tbody) {
            console.error('Elemento tbody no encontrado');
            return;
        }

        // Limpiar contenido existente
        tbody.innerHTML = '';

        // Generar filas de productos
        data.items.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="producto-name">${item.producto}</td>
                <td class="producto-description">${item.descripcion}</td>
                <td class="producto-price">${item.precio}</td>
            `;
            
            // Agregar efecto hover
            tr.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#f8f9fa';
            });
            
            tr.addEventListener('mouseleave', function() {
                this.style.backgroundColor = '';
            });
            
            tbody.appendChild(tr);
        });

        // Mostrar contador de productos
        this.showProductCount(data.items.length);
    }

    // Actualizar el título de la página
    updatePageTitle(categoryTitle) {
        document.title = `${categoryTitle} - Majala Restaurant`;
        const titleElement = document.getElementById('category-title');
        if (titleElement) {
            titleElement.textContent = `CONOCE NUESTRA CARTA - ${categoryTitle}`;
        }
    }

    // Actualizar elemento activo en el menú
    updateActiveMenuItem(categoryName) {
        // Remover clase activa de todos los elementos
        const menuItems = document.querySelectorAll('.menu-carta a');
        menuItems.forEach(item => {
            item.classList.remove('active-category');
            item.style.fontWeight = 'normal';
            item.style.color = '';
        });

        // Agregar clase activa al elemento actual
        const activeItem = document.querySelector(`[onclick="loadCategory('${categoryName}')"]`);
        if (activeItem) {
            activeItem.classList.add('active-category');
            activeItem.style.fontWeight = 'bold';
            activeItem.style.color = '#ff6b35';
        }
    }

    // Actualizar URL sin recargar la página
    updateURL(categoryName) {
        const newURL = `${window.location.pathname}?categoria=${categoryName}`;
        window.history.pushState({ category: categoryName }, '', newURL);
    }

    // Mostrar contador de productos
    showProductCount(count) {
        const existingCounter = document.getElementById('product-counter');
        if (existingCounter) {
            existingCounter.remove();
        }

        const counter = document.createElement('div');
        counter.id = 'product-counter';
        counter.innerHTML = `<p style="text-align: center; margin: 10px 0; color: #666; font-style: italic;">Mostrando ${count} productos</p>`;
        
        const tableContainer = document.getElementById('table-container');
        tableContainer.insertBefore(counter, tableContainer.firstChild);
    }

    // Mostrar mensaje de error
    showError(message) {
        const tbody = document.getElementById('menu-tbody');
        if (tbody) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="3" style="text-align: center; padding: 20px; color: #dc3545;">
                        <i class="fa fa-exclamation-triangle"></i> ${message}
                    </td>
                </tr>
            `;
        }
    }

    // Buscar productos en todas las categorías
    searchProducts(searchTerm) {
        if (!searchTerm || searchTerm.trim() === '') {
            this.loadCategory(this.currentCategory || 'entrada');
            return;
        }

        const results = [];
        Object.keys(menuData).forEach(categoryKey => {
            const category = menuData[categoryKey];
            category.items.forEach(item => {
                if (item.producto.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.descripcion.toLowerCase().includes(searchTerm.toLowerCase())) {
                    results.push({
                        ...item,
                        category: category.title
                    });
                }
            });
        });

        this.showSearchResults(results, searchTerm);
    }

    // Mostrar resultados de búsqueda
    showSearchResults(results, searchTerm) {
        const tbody = document.getElementById('menu-tbody');
        if (!tbody) return;

        tbody.innerHTML = '';
        document.getElementById('category-title').textContent = `RESULTADOS DE BÚSQUEDA: "${searchTerm}"`;

        if (results.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="3" style="text-align: center; padding: 20px; color: #dc3545;">
                        <i class="fa fa-search"></i> No se encontraron productos que contengan "${searchTerm}"
                    </td>
                </tr>
            `;
            return;
        }

        results.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="producto-name">${item.producto} <small style="color: #666;">(${item.category})</small></td>
                <td class="producto-description">${item.descripcion}</td>
                <td class="producto-price">${item.precio}</td>
            `;
            tbody.appendChild(tr);
        });

        this.showProductCount(results.length);
    }

    // Obtener todas las categorías disponibles
    getAvailableCategories() {
        return Object.keys(menuData).map(key => ({
            key: key,
            title: menuData[key].title,
            count: menuData[key].items.length
        }));
    }
}

// Funciones globales para uso en HTML
function loadCategory(categoryName) {
    if (window.menuController) {
        window.menuController.loadCategory(categoryName);
    }
}

function searchMenu() {
    const searchInput = document.getElementById('search-input');
    if (searchInput && window.menuController) {
        window.menuController.searchProducts(searchInput.value);
    }
}

// Manejar navegación del navegador (botones atrás/adelante)
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.category) {
        window.menuController.loadCategory(event.state.category);
    }
});

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Crear instancia global del controlador
    window.menuController = new MenuController();
    
    // Agregar funcionalidad de búsqueda si existe el input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            clearTimeout(this.searchTimeout);
            this.searchTimeout = setTimeout(() => {
                searchMenu();
            }, 300); // Debounce de 300ms
        });
    }
    
    console.log('🎯 Menu Controller iniciado correctamente');
    console.log('📋 Categorías disponibles:', window.menuController.getAvailableCategories());
});

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MenuController };
}
