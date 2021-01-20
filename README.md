# Cinepedia
Sacramento State - CSC 131 Project
Contributors: 
Mikaela Williams,
Akasha Stallworth,
Mark Zhang,
Maya Hill,
Sum Wong,
Leonardo Garcia


USING OUR API
We created a RESTFUL API using Node.js and Express that returns results in JSON. Using a standard web browser, you can access our API by using our standards below.  

Our current endpoints
Send your data requests to:
  	https://cinepede.herokuapp.com/api/movies
  	https://cinepede.herokuapp.com/api/movies/:id

Endpoint Filters
Category allows users to search by category that a movie was nominated for
Parameters are:
WRITING
CINEMATOGRAPHY
BEST_PICTURE
etc.
Year_ceremony allows users to search for a movie by the year it was nominated. Input any year in the range 1928-2020
Parameters: 
Must be a year that Hosted the Oscars (1928-2020)

Click here to download a value list of all accepted search parameters.
Example
A valid API endpoint would look like this https://cinepede.herokuapp.com/api/movies?year_ceremony=2019&category=CINEMATOGRAPHY




