const productos = [
    {
        name: 'Hamburguesa clásica',
        desc: 'Deliciosa hamburguesa con carne de res, queso, lechuga y tomate.',
        price: 8.00
    },
    {
        name: 'Pizza Margarita',
        desc: 'Pizza con salsa de tomate, mozzarella fresca y albahaca.',
        price: 10.50
    },
    {
        name: 'Ensalada César',
        desc: 'Ensalada fresca con lechuga, pollo a la parrilla, crutones y aderezo César.',
        price: 7.25
    },
    {
        name: 'Pasta Alfredo',
        desc: 'Pasta con salsa Alfredo cremosa y trozos de pollo.',
        price: 10.00
    },
    {
        name: 'Sushi variado',
        desc: 'Combinación de sushi con variedad de rollos y nigiri.',
        price: 12.75
    },
    {
        name: 'Tacos de carne asada',
        desc: 'Tacos mexicanos con carne asada, cebolla y cilantro.',
        price: 6.50
    },
    {
        name: 'Sopa de miso',
        desc: 'Sopa tradicional japonesa con tofu, algas y cebollín.',
        price: 4.50
    },
    {
        name: 'Postre de chocolate',
        desc: 'Delicioso postre de chocolate con helado de vainilla.',
        price: 6.00
    },
    {
        name: 'Bebida refrescante',
        desc: 'Bebida refrescante con limón y menta.',
        price: 2.50
    },
    {
        name: 'Parrillada mixta',
        desc: 'Combinación de carnes a la parrilla con guarniciones.',
        price: 18.00
    }
];

// Objeto para almacenar los productos agregados y sus cantidades
const carrito = {};

window.addEventListener('load', () => {
    getMenu();
});

const getMenu = () => {
    const container = document.getElementById('products');

    productos.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'card';

        const cardInfo = document.createElement('div');
        cardInfo.className = 'card-title';

        const nombreElement = document.createElement('h3');
        nombreElement.textContent = producto.name;

        const descElement = document.createElement('p');
        descElement.textContent = producto.desc;

        const containerDiv = document.createElement('div');
        containerDiv.className = 'card-info';

        const containerBtn = document.createElement('div');
        containerBtn.className = 'card-cont';

        const precioElement = document.createElement('span');
        precioElement.textContent = `$${producto.price.toFixed(2)}`;

        const buttonAddElement = document.createElement('button');
        buttonAddElement.className = 'btn-card--add';
        buttonAddElement.innerText = '+';
        // Agregar evento al botón de agregar
        buttonAddElement.addEventListener('click', () => {
            agregarAlCarrito(producto);
            contadorProductos(1);
        });

        const buttonRemoveElement = document.createElement('button');
        buttonRemoveElement.className = 'btn-card--remove';
        buttonRemoveElement.innerText = '-';
        // Agregar evento al botón de quitar
        buttonRemoveElement.addEventListener('click', () => {
            quitarDelCarrito(producto);
        });

        card.appendChild(cardInfo);
        cardInfo.appendChild(nombreElement);
        cardInfo.appendChild(descElement);
        containerDiv.appendChild(precioElement);
        containerDiv.appendChild(containerBtn);
        containerBtn.appendChild(buttonAddElement);
        containerBtn.appendChild(buttonRemoveElement);
        card.appendChild(containerDiv);

        container.appendChild(card);
    });
};
let contador = 0;
let contadorPrice = 0;
const modalError = document.getElementById('error');
const modalErrorDesc = document.getElementById('error-desc');
const precioFinal = document.getElementById('precio');
const modal = document.getElementById('modal');
const modalOrderNm = document.getElementById('orden-nm');
const modalResumen = document.getElementById('resumen');
const modalPrice = document.getElementById('pricemodal');

const contadorProductos = (n) => {
    const cont1 = document.getElementById('cart');
    const cont2 = document.getElementById('products-form');
    if (contador === 10 && n === 1) {
        showError('Tienes el maximo de productos agregados.')
    } else {
        contador += n;
        cont1.innerText = contador;
        cont2.value = contador;
    }
};

const agregarAlCarrito = (producto) => {
    if (contador === 10) {
        return
    } else {
        if (carrito[producto.name]) {
            carrito[producto.name].cantidad += 1;
            contadorPrice += producto.price;
            precioFinal.value = `$${contadorPrice}`;
        } else {
            carrito[producto.name] = {
                producto,
                cantidad: 1
            };
            contadorPrice += producto.price;
            precioFinal.value = `$${contadorPrice}`;
        }
    }
};

const quitarDelCarrito = (producto) => {
    if (carrito[producto.name]) {
        if (carrito[producto.name].cantidad > 1) {
            carrito[producto.name].cantidad -= 1;
            contadorPrice -= producto.price;
            precioFinal.value = `$${contadorPrice}`;
            contadorProductos(-1);
        } else {
            delete carrito[producto.name];
            contadorPrice -= producto.price;
            precioFinal.value = `$${contadorPrice}`;
            contadorProductos(-1);
        }
    } else {
        showError('No tienes agregado ningun producto de ese tipo.');
    }
};

const showError = (desc) => {
    modalError.style.visibility = 'visible';
    modalErrorDesc.innerText = desc;
    setTimeout(() => {
        modalError.style.visibility = 'hidden';
    }, 2000);
}

function generarNumeroAleatorio() {
    let numeroAleatorio = Math.floor(Math.random() * 1000);
    let numeroConCero = "0" + numeroAleatorio.toString().padStart(3, "0");

    return numeroConCero;
}

document.getElementById('submit').addEventListener('click', function () {
    let nombre = document.getElementById('nombre').value;
    let direccion = document.getElementById('direccion').value;
    let email = document.getElementById('email').value;
    let numero = document.getElementById('numero').value;
    let comentario = document.getElementById('comentarios').value;
    const formError = document.getElementById('form-error');

    let errors = [];

    if (!/^.{1,15}$/.test(nombre)) {
        errors.push('El nombre debe tener entre 1 y 15 caracteres.');
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !email.endsWith('@gmail.com')) {
        errors.push('El email debe ser válido y terminar con "@gmail.com".');
    }

    if (!/^\d{10}$/.test(numero)) {
        errors.push('El número debe tener una longitud de 10 dígitos.');
    }

    let camposObligatorios = [
        { nombre: 'Nombre', valor: nombre },
        { nombre: 'Direccion', valor: direccion },
        { nombre: 'Email', valor: email },
        { nombre: 'Número', valor: numero }
    ];

    camposObligatorios.forEach(function (campo) {
        if (!campo.valor) {
            errors.push('El campo ' + campo.nombre + ' es obligatorio.');
        }
    });

    if (errors.length <= 3) {
        errors.forEach(function (error) {
            formError.style.visibility = 'visible';
            formError.innerText = (`Error: ${error}`);
            setTimeout(() => {
                formError.style.visibility = 'hidden';
            }, 4000);
        });
    } else if (errors.length > 3) {
        formError.style.visibility = 'visible';
        formError.innerText = 'Error: Varios detectados errores en el form.';
        setTimeout(() => {
            formError.style.visibility = 'hidden';
        }, 4000);
    }

    if (contador === 0) {
        showError('No tienes ningun producto agregado')
    } else {
        if (errors.length === 0) {
            modalOrderNm.innerText = generarNumeroAleatorio();

            for (const producto in carrito) {
                let p = document.createElement('p');
                p.innerText = (`${carrito[producto].cantidad}x ${carrito[producto].producto.name}`);
                modalResumen.appendChild(p);
            }
            if(comentario) {
                let h3 = document.createElement('h3');
                let p = document.createElement('p');
                h3.innerText = 'Comentarios:'
                p.innerText = comentario;
                modalResumen.appendChild(h3);
                modalResumen.appendChild(p);
            }
            modalPrice.innerText = `$${contadorPrice}`;
            modal.style.visibility = 'visible';
        }
    }
});

document.getElementById('close').addEventListener('click', function () {
    location.reload();
});