const inputKey = document.getElementById('input-key')
const inputValue = document.getElementById('input-value')
const submitBtn = document.getElementById('submit-btn')
const clearBtn = document.getElementById('clear-btn')
const lsOutput = document.getElementById('ls-output')

submitBtn.addEventListener('click', () =>{
    const key = inputKey.value
    const value = inputValue.value
    
    if(!key || !value){
        window.alert("Please enter data and then submit")
    }else {
        localStorage.setItem(key, value)
        location.reload()
    }
})


for(let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i)
    const value = localStorage.getItem(key)

    lsOutput.innerHTML += `${key}: ${value} <br/>`
}

clearBtn.addEventListener('click', () =>{
    localStorage.clear()
    location.reload()
})

