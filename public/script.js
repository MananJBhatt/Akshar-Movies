const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTFmZjg5MjdmNjZkZmM5ODFkNmYwNjJmNTYyYWMwNyIsInN1YiI6IjY0ZjVhNWZmM2Q0M2UwMzg5MjNhYTNiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.abek9HxmeKbyxvQG27mKgTzunRwN_EH83UeMVlg4Gc4'
    }
};

fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(jsonData => displaycards(jsonData))
    .catch(err => console.error(err));

function displaycards(response) {


    console.log(response)
    let movies = document.getElementById('movie');
    movies.innerHTML = '';
    // let s=document.getElementById('slide1');
    // s.src=`https://image.tmdb.org/t/p/original${response.results[0].poster_path}`;
    for (i = 0; i < 5; i++) {
        let v = response.results;

    }
    response.results.forEach(movie => {
        //console.log(movie);


        movies.innerHTML += `<div class="col mb-2 mt-2"><div class="card movie" id="demo" style="width: 18rem;">
    <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" class="card-img-top" alt="..." >
    <div class="card-body">
        
        <h5 class="card-title "> ${movie.title}</h5>
        <p class="card-text movie-info">Release date: ${movie.release_date}</p>         
        <span class="${getClassByRate(movie.vote_average)}">${movie.vote_average}</span>
        <div class="overview">
        <h3>Overview</h3>
        ${movie.overview}
      </div>
    </div>
</div></div>`
    });
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

const trendOptions = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTFmZjg5MjdmNjZkZmM5ODFkNmYwNjJmNTYyYWMwNyIsInN1YiI6IjY0ZjVhNWZmM2Q0M2UwMzg5MjNhYTNiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.abek9HxmeKbyxvQG27mKgTzunRwN_EH83UeMVlg4Gc4'
    }
};

fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', trendOptions)
    .then(response => response.json())
    .then(jsonData => trending(jsonData))
    .catch(err => console.error(err));


function trending(jsonData) {

    let t = document.getElementById('trend');
    let i = 0
    let mov = jsonData.results;
    for (i = 0; i < 8; i++) {
        t.innerHTML += `<div class="col">
        <div class="card"><a href="movie-detail.html?id=${mov[i].id}">
    <img src="https://image.tmdb.org/t/p/original${mov[i].poster_path}" class="card-img-top" alt="img" title="${mov[i].title}">
        </a>
        </div>
    </div>`

    }
}
const peopleOptions = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTFmZjg5MjdmNjZkZmM5ODFkNmYwNjJmNTYyYWMwNyIsInN1YiI6IjY0ZjVhNWZmM2Q0M2UwMzg5MjNhYTNiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.abek9HxmeKbyxvQG27mKgTzunRwN_EH83UeMVlg4Gc4'
    }
};

fetch('https://api.themoviedb.org/3/trending/person/day?language=en-US', options)
    .then(response => response.json())
    .then(response => trendPeople(response))
    .catch(err => console.error(err));

function trendPeople(response) {
    let trendyPeople = document.getElementById('people');
    let i = 0
    let pe = response.results;
    for (i = 0; i < 9; i++) {
        if (i == 5 || i == 7) {
            continue;
        }
        trendyPeople.innerHTML += `<div class="col">
        <div class="card">
        <img src="https://image.tmdb.org/t/p/original${pe[i].profile_path}" class="card-img-top" alt="img" title="${pe[i].name}">
        <h5>${pe[i].name}</h5>
    </div></div>`

    }

}
