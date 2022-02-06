const calculate = () => {
  let price = Number(document.getElementById("price").value);
  let money = Number(document.querySelector("#money").value);

  let answer = document.querySelector("#answer");

  let amount = Math.floor(money / price);

  let text;
  amount >= 10
    ? (text = `You could get about ${amount} liters, good, now you can escape`)
    : (text = `You could get about ${amount} liters, oops, you have to stay here`);

  answer.textContent = text;

  console.log("price", price);
  console.log("money", money);
  console.log("amount", amount);
};
