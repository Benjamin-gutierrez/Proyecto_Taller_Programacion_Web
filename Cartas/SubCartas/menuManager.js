// Utilidades para administrar el menú de Majala Restaurant

const fs = require('fs');
const path = require('path');

class MenuManager {
    constructor() {
        this.menuDataPath = path.join(__dirname, 'menuData.js');
        this.loadMenuData();
    }

    loadMenuData() {
        try {
            // Eliminar la caché del módulo para obtener la versión más reciente
            delete require.cache[require.resolve('./menuData.js')];
            const menuModule = require('./menuData.js');
            this.menuData = menuModule.menuData;
        } catch (error) {
            console.error('Error al cargar menuData.js:', error);
        }
    }

    // Mostrar todas las categorías
    showCategories() {
        console.log('\n📋 Categorías disponibles:');
        console.log('==========================');
        Object.keys(this.menuData).forEach((key, index) => {
            const category = this.menuData[key];
            console.log(`${index + 1}. ${key} - "${category.title}" (${category.items.length} productos)`);
        });
    }

    // Mostrar productos de una categoría específica
    showCategory(categoryName) {
        const category = this.menuData[categoryName];
        if (!category) {
            console.log(`❌ Categoría "${categoryName}" no encontrada.`);
            return;
        }

        console.log(`\n🍽️ ${category.title}`);
        console.log('='.repeat(category.title.length + 4));
        category.items.forEach((item, index) => {
            console.log(`${index + 1}. ${item.producto} - ${item.precio}`);
            console.log(`   ${item.descripcion}`);
            console.log('');
        });
    }

    // Buscar productos por nombre
    searchProducts(searchTerm) {
        console.log(`\n🔍 Buscando: "${searchTerm}"`);
        console.log('==============================');
        
        let found = false;
        Object.keys(this.menuData).forEach(categoryKey => {
            const category = this.menuData[categoryKey];
            category.items.forEach(item => {
                if (item.producto.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.descripcion.toLowerCase().includes(searchTerm.toLowerCase())) {
                    console.log(`📍 Encontrado en ${category.title}:`);
                    console.log(`   ${item.producto} - ${item.precio}`);
                    console.log(`   ${item.descripcion}`);
                    console.log('');
                    found = true;
                }
            });
        });

        if (!found) {
            console.log(`❌ No se encontraron productos que contengan "${searchTerm}"`);
        }
    }

    // Obtener estadísticas del menú
    getStats() {
        let totalProducts = 0;
        let totalCategories = Object.keys(this.menuData).length;
        let priceStats = [];

        Object.keys(this.menuData).forEach(categoryKey => {
            const category = this.menuData[categoryKey];
            totalProducts += category.items.length;
            
            category.items.forEach(item => {
                // Extraer precio numérico
                const priceMatch = item.precio.match(/S\/\.\s*(\d+\.?\d*)/);
                if (priceMatch) {
                    priceStats.push(parseFloat(priceMatch[1]));
                }
            });
        });

        const avgPrice = priceStats.length > 0 ? 
            (priceStats.reduce((a, b) => a + b, 0) / priceStats.length).toFixed(2) : 0;
        const minPrice = priceStats.length > 0 ? Math.min(...priceStats) : 0;
        const maxPrice = priceStats.length > 0 ? Math.max(...priceStats) : 0;

        console.log('\n📊 Estadísticas del Menú');
        console.log('========================');
        console.log(`📂 Total de categorías: ${totalCategories}`);
        console.log(`🍽️ Total de productos: ${totalProducts}`);
        console.log(`💰 Precio promedio: S/. ${avgPrice}`);
        console.log(`💸 Precio mínimo: S/. ${minPrice}`);
        console.log(`💵 Precio máximo: S/. ${maxPrice}`);
    }

    // Validar estructura de datos
    validateData() {
        console.log('\n🔍 Validando estructura de datos...');
        console.log('====================================');
        
        let errors = 0;
        Object.keys(this.menuData).forEach(categoryKey => {
            const category = this.menuData[categoryKey];
            
            // Validar estructura de categoría
            if (!category.title || !category.items) {
                console.log(`❌ Error en categoría "${categoryKey}": falta title o items`);
                errors++;
                return;
            }

            // Validar productos
            category.items.forEach((item, index) => {
                if (!item.producto || !item.descripcion || !item.precio) {
                    console.log(`❌ Error en ${categoryKey}[${index}]: faltan campos requeridos`);
                    errors++;
                }
                
                // Validar formato de precio
                if (!item.precio.match(/S\/\.\s*\d+\.?\d*/)) {
                    console.log(`⚠️ Advertencia en ${categoryKey}[${index}]: formato de precio inusual: "${item.precio}"`);
                }
            });
        });

        if (errors === 0) {
            console.log('✅ Validación completada. No se encontraron errores.');
        } else {
            console.log(`❌ Se encontraron ${errors} errores.`);
        }
    }
}

// Funciones para uso directo
function showHelp() {
    console.log('\n🎯 Utilidades del Menú - Majala Restaurant');
    console.log('==========================================');
    console.log('📋 manager.showCategories()     - Mostrar todas las categorías');
    console.log('🍽️ manager.showCategory("name") - Mostrar productos de una categoría');
    console.log('🔍 manager.searchProducts("term") - Buscar productos');
    console.log('📊 manager.getStats()           - Estadísticas del menú');
    console.log('🔍 manager.validateData()       - Validar estructura de datos');
    console.log('❓ showHelp()                   - Mostrar esta ayuda');
    console.log('\nEjemplo: manager.showCategory("alitas")');
}

// Crear instancia global
const manager = new MenuManager();

// Si se ejecuta directamente, mostrar menú interactivo
if (require.main === module) {
    console.log('🎯 Gestor del Menú - Majala Restaurant');
    console.log('======================================');
    
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
        showHelp();
        manager.showCategories();
    } else {
        const command = args[0];
        const param = args[1];
        
        switch (command) {
            case 'categories':
            case 'cat':
                manager.showCategories();
                break;
            case 'show':
                if (param) {
                    manager.showCategory(param);
                } else {
                    console.log('❌ Especifica una categoría. Ej: node menuManager.js show alitas');
                }
                break;
            case 'search':
                if (param) {
                    manager.searchProducts(param);
                } else {
                    console.log('❌ Especifica un término de búsqueda. Ej: node menuManager.js search teriyaki');
                }
                break;
            case 'stats':
                manager.getStats();
                break;
            case 'validate':
                manager.validateData();
                break;
            default:
                console.log(`❌ Comando "${command}" no reconocido.`);
                showHelp();
        }
    }
}

module.exports = { MenuManager, manager, showHelp };
