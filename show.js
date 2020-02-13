const searchParams = new URLSearchParams(document.location.search)
const id = searchParams.get('id')
const ul = document.querySelector(".Activities")

fetch(`http://localhost:3000/categories/${id}`)
.then(response => response.json())
.then(category => {
    category.activities.forEach(activity => {
        let li = document.createElement('li')
        console.log(activity)
        li.innerHTML = `  
            <img src="${activity.image}" alt="${activity.title}" style="width:100%">
            <div class="container">
                <h4><a href='activity.html?id=${activity.id}'>${activity.title}</a></h4>
            </div>
        `   
        ul.appendChild(li)
    })
})
    
