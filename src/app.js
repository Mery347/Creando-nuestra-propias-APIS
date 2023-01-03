const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();


I /* execute the call to my routes */
const indexRouter = require('./routes/index');
const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const apiGenresRoutes = require('./routes/api/genresRoutes');
const apiMoviesRoutes = require('./routes/api/moviesRoutes');


// view engine setup
app. set('views',  path. resolve(__dirname,  './views'));
app. set('view engine',  'ejs');
app. use(express. json())
app. use(express. static(path. resolve(__dirname,  '.. /public')));

/* URL encode - So that we can get the information from the form to req.body */
app. use(express. urlencoded({  extended: false }));

/* Here I am arranging the possibility to use the seteo in the forms for the use of the methods put or delete */
app. use(methodOverride('_method'));

app. use('/',  indexRouter);
app. use('/movies',moviesRoutes);
app. use('/genres',genresRoutes);

/* Here you can place the paths of the APIs */
app. use('/api',apiGenresRoutes);
app. use('/api',apiMoviesRoutes);

/* Activating the server from express */
app. listen('3001', () => console. log('Server running on port 3001'));