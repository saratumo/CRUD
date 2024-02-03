let usName = document.getElementById('usName');
let usPrice = document.getElementById('usPrice');
let usCode = document.getElementById('usCode');

function getVal() {
    fetch("/addName", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: usName.value, price: usPrice.value, code: usCode.value })
    })
}
