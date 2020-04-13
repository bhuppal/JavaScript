reruire('isomorphic-fetch')

async function getRepo(userName, number) {
    let response = await fetch(`http://api.github.com/users/${userName}`);
    let data = await response.json();
    let repoResponse = await fetch(data.repos_url);
    let reposData = await reposResponse.json();
    console.log(reposData[number].name);
}

getRepo('cadbot',5);