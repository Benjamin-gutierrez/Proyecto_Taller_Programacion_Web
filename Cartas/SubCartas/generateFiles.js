// Script para generar automáticamente todos los archivos HTML de SubCartas
// usando el template base y el sistema de datos centralizados

const fs = require('fs');
const path = require('path');

// Leer el template
const templatePath = path.join(__dirname, 'template.html');
const templateContent = fs.readFileSync(templatePath, 'utf8');

// Lista de todas las categorías/archivos a generar
const categories = [
    'alitas',
    'ceviches', 
    'combos',
    'criollazos',
    'drinks',
    'entrada',
    'makisC',
    'makisE',
    'otrasBebidas',
    'salchivilla'
];

// Generar cada archivo HTML
categories.forEach(category => {
    const fileName = `${category}.html`;
    const filePath = path.join(__dirname, fileName);
    
    // Escribir el contenido del template al archivo
    fs.writeFileSync(filePath, templateContent, 'utf8');
    
    console.log(`✅ Generado: ${fileName}`);
});

console.log('\n🎉 ¡Todos los archivos HTML han sido generados exitosamente!');
console.log('📝 Cada archivo ahora usa el sistema JavaScript centralizado para mostrar los datos.');
console.log('🔧 Para agregar o modificar elementos del menú, edita el archivo menuData.js');

module.exports = { categories };
