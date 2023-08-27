// script.js
const navbar = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    {
        name: 'Our Products',
        id: 'product',
        child: [
            { name: 'Product 1', id: 'p1' },
            { name: 'Product 2', id: 'p2' },
            { name: 'Product 3', id: 'p3' },
            { name: 'Product 4', id: 'p4' },
        ],
    },
    { name: 'Contact Us', id: 'contact' },
];

const menuList = document.getElementById('menu-list');

function createMenuItem(item) {
    const li = document.createElement('li');
    li.textContent = item.name;
    li.setAttribute('id', item.id);
    
    if (item.child) {
        li.classList.add('has-submenu');
        li.appendChild(createSubmenu(item.child));
    }

    return li;
}

function createSubmenu(submenuItems) {
    const submenu = document.createElement('div');
    submenu.classList.add('submenu');
    
    const submenuList = document.createElement('ul');
    submenuItems.forEach(submenuItem => {
        const subLi = document.createElement('li');
        subLi.textContent = submenuItem.name;
        subLi.setAttribute('id', submenuItem.id);
        submenuList.appendChild(subLi);
    });

    submenu.appendChild(submenuList);
    return submenu;
}

navbar.forEach(item => {
    const menuItem = createMenuItem(item);
    menuList.appendChild(menuItem);
});

menuList.addEventListener('mouseover', (event) => {
    const target = event.target;
    if (target.classList.contains('has-submenu')) {
        const submenu = target.querySelector('.submenu');
        submenu.style.display = 'block';
    }
});

menuList.addEventListener('mouseout', (event) => {
    const target = event.target;
    if (target.classList.contains('has-submenu')) {
        const submenu = target.querySelector('.submenu');
        submenu.style.display = 'none';
    }
});
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (validateForm()) {
        alert('Form submitted successfully!');
        contactForm.reset();
    }
});

function validateForm() {
    alert('Form submitted successfully!');
    contactForm.reset();
    return isValid;
}





