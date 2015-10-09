app.controller('DefaultController', ['$scope', '$location', function($scope, $location){

	$scope.title = "Ghost Boat Incident Log";

	cartodb.createVis('map', 'https://kirkpettinga.cartodb.com/api/v2/viz/6ea70e02-6d6c-11e5-a49e-0e5db1731f59/viz.json');
	  // .done(function(vis, layers) {
	  //   // layer 0 is the base layer, layer 1 is cartodb layer
	  //   // when setInteraction is disabled featureOver is triggered
	  //   layers[1].setInteraction(true);
	  //   layers[1].on('featureOver', function(e, latlng, pos, data, layerNumber) {
	  //     console.log(e, latlng, pos, data, layerNumber);
	  //   });

	  //   // you can get the native map to work with it
	  //   var map = vis.getNativeMap();

	  //   // now, perform any operations you need, e.g. assuming map is a L.Map object:
	  //   // map.setZoom(3);
	  //   // map.panTo([50.5, 30.5]);
	  // });

}]);