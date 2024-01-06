import data from 'Data/menu.json';

export default function getMenu() {
    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menu-grid');

    data.forEach((item) => {
        const { name, description, price, image } = item;

        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        // Create the image item in the menu card
        const img = new Image();
        img.src = require(`./${image}`);

        // Create the div to be the right of the menu item card
        const itemContent = document.createElement('div');
        itemContent.classList.add('menu-item-content');

        itemContent.innerHTML = `
        <h3>${name}</h3>
        <p class="muted">${description}</p>
        <p>$ <span>${price.toFixed(2)}</span></p>
        `;

        menuItem.appendChild(img);
        menuItem.appendChild(itemContent);

        menuGrid.appendChild(menuItem);
    });

    return menuGrid;
}
