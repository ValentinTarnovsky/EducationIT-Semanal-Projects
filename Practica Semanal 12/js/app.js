// Load HTMLs
function cargarHome() {
    fetch('html/home.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            document.querySelector('main').innerHTML = html;
            runContent();
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));
}

function cargarAddmovie() {
    fetch('html/addmovie.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            document.querySelector('main').innerHTML = html;
            getFormData();
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));
}

const homeLinkBtn = document.getElementById('homeLink-btn');
const movieLinkBtn = document.getElementById('movieLink-btn');
homeLinkBtn.addEventListener('click', cargarHome);
movieLinkBtn.addEventListener('click', cargarAddmovie);
window.onload = () => {
    if (window.location.href.endsWith("#AddMovie")) {
        homeLinkBtn.classList.remove('active');
        movieLinkBtn.classList.add('active');
        cargarAddmovie();
    } else {
        movieLinkBtn.classList.remove('active');
        homeLinkBtn.classList.add('active');
        cargarHome();
    }
};

// Create Movies
const createMovie = function (name, year, desc) {
    this.name = name;
    this.year = year;
    this.desc = desc;
};

const movies = [
    new createMovie('Inception', 2010, 'A thief who enters the dreams of others to steal secrets from their subconscious.'),
    new createMovie('The Godfather', 1972, 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'),
    new createMovie('Pulp Fiction', 1994, 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.'),
    new createMovie('The Dark Knight', 2008, 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.'),
    new createMovie('The Lord of the Rings: The Return of the King', 2003, 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.'),
    new createMovie('Schindler\'s List', 1993, 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.'),
    new createMovie('Forrest Gump', 1994, 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.'),
    new createMovie('The Matrix', 1999, 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.'),
    new createMovie('The Silence of the Lambs', 1991, 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.'),
    new createMovie('Fight Club', 1999, 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.'),
    new createMovie('Goodfellas', 1990, 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.'),
    new createMovie('The Green Mile', 1999, 'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.'),
    new createMovie('The Shawshank Redemption', 1994, 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'),
    new createMovie('The Prestige', 2006, 'After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.'),
    new createMovie('The Departed', 2006, 'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.'),
    new createMovie('Inglourious Basterds', 2009, 'In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner\'s vengeful plans for the same.'),
    new createMovie('Interstellar', 2014, 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.'),
    new createMovie('The Usual Suspects', 1995, 'A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.'),
    new createMovie('Saving Private Ryan', 1998, 'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.'),
    new createMovie('The Godfather: Part II', 1974, 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.'),
    new createMovie('Gladiator', 2000, 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.'),
    new createMovie('Braveheart', 1995, 'Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.'),
    new createMovie('The Sixth Sense', 1999, 'A boy who communicates with spirits seeks the help of a disheartened child psychologist.'),
    new createMovie('The Truman Show', 1998, 'An insurance salesman discovers his whole life is actually a reality TV show.')
];

// Search Movies
function runContent() {
    const homeMoviesSection = document.getElementById('home__movies');
    const searchBarInput = document.getElementById('searchValue');
    const searchBarType = document.getElementById('typeValue');
    const searchBarBtn = document.getElementById('btn-search');

    const searchMovie = () => {
        homeMoviesSection.innerHTML = '';

        let searchedMovies;

        if (searchBarType.value === 'name') {
            searchedMovies = movies.filter((movie) => movie.name.toLowerCase().includes(searchBarInput.value.toLowerCase()));
        } else if (searchBarType.value === 'year' && searchBarInput.value !== '') {
            searchedMovies = movies.filter((movie) => movie.year === Number(searchBarInput.value));
        } else {
            searchedMovies = movies;
        }
        searchedMovies.length === 0 ? homeMoviesSection.innerHTML = '<i class="ri-error-warning-line"></i> 404: Movie Not Found!' : homeMoviesSection.innerHTML = `<h2>${searchedMovies.length} Movies found.</h2>`;

        searchedMovies.forEach((movie, index) => {
            const div = document.createElement('div');
            div.className = 'movieCard';
            const h4 = document.createElement('h4');
            const p = document.createElement('p');
            const hr = document.createElement('hr');

            h4.innerText = `${movie.name} - ${movie.year}`;
            p.innerText = movie.desc;

            div.append(h4);
            div.append(p);
            div.append(hr);

            homeMoviesSection.append(div);

            if (index === searchedMovies.length - 1) {
                setTimeout(() => {
                    searchBarInput.value = '';
                }, 30);
            }
        });
    };

    searchBarBtn.addEventListener('click', (e) => {
        e.preventDefault();
        cargarHome();
        searchMovie();
    });

    searchMovie();
}

// Add Movies
function getFormData() {
    const form = document.getElementById('form');
    const title = document.getElementById('title');
    const year = document.getElementById('year');
    const desc = document.getElementById('desc');
    const add = document.getElementById('add');
    const errorSpan = document.getElementById('errorSpan');
    add.addEventListener('click', () => {

        if (year.value.length === 4 && Number(year.value) >= 1895 && Number(year.value) <= 2024) {
            movies.push(new createMovie(title.value, Number(year.value), desc.value));

            const h3 = document.createElement('h3');
            const p = document.createElement('p');
            const p2 = document.createElement('p');

            form.innerHTML = '';
            h3.innerHTML = 'Movie added successfully.';
            p.innerText = `${title.value} - ${year.value}`
            p2.innerText = `${desc.value}`
            form.append(h3);
            form.append(p);
            form.append(p2);

            setTimeout(() => {
                cargarAddmovie();
            }, 2500);
        } else {
            errorSpan.innerHTML = `<i class="ri-error-warning-line"></i> 500: Invalid year!`;
            setTimeout(() => {
                errorSpan.innerHTML = '';
            }, 2500);
        }
    })
}

// History travel
window.onhashchange = (e) => {
    e.currentTarget.location.hash === '#AddMovie' ? cargarAddmovie() : cargarHome();
    if (window.location.href.endsWith("#AddMovie")) {
        homeLinkBtn.classList.remove('active');
        movieLinkBtn.classList.add('active');
    } else {
        movieLinkBtn.classList.remove('active');
        homeLinkBtn.classList.add('active');
    }
}