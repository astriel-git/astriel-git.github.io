
for (let i = 1; i<=100 ; i++) {
    let change = "";
    if (i % 3 == 0) change += "Fizz";
    if (i % 5 == 0) change += "Buzz";
    console.log(change || i)
}