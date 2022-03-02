/* Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
cid is a 2D array listing available currency.
The checkCashRegister() function should always return an object with a status key and a change key.
Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
] */


function checkCashRegister(price, cash, cid) {
    let changeArray = [];
 
    let rest = cash - price;
    let sumInRegister = 0;
    const CASH_ARRAY = {
        "PENNY": .01,
        "NICKEL": .05,
        "DIME": .10,
        "QUARTER": .25,
        "ONE": 1.00,
        "FIVE": 5.00,
        "TEN": 10.00,
        "TWENTY": 20.00,
        "ONE HUNDRED": 100.00
    };
    for (let element of cid) {
        sumInRegister += element[1];
    }

    if (sumInRegister < rest) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (sumInRegister === rest) {
        return { status: "CLOSED", change: cid };
    } else  {
      let register = cid.reverse();
        for (let element of register) {
            if (element[1] === 0) continue;
            if (Math.floor(rest / CASH_ARRAY[element[0]]) === 0) continue;
            let tmp = [element[0], 0];
            while (rest >= CASH_ARRAY[element[0]] && element[1] > 0) {
                tmp[1] += CASH_ARRAY[element[0]];
                element[1] -= CASH_ARRAY[element[0]];
                rest = (parseFloat(rest) - parseFloat(CASH_ARRAY[element[0]])).toFixed(2);        
            }
            changeArray.push(tmp);        
      }
    }
    if (rest > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] }
    }
    return {status: "OPEN", change: changeArray}
 }
    


console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

