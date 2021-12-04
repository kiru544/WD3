const errorElement = document.getElementById('error')
const state = document.getElementById('state')
const code = document.getElementById('code')
const form = document.getElementById('form')

form.addEventListener('submit',(e) => {
    let messages = []
    if (state.value ==='NT' &&  code.value >1000){
        messages.push('NT postcodes range from 800-999')
    } 
    if(messages.length>0){
        e.preventDefault()
        errorElement.innerText = messages.join(',')
    }



})