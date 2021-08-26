const capitalizeLetters = (str) => {
    if(typeof str !== "string") {
        throw new Error("Tipo de dato no valido")
    } else {
        return str.replace(/\w\S*/g, (word) => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          })
    }
}

module.exports = {
    capitalizeLetters
}