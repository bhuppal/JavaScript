require('isomorphic-fetch');


function ajax(endpoint) {
    fetch(endpoint)
        .then(res => res.json())
        .then(data => {
            apiGen.next(data)
        })
}

function userRepo(user, repoNumber) {
    let userData = yield ajax(`http://api.github.com/users/${user}`)
    let repos = yield ajax(userData.repos_url)
    console.log(repos[repoNumber].name);    
}

let apiGen = userRepo('cadbot', 5)
apiGen.next();


