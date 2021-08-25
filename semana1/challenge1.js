const reverseString = (str) => {
    let type = typeof str;
    let long = str.length;

    if(type !== 'string') {
        throw new Error('Tipo de dato o longitud no admitidos.')
    }else if(long > 15 || long <= 1) {
        throw new Error('Tipo de dato o longitud no admitidos.')
    } else{
        return str.split('').reverse().join('')
    }
}

module.exports = {
    reverseString
}