function ePar(x){
    if(x % 2 === 0){
        return "é par!"
    }
    return "é impar!"
}

function turno(hour){
    if(hour >= 19 || hour <= 24){
        return "é Noite :)!"
    } else if(hour >= 12 || hour < 19){
        return "é Tarde :)!"
    } 
    else {
        return "é Manhã :)!"
    }
}
console.log(turno(-1))