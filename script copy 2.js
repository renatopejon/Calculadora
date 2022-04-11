const res = document.querySelector('div.res')
const num = document.querySelectorAll('.num')
let mem = '0'
let fim = false
let total = []
res.innerHTML = mem

function verifim() {
    return
}

function limpa() {
    mem = '0'
    res.innerHTML = mem
    fim = false
}

function sete() {    
    if (res.textContent == 0) {
        res.innerHTML = ``
        res.innerHTML += 7
    } else {
        res.innerHTML += 7
    }
    mem += 7
    
}

function oito() {    
    if (res.textContent == 0) {
        res.innerHTML = ``
        res.innerHTML += 8
    } else {
        res.innerHTML += 8
    }
    mem += 8
}

function nove() {
    
    if (res.textContent == 0) {
        res.innerHTML = ``
        res.innerHTML += 9
    } else {
        res.innerHTML += 9
    }
    mem += 9
}

function quatro() {
    
    if (res.textContent == 0) {
        res.innerHTML = ``
        res.innerHTML += 4
    } else {
        res.innerHTML += 4
    }
    mem += 4
}

function cinco() {
    
    if (res.textContent == 0) {
        res.innerHTML = ``
        res.innerHTML += 5
    } else {
        res.innerHTML += 5
    }
    mem += 5
}

function seis() {
    
    if (res.textContent == 0) {
        res.innerHTML = ``
        res.innerHTML += 6
    } else {
        res.innerHTML += 6
    }
    mem += 6
}

function um() {
    
    if (res.textContent == 0) {
        res.innerHTML = ``
        res.innerHTML += 1
    } else {
        res.innerHTML += 1
    }
    mem += 1
}

function dois() {
    
    if (res.textContent == 0) {
        res.innerHTML = ``
        res.innerHTML += 2
    } else {
        res.innerHTML += 2
    }
    mem += 2
}

function tres() {
    
    if (res.textContent == 0) {
        res.innerHTML = ``
        res.innerHTML += 3
    } else {
        res.innerHTML += 3
    }
    mem += 3
}

function zer0() {
    
    if (res.textContent == 0) {
        res.innerHTML = ``
        res.innerHTML += 0
    } else {
        res.innerHTML += 0
    }
    mem += 0
}

function virg() {
    
    if (res.textContent == 0) {
        res.innerHTML = ``
        res.innerHTML += '.'
    } else {
        res.innerHTML += '.'
    }
    mem += 8
}

function soma() {
    if (res.textContent != 0) {
        res.innerHTML += ' + '
        total.push(parseInt(mem))
        mem = '0'
    } 
}

function subt() {
    if (res.textContent != 0) {
        res.innerHTML += ' - '
        total.push(parseInt(mem))
        mem = '0'
    } 
}

function mult() {
    if (res.textContent != 0) {
        res.innerHTML += ' * '
        total.push(parseInt(mem))
        mem = '0'
    } 
}

function divi() {
    if (res.textContent != 0) {
        res.innerHTML += ' / '
        total.push(parseInt(mem))
        mem = '0'
    } 
}

function igual2() {
    let igual = eval(res.textContent)
    alert(igual)
}

