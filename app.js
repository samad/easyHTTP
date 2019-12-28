var data = {
	title: 'Custom Post',
	body: 'This is a post',
};

var http = new easyHTTP();

/* XHR */

// GET
// http.get('https://jsonplaceholder.typicode.com/posts/10', function(err, res) {
// 	console.log(res);
// });

// POST
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, res) {
// 	console.log(res);
// });

// PUT
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, res) {
// 	console.log(res);
// });

// DELETE
// http.get('https://jsonplaceholder.typicode.com/posts/10', function(err, res) {
// 	console.log(res);
// });

/* Promise */

// GET
// const res = http.get('https://jsonplaceholder.typicode.com/users/');
// res.then(res => console.log(res));

// POST
// const res = http.post('https://jsonplaceholder.typicode.com/users/', data);
// res.then(res => console.log(res));

// PUT
// const res = http.put('https://jsonplaceholder.typicode.com/users/2', data);
// res.then(res => console.log(res));

// DELETE
// const res = http.delete('https://jsonplaceholder.typicode.com/users/2');
// res.then(res => console.log(res));
