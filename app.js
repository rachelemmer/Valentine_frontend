fetch("http://localhost:3000/categories")
.then(response => response.json())
.then(categories => categories.map(category => {
    let h1 = document.createElement('h1')
    h1.setAttribute("class", "category-titles")
    h1.innerHTML = `<a href='show.html?id=${category.id}'>${category.title}</a>`
    document.querySelector(".categories").appendChild(h1)
}))
