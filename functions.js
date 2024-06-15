const trailers = [
    {
        category: 'action',
        title: 'Movie Title 1',
        description: 'Movie Description 1',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
        category: 'action',
        title: 'Movie Title 2',
        description: 'Movie Description 2',
        url: 'https://www.youtube.com/embed/JNQXAC9IVRw'
    },
    {
        category: 'comedy',
        title: 'Movie Title 3',
        description: 'Movie Description 3',
        url: 'https://www.youtube.com/embed/FcMWPN4aPZQ'
    },
    // Add more trailers to the array...
];

trailers.forEach((trailer) => {
    const trailerContainer = document.querySelector(`#${trailer.category} .trailer-container`);
    const trailerHTML = `
        <div class="trailer">
            <iframe src="${trailer.url}" frameborder="0" allowfullscreen></iframe>
            <h3>${trailer.title}</h3>
            <p>${trailer.description}</p>
        </div>
    `;
    trailerContainer.innerHTML += trailerHTML;
});