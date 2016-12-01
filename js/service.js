myApp.factory('wikiApi' , ['$http' , function($http){

	function loadResource(searchItem){

		return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + searchItem  + "&callback=JSON_CALLBACK");
	}

	return { loadResource };
}]);