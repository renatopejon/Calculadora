const result = document.querySelector('div.res')
const num = document.querySelectorAll('.num')


for(i = 0; i <= num.length; i++){
    const num = document.querySelectorAll('.num')[i]
    num.addEventListener('click', () => {
        alert(`teste ${num[i].text}`)
        }) 
}


