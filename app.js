const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

const omdbApiKey = 'd42b3922';
const posterApiKey = 'd42b3922';

app.set('view engine', 'ejs');
app.use(express.static('public'));

async function fetchMovies() {
    const movies = [
        { title: 'Movie 1', id: 'tt0111161' },
        { title: 'Movie 2', id: 'tt0068646' },
        { title: 'Movie 3', id: 'tt0071562' },
        { title: 'Movie 4', id: 'tt0468569' },
        { title: 'Movie 5', id: 'tt0050083' }
    ];

    const movieDetails = await Promise.all(movies.map(async movie => {
        const url = `http://www.omdbapi.com/?i=${movie.id}&apikey=${omdbApiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }));

    return movieDetails;
}

app.get('/', async (req, res) => {
    try {
        const movies = await fetchMovies();
        const welcomeMessage = "¡Bienvenido a la aplicación de películas!";
        res.render('index', { movies, welcomeMessage });
    } catch (error) {
        console.error(error);
        res.render('index', { movies: [], welcomeMessage: "¡Bienvenido a la aplicación de películas!" });
    }
});

app.get('/movies', async (req, res) => {
    try {
        const movies = await fetchMovies();
        res.render('movies', { movies });
    } catch (error) {
        console.error(error);
        res.render('movies', { movies: [] });
    }
});

app.get('/series', async (req, res) => {
    res.render('series', { series: [] });
});

app.get('/trailer', async (req, res) => {
    const movieTitle = req.query.title;

    if (!movieTitle) {
        return res.redirect('/');
    }

    const url = `http://www.omdbapi.com/?t=${movieTitle}&apikey=${omdbApiKey}`;

    try {
        const response = await fetch(url);
        const movie = await response.json();

        if (movie.Response === 'False') {
            return res.render('trailer', { error: movie.Error });
        }

        res.render('trailer', { movie });
    } catch (error) {
        console.error(error);
        res.render('trailer', { error: 'An error occurred while fetching movie data.' });
    }
});

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

module.exports = app;
