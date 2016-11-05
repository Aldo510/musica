//Ifee
//El modulo por default  ya no se vuelve a tocar
(function(){
  'use strict';

  angular//Se quitan los corchetes porque ya fue declarada
    .module("musica")
    .factory("apitop", apitop);

    //consumir api star wars
    //Se debe poner el paso de abajo y pasarlo como parametro para injectar la dependencia y que pueda salir
    apitop.$inject = ["$resource"];
    function apitop($resource) {
      //paso de paramtros
      ///2.0/?method=artist.gettopalbums&artist=cher&api_key=5c51e96e6228ed1500eac246757571be&format=json
      var api_key = "5c51e96e6228ed1500eac246757571be";
      //http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=cher&api_key=YOUR_API_KEY&format=json
      return $resource("http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=radiohead&api_key=" +api_key+"&format=json");
    }



})();//fin funcion de autenticacion
