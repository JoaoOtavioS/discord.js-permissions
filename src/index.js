function translate(text) {
    let result = text;
    require('./permissions').forEach(function (neW, old) {
        result = result.replace(old, neW);
    })
    return result;
}

module.exports = {
    translate
}