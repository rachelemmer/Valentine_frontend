fetch('http://localhost:3000/categories')
.then(response => response.json())
.then(categories => categories.map(category => {
    const option = document.createElement("option")
    option.innerText = category.title 
    option.value = category.id 
    document.getElementById("category_id").appendChild(option)
}))
