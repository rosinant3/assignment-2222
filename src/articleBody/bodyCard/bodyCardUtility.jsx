

export const generateStarsArray = (number) => {

    const arr = [];

    while (arr.length < 5) {

        if (number > 1) {
            arr.push(1);
        } else if (number < 0) {
            arr.push(0);
        } else {
            arr.push(Number(number.toFixed(2)));
        }
        
        number = number - 1;
    }

    return arr;
};