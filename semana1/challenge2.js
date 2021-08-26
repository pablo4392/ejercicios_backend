const reverseInt = (number) => {
    if(typeof number !== 'number') {        
        throw new Error('Tipo de dato no admitido.');
    } else if(number < 0) {
        const positive = number * -1;
        const transform = Number(positive.toString().split('').reverse().join(''));
        return transform * -1;
    }else {
        return Number(number.toString().split('').reverse().join(''))
    }
}

module.exports = {
    reverseInt
}