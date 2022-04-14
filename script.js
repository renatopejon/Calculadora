const res = document.querySelector('div.res')
const num = document.querySelectorAll('.num')
res.innerHTML = '0'

function limpa() {
    mem = '0'
    res.innerHTML = mem
}

function sete() {
    if (res.textContent == 0 || res.textContent.includes('=')) {
        res.innerHTML = ``
        res.innerHTML += 7
    } else {
        res.innerHTML += 7
    }
}

function oito() {    
    if (res.textContent == 0 || res.textContent.includes('=')) {
        res.innerHTML = ``
        res.innerHTML += 8
    } else {
        res.innerHTML += 8
    }
}

function nove() {
    
    if (res.textContent == 0 || res.textContent.includes('=')) {
        res.innerHTML = ``
        res.innerHTML += 9
    } else {
        res.innerHTML += 9
    }
}

function quatro() {
    
    if (res.textContent == 0 || res.textContent.includes('=')) {
        res.innerHTML = ``
        res.innerHTML += 4
    } else {
        res.innerHTML += 4
    }
}

function cinco() {
    
    if (res.textContent == 0 || res.textContent.includes('=')) {
        res.innerHTML = ``
        res.innerHTML += 5
    } else {
        res.innerHTML += 5
    }
}

function seis() {
    
    if (res.textContent == 0 || res.textContent.includes('=')) {
        res.innerHTML = ``
        res.innerHTML += 6
    } else {
        res.innerHTML += 6
    }
}

function um() {
    
    if (res.textContent == 0 || res.textContent.includes('=')) {
        res.innerHTML = ``
        res.innerHTML += 1
    } else {
        res.innerHTML += 1
    }
}

function dois() {
    
    if (res.textContent == 0 || res.textContent.includes('=')) {
        res.innerHTML = ``
        res.innerHTML += 2
    } else {
        res.innerHTML += 2
    }
}

function tres() {
    
    if (res.textContent == 0 || res.textContent.includes('=')) {
        res.innerHTML = ``
        res.innerHTML += 3
    } else {
        res.innerHTML += 3
    }
}

function zer0() {
    
    if (res.textContent == 0 || res.textContent.includes('=')) {
        res.innerHTML = ``
        res.innerHTML += 0
    } else {
        res.innerHTML += 0
    }
}

function virg() {
    let verif = res.textContent.slice(res.textContent.length - 1)
    if (verif != ' ' && verif != '.') {
        if (res.textContent != 0) {
            res.innerHTML += '.'
        } 
    }
}

function soma() {
    let verif = res.textContent.slice(res.textContent.length - 1)
    if (verif != ' ' || verif == '.') {
        if (res.textContent != 0) {
            res.innerHTML += ' + '
        } 
    }
    
}

function subt() {
    let verif = res.textContent.slice(res.textContent.length - 1)
    if (verif != ' ' || verif == '.') {
        if (res.textContent != 0) {
            res.innerHTML += ' - '
        } 
    }
    
}

function mult() {
    let verif = res.textContent.slice(res.textContent.length - 1)
    if (verif != ' ' || verif == '.') {
        if (res.textContent != 0) {
            res.innerHTML += ' * '
        } 
    }
}

function divi() {
    let verif = res.textContent.slice(res.textContent.length - 1)
    if (verif != ' ' || verif == '.') {
        if (res.textContent != 0) {
            res.innerHTML += ' / '
        } 
    }
}

function corrige() {
    res.innerHTML = res.innerHTML.slice(0,-1)
}

function igual2() {
    let verif = res.textContent.slice(res.textContent.length - 1)
    if (verif != ' ' || verif == '.') {
        let igual = eval(res.textContent)
        if (igual == 13) {
            res.innerHTML = `<img src="lula.png" alt="" width = "300">`
        } else if (igual == 17) {
            res.innerHTML = `<img src="bozo.jpg" alt="" width = "300">`
        } else {
        res.innerHTML = `= ${igual}`
        }
    } 
}

