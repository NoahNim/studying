const pairProduct = (numbers, targetProduct) => {
    let previous = {};

    for (let i = 0; i < numbers.length; i++) {
        let compliment = targetProduct / numbers[i];
        if (compliment in previous) {
            return [i, previous[compliment]];
        }
        else {
            previous[numbers[i]] = i;
        }
    }
};

module.exports = {
    pairProduct
};