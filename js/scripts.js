let pokemonRepository = (function () {

let repository = [ 
    {  name: 'Dragonite',
       height: 7, 
       type:['Dragon','Flying']},

    {  name: 'Salazzle', 
       height: 4, 
       type:['Poison','Fire']},

    {  name: 'Giritina', 
       height: 8, 
       type:['Dragon','Ghost']},
      ];
function add(pokemon) {
   if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
   ) {
      repository.push(pokemon);
   } else {
      console.log("pokemon is not correct");
   }
}
function getAll() {
   return repository;
 }
 function addListItem(pokemon){
   let pokemonList = document.querySelector(".pokemon-list");
   let listPokemon = document.createElement("li");
   let button = document.createElement("button");
   button.innerText = pokemon.name;
   button.classList.add("button-class");
   listPokemon.appendChild(button);
   pokemonList.appendChild(listPokemon);
   listPokemon.addEventListener('click', function (event) {
      showDetails(pokemon);
    });
    
 }

function showDetails(pokemon) {
   console.log(pokemon);
}

 return {
   add: add,
   getAll: getAll,
   addListItem: addListItem,
   showDetails: showDetails,
};
})();

pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
 pokemonRepository.addListItem(pokemon);

});