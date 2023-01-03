//Source API http://www.omdbapi.com/

import {getMovies, updateUI, getDetail, detailUI} from './function.js';
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function(){
    try{
        const inputKeyword = document.querySelector('.input-keyword');
        const movies = await getMovies(inputKeyword.value);
        updateUI(movies);
    } catch(err) {
        alert(err);
    }
});

document.addEventListener('click', async function(e){
    if(e.target.classList.contains('modal-detail-button')){
        const imdbId = e.target.dataset.imdbid;
        const detail = await getDetail(imdbId);
        detailUI(detail);
    }else{
        const modal = document.querySelector('.modal');
        modal.style.display = 'none';
    }
});


