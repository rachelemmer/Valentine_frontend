const searchParams = new URLSearchParams(document.location.search)
const id = searchParams.get('id')

fetch(`http://localhost:3000/activities/${id}`)
.then(response => response.json())
.then(activity => {
    let h1 = document.createElement('h1')
    h1.innerText = activity.title
    document.body.appendChild(h1)

    let h2 = document.createElement('h2')
    h2.innerText = activity.location 
    document.body.appendChild(h2)

    let h3 = document.createElement('h3')
    h3.innerText = activity.budget 
    document.body.appendChild(h3)

    let h4 = document.createElement('h4')
    h4.innerText = activity.what_to_bring_or_buy  
    document.body.appendChild(h4)

    let h5 = document.createElement('h5')
    h5.innerText = activity.image 
    document.body.appendChild(h5)
})

fetch(`http://localhost:3000/activities/${id}`)
.then(response => response.json())
.then(activity => {
    let form = document.createElement('form')
    form.action = `http://localhost:3000/activites/${id}`
    form.method = 'POST'
    form.innerHTML = `
        <input type='submit' value ="Delete" /> 
        <input type="hidden" name="_method" value="delete" />
        `
    // document.getElementById('delete_activity').appendChild()
}) 

// li.dataset.id = user.id and li.dataset.name 


{/* <input type="text" placeholder = "Name" name="name" value="${li.dataset.name}"/> */}