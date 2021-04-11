function areaQuadrado(l){
    return l*l
}
function areaRetangulo(b, h){
    return b * h
}
function areaCirculo(r){
    return parseFloat((Math.PI*(r*r)).toFixed(2)) 
}

module.exports = {
    areaQuadrado,
    areaRetangulo,
    areaCirculo
}