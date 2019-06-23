console.log('Javascript file loaded...')

fetch('http://puzzle.mead.io/puzzle').then((response) =>{
    response.json().then((data) => {
        console.log(data)
    })
})

const whetherForm = document.querySelector('form')
const search = document.querySelector('input')

whetherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    console.log(search.value)
    console.log('Testing.......')
})