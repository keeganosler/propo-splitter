var amount = document.getElementById('amount');
amount.addEventListener("input", computePortions);

var income1 = document.getElementById('income1');
var income2 = document.getElementById('income2');

income1.addEventListener("input", computePortions)
income2.addEventListener("input", computePortions)

function computePortions() {
    if (amount.value && income1.value && income2.value) {
        let total = (+income1.value) + (+income2.value);
        document.getElementById('portion1').innerHTML = '$' + ((income1.value / total) * amount.value).toFixed(2).toString();
        document.getElementById('portion2').innerHTML = '$' + ((income2.value / total) * amount.value).toFixed(2).toString();        
    }
}