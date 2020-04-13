//http://jsonplaceholder.typicode.com/posts - api source json result

const getPost = () => {
    return fetch('http://jsonplaceholder.typicode.com/posts')
    .then(result => result.json())
    .then(post => console.log(posts))
}



console.log(getPost());