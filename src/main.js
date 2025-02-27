function calculateFuel() {
    const distanceInput = document.getElementById("distance");
    const consumptionInput = document.getElementById("consumption");
    const resultElement = document.getElementById("result");

    const distance = parseFloat(distanceInput.value.trim());
    const consumption = parseFloat(consumptionInput.value.trim());

    if (!distanceInput.value.trim() || !consumptionInput.value.trim()) {
        resultElement.innerText = "Lūdzu, aizpildi visus laukus!";
        return;
    }

    if (isNaN(distance) || isNaN(consumption) || distance <= 0 || consumption <= 0) {
        resultElement.innerText = "Lūdzu, ievadiet pozitīvus skaitļus!";
        return;
    }

    const fuelUsed = (distance * consumption) / 100;
    resultElement.innerText = `Tev būs nepieciešami ${fuelUsed.toFixed(2).replace(/\.00$/, "")} litri degvielas.`;
}

function getCatFact() {
    const catFactElement = document.getElementById("cat-fact");

    fetch("https://catfact.ninja/fact")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Servera kļūda: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            catFactElement.innerText = data.fact || "Nevarēja ielādēt jaunu faktu.";
        })
        .catch(error => {
            console.error("Kļūda:", error);
            catFactElement.innerText = "Nevarēja ielādēt kaķa faktus. Pārbaudiet interneta savienojumu.";
        });
}
