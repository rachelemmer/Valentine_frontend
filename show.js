const searchParams = new URLSearchParams(document.location.search)
const id = searchParams.get('id')

fetch(`http://localhost:3000/categories/${id}`)
.then(response => response.json())
.then(category => {
    category.activities.forEach(activity => {
        let p = document.createElement('p')
        p.innerHTML = `<a href='activity.html?id=${activity.id}'>${activity.title}</a>`
        document.body.appendChild(p)
})
})
    
