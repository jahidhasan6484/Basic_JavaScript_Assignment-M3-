// Problem-1
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "Length can't be a negative value!";
    }
    else {
        // 1000 meter = 1 kilometer
        var meter = 1000 * kilometer;
        return meter;
    }
}





// Problem-2
function budgetCalculator(NumberOfwatch, NumberOfphone, NumberOflaptop) {
    /* Price of- 
    watch: 50 
    phone: 100
    laptop: 500 */

    if (NumberOfwatch < 0 || NumberOfphone < 0 || NumberOflaptop < 0) {
        return "Product quantity can't be a negative number!";
    } else {
        var watchCost = NumberOfwatch * 50;
        var phoneCost = NumberOfphone * 100;
        var laptopCost = NumberOflaptop * 500;

        var totalBudget = watchCost + phoneCost + laptopCost;
        return totalBudget;
    }
}




// Problem-3
function hotelCost(numberOfDays) {
    var costOfFirst10 = 0;
    var costOfSecond10 = 0;
    var remainingDays = 0;
    var costOfLastPart = 0;
    var totalCost = 0;

    if (numberOfDays <= 10) {
        costOfFirst10 = 100 * numberOfDays;
        totalCost = costOfFirst10;
    } else if (numberOfDays <= 20) {
        costOfFirst10 = 100 * 10;
        remainingDays = numberOfDays - 10;
        costOfSecond10 = 80 * remainingDays;
        totalCost = costOfFirst10 + costOfSecond10;
    }
    else {
        costOfFirst10 = 100 * 10;
        costOfSecond10 = 80 * 10;
        remainingDays = numberOfDays - 20;
        costOfLastPart = 50 * remainingDays;
        totalCost = costOfFirst10 + costOfSecond10 + costOfLastPart;
    }
    return totalCost;
}




// Problem-4
function megaFriend(namesArray) {
    var maximumLetter = "";

    for (var i = 0; i < namesArray.length; i++) {
        if (maximumLetter.length < namesArray[i].length) {
            maximumLetter = namesArray[i];
        }
    }
    return maximumLetter;
}