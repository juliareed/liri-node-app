# Liri
L.I.R.I. stands for Language Interpretation and Recognition Interface. It is a command line node app that takes in parameters and gives back data from various APIs.

As the name suggests, LIRI is analagous to the iPhone's SIRI assistant, but rather than using speech, LIRI is controlled through written text.

The LIRI app uses Node.js in the command line of your computer and has dependencies for the request, spotify, and twitter Node packages. It also used the built-in fs package to read and write to text files.

The app features 3 different features using the node liri.js [command-here] syntax. Below are the command types...

* my-tweets returns your Twitter account's 20 most recent tweets using the Twitter API.
* spotify-this-song [song-title-here] returns the artist, album, and preview URL for a specific song using the Spotify API.
* movie-this [movie-title-here] returns the year, rating, plot summary, reviews of a specific movie using the IMDb API.
