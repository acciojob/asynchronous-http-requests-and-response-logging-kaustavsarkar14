//your JS code here. If required.
const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
];
urls.forEach(url=>{
	fetch(url)
	.then(data=>data.json())
	.then(data=>console.log(data))
})