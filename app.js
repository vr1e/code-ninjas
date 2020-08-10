const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

// connect to mongodb
const dbURI = '';

mongoose
	.connect(dbURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		authSource: 'admin',
	})
	.then((result) => app.listen(3000))
	.catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// list for requests
// app.listen(3000);

// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
// 	const blog = new Blog({
// 		title: 'new blog',
// 		snippet: 'about my new blog',
// 		body: 'more about my new blog',
// 	});

// 	blog
// 		.save()
// 		.then((result) => res.send(result))
// 		.catch((err) => console.log(err));
// });

// app.get('/all-blogs', (req, res) => {
// 	Blog.find()
// 		.then((result) => res.send(result))
// 		.catch((err) => console.log(err));
// });

// app.get('/single-blog', (req, res) => {
// 	Blog.findById('5ea99b49b8531f40c0fde689')
// 		.then((result) => res.send(result))
// 		.catch((err) => console.log(err));
// });

app.get('/', (req, res) => {
	res.redirect('/blogs');
});

app.get('/about', (req, res) => {
	res.render('about', { title: 'About' });
});

// blog routes
app.get('/blogs', (req, res) => {
	Blog.find()
		.sort({ createdAt: -1 })
		.then((result) =>
			res.render('index', { title: 'All Blogs', blogs: result })
		)
		.catch((err) => console.log(err));
});

app.get('/blogs/create/', (req, res) => {
	res.render('create', { title: 'Create a new Blog' });
});

// 404 page
app.use((req, res) => {
	res.status(404).render('404', { title: '404' });
});
