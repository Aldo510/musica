//Ifee
//El modulo por default  ya no se vuelve a tocar
(function(){
  'use strict';

  var musicaApi = {
    templateUrl: "components/musica.component.html",
    controller: topTenCtrl
  }

  angular
  //ejemplo de poner dependencia, si queremos mas de una se separan con coma
    .module("musica")
    .component("musicaApi", musicaApi);

  topTenCtrl.$inject = ["apitop"]
  function topTenCtrl(apitop) {
    var top = this;
    top.artists = null;
    top.apiData = apitop.get()
      .$promise.then(function(response) {
          //Se pone el .results para obtener el data, en algunos Json puede ser data
        top.artist = response.results;
      })
  }

})();//fin funcion de autenticacion
