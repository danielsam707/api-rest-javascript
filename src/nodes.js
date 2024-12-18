// Sections--------------------------------------------------

// TODA LA ETIQUETA SECTION
const headerSection = document.querySelector('#header');
// SECCION DE PELICULAS EN TENDENCIA
const trendingPreviewSection = document.querySelector('#trendingPreview');
// SECCION DE CATEGORIAS
const categoriesPreviewSection = document.querySelector('#categoriesPreview');
// SECCION LISTA GENERICA (no esta en el home)
const genericSection = document.querySelector('#genericList');
// SECCION DETALLES DE PELICULA (no esta en el home)
const movieDetailSection = document.querySelector('#movieDetail');



// Lists & Containers---------------------------------------

//ETIQUETA FORMULARIO (esta en home)
const searchForm = document.querySelector('#searchForm');
// ETIQUTA ARTICLE QUE CONTIENE TODOS LOS DIVS DE LAS PELICULAS
const trendingMoviesPreviewList = document.querySelector('.trendingPreview-movieList');
// ETIQUTA ARTICLE QUE CONTIENE TODOS LOS DIVS DE LAS CATEGORIAS
const categoriesPreviewList = document.querySelector('.categoriesPreview-list');
//ETIQUETA ARTICLE QUE CONTIENE UNA LISTA DE CATEGORIAS (esta dentro de la seccion detalles de categoria)
const movieDetailCategoriesList = document.querySelector('#movieDetail .categories-list');
// ETIQUETA ARTICLE QUE ESTA EN LA ULTIMA ETIQUETA SECTION
const relatedMoviesContainer = document.querySelector('.relatedMovies-scrollContainer');

// Elements--------------------------------------------------

//PRIMER TITULO DE HEADER
const headerTitle = document.querySelector('.header-title');
// ETIQUETA SPAN EN HEADER (sirve como flecha para retroceder)
const arrowBtn = document.querySelector('.header-arrow');
//SEGUNDO TITULO DE HEADER
const headerCategoryTitle = document.querySelector('.header-title--categoryView');
//ETIQUETA IMPUT QUE SE ENCUENTRA EN EL HEADER
const searchFormInput = document.querySelector('#searchForm input');
//BOTON QUE SE ENCUENTRA EN EL HEADER
const searchFormBtn = document.querySelector('#searchBtn');
// BOTON DE VER MAS 
const trendingBtn = document.querySelector('.trendingPreview-btn');
//TITULO DE DETALLES DE PELICULA
const movieDetailTitle = document.querySelector('.movieDetail-title');
//PARRAFO DE DESCRIPCION DE PELICULA
const movieDetailDescription = document.querySelector('.movieDetail-description');
//ETIQUETA SPAN QUE PUNTUA LA PELICULA
const movieDetailScore = document.querySelector('.movieDetail-score');