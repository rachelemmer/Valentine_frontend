const searchParams = new URLSearchParams(document.location.search)
const id = searchParams.get('id')
const ul = document.querySelector(".Activities")

fetch(`http://localhost:3000/categories/${id}`)
.then(response => response.json())
.then(category => {
    category.activities.forEach(activity => {
        let li = document.createElement('li')
        li.innerHTML = `  
            <img src="${activity.image}" alt="${activity.title}" style="width:100%">
            <div class="container">
                <a class="card-title" href='activity.html?id=${activity.id}'>${activity.title}</a>
            </div>
        `   
        ul.appendChild(li)
    })
})
    
