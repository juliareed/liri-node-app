var keys = require('./keys.js');
var twitter = require("twitter");
// var spotify = require("spotify");
// var request = require("request");
// var fs = require('fs');

// Capture user input, and inform user of what to type in
console.log("Enter my-tweets to play with me!");
// Process[2] choses action, process[3] as search parameter for spotify or movie
var userCommand = process.argv[2];
var secondCommand = process.argv[3];
// Process multiple words
for(i = 4; i < process.argv.length; i++){
	secondCommand += '+' + process.argv[i];
}

function nowSwitch(){
	// Switch statement to declare what action to execute
	switch(userCommand){

		case 'my-tweets':
		fetchTweets();
		break;

		// case 'spotify-this-song':
		// spotifyMe();
		// break;

		// case 'movie-this':
		// movieTime();
		// break;

		// case 'do-what-it-says':
		// whatItDo();
		// break;
		
	}
};
// Options.
function fetchTweets(){
	console.log("Tweets!");
	// New variable for instance of twitter, load keys from imported keys.js
	var client = new twitter({
		consumer_key: 'ntvE6aJIQe30PRBrhotzxFtwT',
		consumer_secret: 'jAIoF1Mwny0i8SyVrinRy3RRYR8fTQyfBhULYbxC6qMb3HMhMv',
		access_token_key: '919636867406090240-0sSJKyVXdeYO70pUV9x8sfcxzxyscil',
		access_token_secret: 'ua23P3nac09J73GnIgg3grvKyINDQJADUWrD81gRQHDC1',
	});

	// Parameters for twitter function
	var parameters = {
		screen_name: 'fakejulia21',
		count: 20
	};

	// Call the get method on our client variable twitter instance
	client.get('statuses/user_timeline', parameters, function(error, tweets, response){
		if (!error) {
			for (i = 0; i < tweets.length; i++) {
				var returnedData = ('Number: ' + (i + 1) + '\n' + tweets[i].created_at + '\n' + tweets[i].text + '\n');
				console.log(returnedData);
				console.log("-------------------------");
			}
		};
	});
};// End fetchTweets

// function spotifyMe(){
// 	console.log("Dance around!");

// 	// Variable for search term, test if defined

// 	var searchTrack;
// 	if(secondCommand === undefined){
// 		searchTrack = "The Sign";
// 	} else {
// 		searchTrack = secondCommand;
// 	}
// 	// Launch spotify search
// 	spotify.search({type:'track', query:searchTrack}, function(err,data){
// 	    if(err){
// 	        console.log('Error occurred: ' + err);
// 	        return;
// 	    } else {
// 	        // Tried searching for release year! Spotify doesn't return this!
// 	  		console.log("Artist: " + data.tracks.items[0].artists[0].name);
// 	        console.log("Song: " + data.tracks.items[0].name);
// 	        console.log("Album: " + data.tracks.items[0].album.name);
// 	        console.log("Preview song: " + data.tracks.items[0].preview_url);
// 	    }
// 	});
// };// End spotifyMe

// function movieTime(){
// 	console.log("Watch this!");

// 	// Same as above, test if search term entered
// 	var searchMovie;
// 	if(secondCommand === undefined){
// 		searchMovie = "Mr. Nobody";
// 	} else {
// 		searchMovie = secondCommand;
// 	};

// 	var url = 'http://www.omdbapi.com/?t=' + searchMovie +'&y=&plot=long&tomatoes=true&r=json';
// 	request(url, function(error, response, body){
// 		if(!error && response.statusCode == 200){
// 			console.log("Title: " + JSON.parse(body)["Title"]);
// 			console.log("Year: " + JSON.parse(body)["Year"]);
// 			console.log("IMDB Rating: " + JSON.parse(body)["imdbRating"]);
// 			console.log("Country: " + JSON.parse(body)["Country"]);
// 			console.log("Language: " + JSON.parse(body)["Language"]);
// 			console.log("Plot: " + JSON.parse(body)["Plot"]);
// 			console.log("Actors: " + JSON.parse(body)["Actors"]);
// 			console.log("Rotten Tomatoes Rating: " + JSON.parse(body)["tomatoRating"]);
// 			console.log("Rotten Tomatoes URL: " + JSON.parse(body)["tomatoURL"]);
// 		}
// 	});
// };// End movieTime

// function whatItDo(){
// 	console.log("Looking at random.txt now");
// 	fs.readFile("random.txt", "utf8", function(error, data) {
// 		if(error){
// 			console.log(error);
// 		} else {

//      	// Split data, declare variables
//      	var dataArr = data.split(',');
//      	userCommand = dataArr[0];
//      	secondCommand = dataArr[1];
//         // If multi-word search term, add
//         for(i = 2; i < dataArr.length; i++){
//         	secondCommand = secondCommand + "+" + dataArr[i];
//         };
//         // Run action
//         nowSwitch();

//     	};// End else

//     });// End readfile

// };// End whatItDo

nowSwitch();