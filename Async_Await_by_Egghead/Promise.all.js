const fetch = require("node-fetch")
async function getUserFromGithub(params) {
  const url = `https://api.github.com${params}`

  const response = await fetch(url)
  return await response.json() 
}

// set func with Promises iterable
async function showUserAndRepos(username) {
  const [user, repos] = await Promise.all([
    getUserFromGithub(`/users/${username}`),
    getUserFromGithub(`/users/${username}/repos`)
  ])

  console.log(user.name, repos.length)
}

showUserAndRepos("gitpash")