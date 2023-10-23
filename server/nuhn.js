const checkCreditCard = (data) => {
    data = data.trim();
    data  = data.replaceAll(" ",'');
    if(data.length < 8)return false;
    const arr = [];

    // converting string to array
    for (var i = 0; i < data.length; i++) {
        arr[i] = data[i] - '0';
        if (isNaN(arr[i])) return false;
    }
    
    // implementing nuhn algorithm
    for (var i = arr.length - 2; i >= 0; i = i - 2) {
        if ((arr[i] * 2) > 9) {
            arr[i] = (arr[i] * 2) % 10 + 1;
        } else {
            arr[i] = arr[i] * 2;
        }
    }
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        result += arr[i];
    }

    // checking the results 
    if (result % 10 === 0) {
        return true;
    }
    else {
        return false;
    }

}
module.exports = checkCreditCard;