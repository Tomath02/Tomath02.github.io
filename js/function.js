//Movies card
export const getMovies = function(keyword){
    return fetch('http://www.omdbapi.com/?apikey=76bac44d&s=' + keyword)
        .then(response => {
            if(!response.ok){
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(response => {
            if(response.Response === "False"){
                throw new Error(response.Error)
            };
            return response.Search;
        })
};

export function updateUI(movies){
    let cards = '';
    movies.forEach(m => cards += showCards(m));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
};


//modal detil
export function getDetail(imdbid){
    return fetch('http://www.omdbapi.com/?apikey=76bac44d&i=' + imdbid)
        .then(response => response.json())
        .then(m => m);
};

export function detailUI(m){
    const movieDetail = showMovieDetail(m);
    const modalContainer = document.querySelector('.modal-body');
    modalContainer.innerHTML = movieDetail;
}

//cards
function showCards(m){
    return `<div class="column">
                <div class="card">
                    <img class="img" src="${m.Poster}" alt="" style="width: 100%;">
                    <div class="container-card">                        
                        <h3>${m.Title}</h3>
                        <p>${m.Year}</p>
                        <a href="#" class="detail-button modal-detail-button" data-imdbid="${m.imdbID}">Movie Detail</a>
                    </div>
                </div>
            </div>`
};

//Modal
function showMovieDetail(m){
    return `<div id="myModal" class="modal">
                <div class="modal-content">
                <span class="close">&times;</span>
                <table>
                    <ul>
                        <tr>
                            <td><h4>Title</h4></td>
                            <td>: ${m.Title}</td>
                        </tr>
                        <tr>
                            <td><h4>Year</h4></td>
                            <td>: ${m.Year}</td>
                        </tr>
                        <tr>
                            <td><h4>Director</h4></td>
                            <td>: ${m.Director}</td>
                        </tr>
                        <tr>
                            <td><h4>Writer</h4></td>
                            <td>: ${m.Writer}</td>
                        </tr>
                        <tr>
                            <td><h4>Genre</h4></td>
                            <td>: ${m.Genre}</td>
                        </tr>
                        <tr>
                            <td><h4>Actors</h4></td>
                            <td>: ${m.Actors}</td>
                        </tr>
                    </ul>
                </table>
                </div>
            </div>`
}
