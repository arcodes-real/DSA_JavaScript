// credit card example
// input = 2300578998750032
// output = *************032


function formatCreditCard(cardNumber){
    // first slice out the last three digits

    const lastDigits = cardNumber.slice(-3);

    const formattedNumber = lastDigits.padStart(cardNumber.length, '*');

    return `${formattedNumber}`;
}

const creditCardNumber = "2300578998750032";

const formattedCard = formatCreditCard(creditCardNumber);

console.log(formattedCard);