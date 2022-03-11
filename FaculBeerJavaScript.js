const time = document.querySelector('#clock')
const price = document.querySelector('#price')
const del = document.querySelector('#del')
const promoção = document.querySelector('#promoção')

let seconds = 15
let minuts = 1



console.log(del)


    setInterval(() => {
        if(seconds < 1) {seconds = 60}
        else(seconds--)
        if(seconds < 1) {minuts--}
        console.log(minuts)
        if(seconds < 10) {seconds = `0${seconds}`}
        if (minuts == -1 ){
            price.innerHTML = '280,00'
            del.style.display = 'none'
            promoção.innerHTML = 'A promoção acabou otário !!!!!!!!!!!!!!'           
        }
        
        time.innerHTML = `${minuts}:${seconds}`
        if (minuts <= -1){time.innerHTML = '00:00'}
    },1000)


    


   
