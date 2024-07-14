let pokemonRepository = (function () {

let pokemonList= [
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

function getAll() {
   return pokemonList;
}

function add(pokemon) {
   pokemonList.push(pokemon);
}

return {
   getAll,
   add
};
})();

pokemonRepository.getAll().forEach(function(pokemon) {
   document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ')');
   if (pokemon.height > 0.6) {
       document.write ('  - Wow, that’s big!');
   }
});