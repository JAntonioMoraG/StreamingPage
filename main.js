const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const fila2 = document.querySelector('.contenedor-carousel2');
const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

const flechaIzquierda2 = document.getElementById('flecha-izquierda2');
const flechaDerecha2 = document.getElementById('flecha-derecha2');

flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;
	
});

flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;
});

flechaDerecha2.addEventListener('click', () => {
	fila2.scrollLeft += fila.offsetWidth;
	
});

flechaIzquierda2.addEventListener('click', () => {
	fila2.scrollLeft -= fila.offsetWidth;
});