const serachOptions = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTFmZjg5MjdmNjZkZmM5ODFkNmYwNjJmNTYyYWMwNyIsInN1YiI6IjY0ZjVhNWZmM2Q0M2UwMzg5MjNhYTNiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.abek9HxmeKbyxvQG27mKgTzunRwN_EH83UeMVlg4Gc4'
    }
};

function searchMovie(e) {
    let em=document.getElementById('empty');
    em.innerHTML=''
    e.preventDefault();
    let s = document.getElementById('filter-movie')
    let r = document.getElementById('filter-region');
    let y = document.getElementById('filter-year');

    let query = `?query=${s.value}`;
    if(r.value)
        query += `&region=${r.value}`;
    if(y.value)
        query += `&year=${y.value}`;

        fetch(`https://api.themoviedb.org/3/search/movie${query}`, serachOptions)
            .then(response => response.json())
            .then(response => displaycards(response))
            .catch(err => console.error(err));

}
