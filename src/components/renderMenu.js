export default function renderMenu(menu) {
    const VIEW_NAME = 'Menu';

    const container = document.createElement('section');

    const sectionHeader = document.createElement('h2');
    sectionHeader.classList.add('center');
    sectionHeader.textContent = VIEW_NAME;

    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menu-grid');

    menu.forEach((item) => {
        const { name, description, price, image } = item;

        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        // Create the image item in the menu card
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('menu-img');
        const img = new Image();
        img.src = require(`Images/${image}`);
        imgContainer.appendChild(img)

        // Create the div to be the right of the menu item card
        const itemContent = document.createElement('div');
        itemContent.classList.add('menu-item-content');

        itemContent.innerHTML = `
        <h3>${name}</h3>
        <p class="muted">${description}</p>
        <p>$ <span>${price.toFixed(2)}</span></p>
        `;

        menuItem.appendChild(imgContainer);
        menuItem.appendChild(itemContent);

        menuGrid.appendChild(menuItem);
    });

    container.appendChild(sectionHeader);
    container.appendChild(menuGrid);

    return container;
}
