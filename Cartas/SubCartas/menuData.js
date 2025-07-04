// Datos centralizados del menú de Majala Restaurant
const menuData = {
    alitas: {
        title: "ALITAS",
        items: [
            {
                producto: "Alitas BBQ",
                descripcion: "6 piezas de alitas bañadas en salsa BBQ más papas fritas",
                precio: "S/. 20.00"
            },
            {
                producto: "Alitas maracuyá",
                descripcion: "6 piezas de alitas bañadas en salsa maracuyá más papas fritas",
                precio: "S/. 20.00"
            },
            {
                producto: "Alitas honey mustard",
                descripcion: "6 piezas de alitas bañadas en salsa honey mustard más papas fritas",
                precio: "S/. 20.00"
            },
            {
                producto: "Alitas acevichadas",
                descripcion: "6 piezas de alitas bañadas en salsa acevichada más papas fritas",
                precio: "S/. 20.00"
            },
            {
                producto: "Alitas buffalo",
                descripcion: "6 piezas de alitas bañadas en salsa picante más papas fritas",
                precio: "S/. 20.00"
            },
            {
                producto: "Alitas Huancaína",
                descripcion: "6 piezas de alitas bañadas en salsa huancaína más papas fritas",
                precio: "S/. 20.00"
            },
            {
                producto: "Alitas crispy",
                descripcion: "6 piezas de alitas ultra crujientes más papas fritas",
                precio: "S/. 20.00"
            },
            {
                producto: "Alitas teriyaki",
                descripcion: "6 piezas de alitas bañadas en salsa teriyaki hecha en base de salsa de soja y un sabor oriental agridulce más papas fritas",
                precio: "S/. 20.00"
            }
        ]
    },
    ceviches: {
        title: "CEVICHES",
        items: [
            {
                producto: "Ceviche de filete",
                descripcion: "pescado del día, chifles, cancha, yuca y camote",
                precio: "S/. 25.00"
            },
            {
                producto: "Ceviche mixto",
                descripcion: "pescado y mariscos del día, chifles, cancha, yuca y camote",
                precio: "S/. 35.00"
            }
        ]
    },
    makisC: {
        title: "MAKIS CLÁSICOS",
        items: [
            {
                producto: "Acevichado",
                descripcion: "Relleno de palta y ebi furay con tope de atún fresco, bañado en salsa acevichada, coronado con furikake y ceviche.",
                precio: "S/. 25.00"
            },
            {
                producto: "Tropical",
                descripcion: "Relleno de queso crema y pollo furay con tope de tiras de fruta de la estación, bañado en nuestra salsa tropical de la casa.",
                precio: "S/. 25.00"
            },
            {
                producto: "Furai",
                descripcion: "Relleno de pollo o ebi furay, palta y pepino japonés, bañado en salsa oriental.",
                precio: "S/. 20.00"
            },
            {
                producto: "Crocante",
                descripcion: "Relleno de pollo furay y palta, cubierto con tempura crujiente, bañado en salsa oriental.",
                precio: "S/. 22.00"
            },
            {
                producto: "California",
                descripcion: "Relleno de surimi, palta y pepino japonés, cubierto con ajonjolí.",
                precio: "S/. 18.00"
            },
            {
                producto: "Chicken roll",
                descripcion: "Relleno de pollo teriyaki, palta y queso crema.",
                precio: "S/. 20.00"
            }
        ]
    },
    makisE: {
        title: "MAKIS ESPECIALES",
        items: [
            {
                producto: "Majala",
                descripcion: "Relleno de pollo furay y palta, con tope de salmón fresco, bañado en salsa oriental, coronado con furikake.",
                precio: "S/. 30.00"
            },
            {
                producto: "Golden",
                descripcion: "Relleno de ebi furay y queso crema, envuelto en láminas de mango, bañado en salsa tropical.",
                precio: "S/. 32.00"
            },
            {
                producto: "Dragon roll",
                descripcion: "Relleno de ebi furay y pepino, cubierto con palta, bañado en salsa oriental.",
                precio: "S/. 28.00"
            },
            {
                producto: "Rainbow",
                descripcion: "Relleno de surimi y palta, cubierto con salmón, atún y palta.",
                precio: "S/. 35.00"
            },
            {
                producto: "Philadelphia",
                descripcion: "Relleno de salmón, queso crema y cebollín, cubierto con salmón fresco.",
                precio: "S/. 33.00"
            }
        ]
    },
    entrada: {
        title: "ENTRADAS",
        items: [
            {
                producto: "Gyozas de pollo",
                descripcion: "6 piezas de gyozas rellenas de pollo acompañadas de salsa oriental",
                precio: "S/. 15.00"
            },
            {
                producto: "Gyozas de verduras",
                descripcion: "6 piezas de gyozas rellenas de verduras acompañadas de salsa oriental",
                precio: "S/. 15.00"
            },
            {
                producto: "Tequeños de queso",
                descripcion: "8 piezas de tequeños crujientes rellenos de queso",
                precio: "S/. 12.00"
            },
            {
                producto: "Wantanes fritos",
                descripcion: "6 piezas de wantanes crujientes rellenos de cerdo y verduras",
                precio: "S/. 16.00"
            }
        ]
    },
    salchivilla: {
        title: "SALCHIMOSTROS",
        items: [
            {
                producto: "Salchimonster clásico",
                descripcion: "Salchicha jumbo con papas fritas, salsas y verduras",
                precio: "S/. 18.00"
            },
            {
                producto: "Salchimonster especial",
                descripcion: "Salchicha jumbo con papas fritas, queso, tocino y salsas especiales",
                precio: "S/. 22.00"
            },
            {
                producto: "Salchimonster oriental",
                descripcion: "Salchicha jumbo con vegetales orientales y salsa teriyaki",
                precio: "S/. 20.00"
            }
        ]
    },
    criollazos: {
        title: "CRIOLLAZOS",
        items: [
            {
                producto: "Arroz chaufa mixto",
                descripcion: "Arroz frito con pollo, cerdo, huevo y verduras al estilo chino",
                precio: "S/. 22.00"
            },
            {
                producto: "Tallarín saltado",
                descripcion: "Fideos salteados con carne, pollo y verduras",
                precio: "S/. 24.00"
            },
            {
                producto: "Lomo saltado",
                descripcion: "Clásico lomo saltado peruano con papas fritas y arroz",
                precio: "S/. 26.00"
            },
            {
                producto: "Ají de gallina",
                descripcion: "Tradicional ají de gallina con arroz y papas",
                precio: "S/. 20.00"
            }
        ]
    },
    drinks: {
        title: "DRINKS",
        items: [
            {
                producto: "Pisco Sour",
                descripcion: "Clásico cóctel peruano con pisco, limón y clara de huevo",
                precio: "S/. 15.00"
            },
            {
                producto: "Chilcano",
                descripcion: "Pisco con ginger ale, limón y hielo",
                precio: "S/. 12.00"
            },
            {
                producto: "Mojito",
                descripcion: "Ron blanco con menta, limón y azúcar",
                precio: "S/. 14.00"
            },
            {
                producto: "Caipirinha",
                descripcion: "Cachaza brasileña con limón y azúcar",
                precio: "S/. 13.00"
            }
        ]
    },
    otrasBebidas: {
        title: "OTRAS BEBIDAS",
        items: [
            {
                producto: "Chicha morada",
                descripcion: "Bebida tradicional peruana de maíz morado",
                precio: "S/. 8.00"
            },
            {
                producto: "Limonada",
                descripcion: "Refrescante limonada natural",
                precio: "S/. 6.00"
            },
            {
                producto: "Inca Kola",
                descripcion: "Gaseosa nacional del Perú",
                precio: "S/. 5.00"
            },
            {
                producto: "Coca Cola",
                descripcion: "Gaseosa clásica",
                precio: "S/. 5.00"
            },
            {
                producto: "Agua mineral",
                descripcion: "Agua mineral sin gas",
                precio: "S/. 3.00"
            }
        ]
    },
    combos: {
        title: "COMBOS MAKIS & ALITAS",
        items: [
            {
                producto: "Combo Majala",
                descripcion: "2 makis clásicos + 6 alitas BBQ + gaseosa",
                precio: "S/. 45.00"
            },
            {
                producto: "Combo Especial",
                descripcion: "1 maki especial + 6 alitas a elección + limonada",
                precio: "S/. 50.00"
            },
            {
                producto: "Combo Familiar",
                descripcion: "3 makis clásicos + 12 alitas variadas + 2 gaseosas",
                precio: "S/. 75.00"
            },
            {
                producto: "Combo Pareja",
                descripcion: "2 makis especiales + 6 alitas + 2 drinks",
                precio: "S/. 80.00"
            }
        ]
    }
};

// Función auxiliar para obtener estadísticas rápidas
function getMenuStats() {
    let totalProducts = 0;
    let categories = Object.keys(menuData).length;
    
    Object.keys(menuData).forEach(key => {
        totalProducts += menuData[key].items.length;
    });
    
    return {
        totalCategories: categories,
        totalProducts: totalProducts,
        categories: Object.keys(menuData).map(key => ({
            key: key,
            title: menuData[key].title,
            count: menuData[key].items.length
        }))
    };
}

// Función para buscar productos
function searchInMenu(searchTerm) {
    const results = [];
    Object.keys(menuData).forEach(categoryKey => {
        const category = menuData[categoryKey];
        category.items.forEach(item => {
            if (item.producto.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.descripcion.toLowerCase().includes(searchTerm.toLowerCase())) {
                results.push({
                    ...item,
                    category: category.title,
                    categoryKey: categoryKey
                });
            }
        });
    });
    return results;
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { menuData, getMenuStats, searchInMenu };
}
