# MovieCatalog

The movie catalog app is a program that shows a list of movies. These movies have the following information 
like rating, maturity rating, movie length, and year released. This app provides a place for users to figure 
out which movie is best for them. The rating helps users determine which movie is a good one to watch.

## API Docs

### Create Movie (CREATE)
**Method**: POST \
**URL**: http://localhost:3000/api/v1/movies

**Request body**:
```
{
  "Name": "Blade Runner 2049",
  "Length": "2h 44m",
  "Maturity_Rating": "R",
  "Rating": 8.0,
  "Year": 2017
}
```

### Get Movie (READ)
**Method**: GET \
**URL**: http://localhost:3000/api/v1/movies/{MovieID}

### Update Movie (UPDATE)
**Method**: PATCH \
**URL**: http://localhost:3000/api/v1/movies/{MovieID}

**Request body**:
```
{
  "Name": "Alien",
  "Length": "1h 57m",
  "Maturity_Rating": "R",
  "Rating": 8.5,
  "Year": 1979
}
```

### Delete Movie (DELETE)
**Method**: DELETE \
**URL**: http://localhost:3000/api/v1/movies/{MovieID}
