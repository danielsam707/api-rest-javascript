
// FUNCION: OBTENER PELICULAS RECOMENDADAS POR DIA
async function getTrendingMoviesPreview() {
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
    const data = await res.json();

    const movies = data.results;
    
    //RECORRER LAS PELICULAS
    movies.forEach((movie) => {

        //Traigo el contenedor article
        const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList')
        //Creo un div contenedor
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        //Creo el elemnto imagen
        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src',
            'https://image.tmdb.org/t/p/w300'+movie.poster_path
        );

        movieContainer.appendChild(movieImg);
        trendingPreviewMoviesContainer.appendChild(movieContainer);
    })
}


//FUNCION: OBTENER CATEGORIAS
async function getCategoriesPreview() {
    const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
    const data = await res.json();

    const categories = data.genres;
    console.log(categories)
    
    //RECORRER LAS PELICULAS
    categories.forEach((category) => {

        //Traigo el contenedor article
        const previewCategoiresContainer = document.querySelector('#categoriesPreview .categoriesPreview-list')

        //Creo un div contenedor
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        //Creo el elemnto title
        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', 'id'+category.id);
        const categoryTitleText = document.createTextNode(category.name);

        //Agregar los elementos al HTML
        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        previewCategoiresContainer.appendChild(categoryContainer);
    })
}

getCategoriesPreview();
getTrendingMoviesPreview();