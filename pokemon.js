const container = document.querySelector('#container');

const BaseImageUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

    for(let i = 1; i <= 500; i++){
        const CatchPokemon = document.createElement('div');
        CatchPokemon.classList.add('pokemon');

        const ImagePokemon = document.createElement('img');
        ImagePokemon.src = `${BaseImageUrl}${i}.png`;

        const label = document.createElement('nomor');
        label.innerText = `#${i}`;

        CatchPokemon.appendChild(ImagePokemon);
        CatchPokemon.appendChild(label);
        container.appendChild(CatchPokemon);


        
    }