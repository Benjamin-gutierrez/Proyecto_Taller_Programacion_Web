// Script para limpiar archivos HTML individuales y migrar al sistema unificado
const fs = require('fs');
const path = require('path');

console.log('🧹 Iniciando limpieza y migración al sistema unificado...');
console.log('================================================');

// Lista de archivos HTML a eliminar (mantener solo menu.html y template.html)
const filesToRemove = [
    'alitas.html',
    'ceviches.html', 
    'combos.html',
    'criollazos.html',
    'drinks.html',
    'entrada.html',
    'makisC.html',
    'makisE.html',
    'otrasBebidas.html',
    'salchivilla.html'
];

// Eliminar archivos HTML individuales
console.log('🗑️ Eliminando archivos HTML individuales...');
filesToRemove.forEach(filename => {
    const filePath = path.join(__dirname, filename);
    try {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            console.log(`   ✅ Eliminado: ${filename}`);
        } else {
            console.log(`   ⚠️ No encontrado: ${filename}`);
        }
    } catch (error) {
        console.log(`   ❌ Error eliminando ${filename}:`, error.message);
    }
});

// Crear archivo de redirección para mantener compatibilidad con enlaces externos
console.log('\n🔗 Creando archivo de redirección...');
const redirectHTML = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redirigiendo... - Majala Restaurant</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #ff6b35, #f7931e);
            color: white;
            text-align: center;
        }
        .container {
            background: rgba(255, 255, 255, 0.1);
            padding: 2rem;
            border-radius: 10px;
            backdrop-filter: blur(10px);
        }
        .spinner {
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top: 4px solid white;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
            margin: 0 auto 1rem;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="spinner"></div>
        <h2>🍽️ Majala Restaurant</h2>
        <p>Redirigiendo al nuevo sistema de menú...</p>
        <p><small>Si no eres redirigido automáticamente, <a href="menu.html" style="color: #ffffcc;">haz clic aquí</a></small></p>
    </div>
    
    <script>
        // Detectar categoría desde el nombre del archivo actual
        const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
        const categoryMap = {
            'alitas': 'alitas',
            'ceviches': 'ceviches',
            'combos': 'combos',
            'criollazos': 'criollazos',
            'drinks': 'drinks',
            'entrada': 'entrada',
            'makisC': 'makisC',
            'makisE': 'makisE',
            'otrasBebidas': 'otrasBebidas',
            'salchivilla': 'salchivilla'
        };
        
        const category = categoryMap[currentPage] || 'entrada';
        
        // Redirigir después de 2 segundos
        setTimeout(() => {
            window.location.href = \`menu.html?categoria=\${category}\`;
        }, 2000);
    </script>
</body>
</html>`;

// Crear archivos de redirección para cada categoría eliminada
filesToRemove.forEach(filename => {
    const filePath = path.join(__dirname, filename);
    try {
        fs.writeFileSync(filePath, redirectHTML, 'utf8');
        console.log(`   ✅ Redirección creada: ${filename}`);
    } catch (error) {
        console.log(`   ❌ Error creando redirección para ${filename}:`, error.message);
    }
});

// Mostrar información del nuevo sistema
console.log('\n✨ MIGRACIÓN COMPLETADA ✨');
console.log('=========================');
console.log('📄 Archivo principal: menu.html');
console.log('🎛️ Controlador: menuController.js');
console.log('📊 Datos: menuData.js');
console.log('🔗 Los archivos antiguos ahora redirigen automáticamente');
console.log('\n🎯 VENTAJAS DEL NUEVO SISTEMA:');
console.log('   ✅ Un solo archivo HTML para mantener');
console.log('   ✅ Navegación más rápida (sin recarga de página)');
console.log('   ✅ URLs amigables con parámetros');
console.log('   ✅ Funcionalidad de búsqueda integrada');
console.log('   ✅ Mejor experiencia de usuario');
console.log('\n🔧 Para usar:');
console.log('   👉 Abrir: menu.html');
console.log('   👉 Navegar: Los enlaces del menú cargan dinámicamente');
console.log('   👉 URL directa: menu.html?categoria=alitas');
console.log('   👉 Editar datos: Modificar menuData.js');

module.exports = { filesToRemove, redirectHTML };
