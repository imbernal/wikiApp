myApp.controller('MainController' , ['$scope' , 'wikiApi' ,function($scope , wikiApi ){
	$scope.name = "<h1>HOLA</h1>";


	$('#inputSearch').keyup(function(){
		
		if($(this).val().length > 0){
			$('.test').removeClass('emptyClass');
			wikiApi.loadResource($scope.searchTerm).success(res=>
			$scope.results = res.query.search
			);	
		}
		else {
			$('.test').addClass('emptyClass');
		}
	});
}]);