const linksSocialMedia = {
    github: "yasminvieira",
    youtube: "channel/UCvqeF7qiljeYD_AhCzO4eug",
    facebook: "bruna.okochi",
    instagram: "yasminmima17",
    twitter: "yas_mima"
}

function changeSocialMediaLinks() {
    for(let li of socialLinks.children){
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()