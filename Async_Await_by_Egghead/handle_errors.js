const fetch = require("node-fetch");

async function fetchGitUser(params) {
  const url = `https://api.github.com/users/${params}`;
  const response = await fetch(url);
  const body = await response.json();

  if (response.status !== 200) throw Error(body.message);

  return body;
}

// use regualar Promise chain
fetchGitUser("gitpash1")
  .then(user => {
    console.log(user);
  })
  .catch(err => {
    console.error(`Error: ${err.message}`);
  });

// use try ... catch construction (which will not work with Promise cause it's always callback asynchronously)

//first define async function
async function showGitUser(params) {
  try {
    const user = await fetchGitUser(params);
      console.log(user.name)
      console.log(user.location)
  } catch (err) {
    console.error(`Error: ${err.message}`)
  }
}

showGitUser('gitpash')
