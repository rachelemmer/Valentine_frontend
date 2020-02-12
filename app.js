console.log('hit')

fetch("http://localhost:3000/categories")
.then(response => response.json())
.then(categories => categories.map(category => {
    let h1 = document.createElement('h1')
    h1.innerHTML = `<a href='show.html?id=${category.id}'>${category.title}</a>`
    document.body.appendChild(h1)
}))

// function categoryToElement(category)
// category => {
//     let h1 = document.createElement('h1')
//     h1.innerHTML = `<a href='show.html?id=${category.id}'>${category.title}</a>`
//     document.body.appendChild(h1)