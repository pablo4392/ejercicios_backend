const reverseString = (str) => {
    if(typeof str !== 'string') {
        throw new Error('Tipo de dato o longitud no admitidos.')
    }else if(str.length > 15 || str.length <= 1) {
        throw new Error('Tipo de dato o longitud no admitidos.')
    } else{
        return str.split('').reverse().join('')
    }
}

module.exports = {
    reverseString
}