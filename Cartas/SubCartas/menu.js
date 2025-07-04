function loadCategory(key) {
    const data = menuData[key];
    if (!data) return;

    document.getElementById("category-title").textContent = data.title;

    const tbody = document.getElementById("menu-tbody");
    tbody.innerHTML = "";

    data.items.forEach(item => {
        tbody.innerHTML += `
            <tr>
                <td>${item.producto}</td>
                <td>${item.descripcion}</td>
                <td>${item.precio}</td>
            </tr>
        `;
    });
}
