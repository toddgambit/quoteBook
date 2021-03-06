var app=angular.module('quoteBook');
app.service('maxService',['$cookies',function($cookies){
	var quotes = [
	    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
	    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
	    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
	    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
	    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
	    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
	    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
	];
	var quotesNew;

	this.getData = function(){
		return quotes;
	}
	this.addData = function($newGuy){
		if('text' in $newGuy && 'author' in $newGuy){
			quotes.push($newGuy);
		}
	}
	this.removeData = function($killMe){
		for(var i=0; i<quotes.length;i++){
			if(quotes[i].text === $killMe){
				quotes.splice(i,1);
			}
		}
	}

	this.establishCookies = function(){
		$cookies['textQuotes'] = quotes;
	}
	this.getDataTwo = function(){
		quotesNew = angular.fromJson($cookies['textQuotes']);
		return quotesNew;
	}
	this.addDataTwo = function($newGuy){
		if('text' in $newGuy && 'author' in $newGuy){
			quotesNew.push($newGuy);
		}
		$cookies.textQuotes = angular.toJson(quotesNew);
	}
	this.removeDataTwo = function($killThis){
		for(var i=0; i<quotesNew.length;i++){
			if(quotesNew[i].text === $killThis){
				quotesNew.splice(i,1);
			}
		}
		$cookies.textQuotes = angular.toJson(quotesNew);
	}

	if(!$cookies.textQuotes){
		this.establishCookies();
	}
}]);