const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

const omdbApiKey = 'd42b3922'; // Replace with your OMDb API key
const posterApiKey = 'd42b3922'; // Replace with your Poster API key

app.set('view engine', 'ejs');
app.use(express.static('public'));

async function fetchMovies() {
    const movies = [
        { title: 'Godzilla', id: 'tt0111161' },
        { title: 'Venom: The Last Dance', id: 'tt0068646' },
        { title: 'Batman: Caped Crusader', id: 'tt0071562' },
        { title: 'Nosferatu', id: 'tt0468569' },
        { title: 'Moana 2', id: 'tt0050083' }
    ];

    const movieDetails = await Promise.all(movies.map(async movie => {
        const url = `http://www.omdbapi.com/?i=${movie.id}&apikey=${omdbApiKey}`;
        const response = await axios.get(url);
        return response.data;
    }));

    return movieDetails;
}

app.get('/', async (req, res) => {
    try {
        const movies = await fetchMovies();
        res.render('index', { movies });
    } catch (error) {
        console.error(error);
        res.render('index', { movies: [] });
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
    // Add series fetching logic if needed
    res.render('series', { series: [] });
});

app.get('/trailer', async (req, res) => {
    const movieTitle = req.query.title;

    if (!movieTitle) {
        return res.redirect('/');
    }

    const url = `http://www.omdbapi.com/?t=${movieTitle}&apikey=${omdbApiKey}`;

    try {
        const response = await axios.get(url);
        const movie = response.data;

        if (movie.Response === 'False') {
            return res.render('trailer', { error: movie.Error });
        }

        res.render('trailer', { movie });
    } catch (error) {
        console.error(error);
        res.render('trailer', { error: 'An error occurred while fetching movie data.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
