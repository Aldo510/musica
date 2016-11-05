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
    .module("musica");
    .component("musicaApi", musicaApi);


})();//fin funcion de autenticacion
