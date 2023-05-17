export default function menuContent (itemDescription, itemImage, item) {
    let menuItem = document.createElement('div');
    menuItem.classList.add("menuItem");
    menuItem.setAttribute("id", `menu-item-${item}`)
    
   
    let image = document.createElement("img");
    image.classList.add("menu-item-image");
    image.setAttribute("id", `menu-item-${item}-image`);
    image.src = itemImage;

    let description = document.createElement("div");
    description.classList.add("menu-item-description");
    description.setAttribute("id", `menu-item-${item}-description`);
    description.textContent = itemDescription;

    
    menuItem.appendChild(image);
    menuItem.appendChild(description);

    return menuItem;
}