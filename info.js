const infoOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTFmZjg5MjdmNjZkZmM5ODFkNmYwNjJmNTYyYWMwNyIsInN1YiI6IjY0ZjVhNWZmM2Q0M2UwMzg5MjNhYTNiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.abek9HxmeKbyxvQG27mKgTzunRwN_EH83UeMVlg4Gc4'
    }
  };


  let url = new URL(window.location.href)
  let id=url.searchParams.get("id");
 
fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, infoOptions)
    .then(response => response.json())
    .then(jsonData => displayinfo(jsonData))
    .catch(err => console.error(err));

    

    function displayinfo(jsonData){
      let infoTemp=document.getElementById('info');
      console.log(jsonData)
      let data = jsonData;
    
      infoTemp.innerHTML+=`<div class="card">

      <img src="https://image.tmdb.org/t/p/original${data.poster_path}" class="card-img-top" alt="img" >
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text">${data.overview}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Release Date : ${data.release_date}</li>
        <li class="list-group-item">Title :${data.title}</li>
        <li class="list-group-item">A third item</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
   `

    }