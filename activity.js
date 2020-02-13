const searchParams = new URLSearchParams(document.location.search)
const id = searchParams.get('id')


fetch(`http://localhost:3000/activities/${id}`)
.then(response => response.json())
.then(activity => {
    let form = document.createElement('form')
    form.setAttribute(name="id", value="delete-button")
    form.action = `http://localhost:3000/activities/${id}`
    form.method = 'POST'
    form.innerHTML = `
        <input type='submit' value ="Delete Activity" /> 
        <input type="hidden" name="_method" value="delete" />
        `
    document.querySelector("nav").appendChild(form)
})


fetch(`http://localhost:3000/activities/${id}`)
.then(response => response.json())
.then(activity => {
    let h1 = document.createElement('h1')
    h1.innerText = activity.title
    document.querySelector("div").appendChild(h1)

    let h2 = document.createElement('h2')
    h2.innerText = activity.location 
    document.querySelector("div").appendChild(h2)

    let form = document.createElement('form')
    form.action = `http://localhost:3000/activities/${id}`
    form.setAttribute(name="id", value="update-button")
    form.method = 'POST'
    form.innerHTML = `
        <input type='submit' value ="Update Location: " /> 
        <input id="update" type='text' name="location" value=""/>
        <input type="hidden" name="_method" value="put" />
        `
        document.querySelector("div").appendChild(form)

    let h3 = document.createElement('h3')
    h3.innerText = activity.budget 
    document.querySelector("div").appendChild(h3)

    let h4 = document.createElement('h4')
    h4.innerText = activity.what_to_bring_or_buy  
    document.querySelector("div").appendChild(h4)


})



// fetch(`http://localhost:3000/activities/${id}`)
// .then(response => response.json())
// .then(activity => {
//     let form = document.createElement('form')
//     form.action = `http://localhost:3000/activities/${id}`
//     form.method = 'POST'
//     form.innerHTML = `
//         <input type='submit' value ="Update Location: " /> 
//         <input type='text' name="Location" value="" placeholder="Location"/>
//         <input type="hidden" name="_method" value="update" />
//         `
//     document.body.appendChild(form)
// })


fetch(`http://localhost:3000/activities/${id}`)
.then(response => response.json())
.then(activity => {
    let img = document.createElement('img')
    img.setAttribute("class", "images")
    img.src = activity.image
    document.querySelector("div").appendChild(img)
})

// fetch(`http://localhost:3000/activities/${id}`)
// .then(response => response.json())
// .then(activity => {
//     let form = document.createElement('form')
//     form.action = `http://localhost:3000/activities/${id}`
//     form.method = 'POST'
//     form.innerHTML = `
//         <input type='submit' value ="Delete Activity" /> 
//         <input type="hidden" name="_method" value="delete" />
//         `
//     document.body.appendChild(form)
// })