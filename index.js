
const currenyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");

const currenySecondEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");

const exchangeRateEl = document.getElementById("exchange-rate");

updateRate();

function updateRate(){
    const currency = "";
    fetch(`https://v6.exchangerate-api.com/v6/636bbc0d81076e2615e2f9d3/latest/${currenyFirstEl.value}`)
    .then((res) => res.json())
    .then((data)=>{
        const rate = data.conversion_rates[currenySecondEl.value];
        console.log(rate);
        exchangeRateEl.innerText = `1 ${currenyFirstEl.value} = ${rate + " " + currenySecondEl.value}`;
        worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
    });
}

currenyFirstEl.addEventListener("change", updateRate);

currenySecondEl.addEventListener("change", updateRate);

worthFirstEl.addEventListener("input", updateRate);

