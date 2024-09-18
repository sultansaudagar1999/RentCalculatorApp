function calculateRent() {
    // Get input values
    const rent = document.getElementById('rent').value;
    const food = document.getElementById('food').value;
    const electricity_units = document.getElementById('electricity_units').value;
    const charge_per_unit = document.getElementById('charge_per_unit').value;
    const persons = document.getElementById('persons').value;

    // Check if all inputs are valid
    if (!rent || !food || !electricity_units || !charge_per_unit || !persons) {
        alert("Please fill all fields with valid numbers");
        return;
    }

    // Prepare data to send to backend
    const data = {
        rent: rent,
        food: food,
        electricity_units: electricity_units,
        charge_per_unit: charge_per_unit,
        persons: persons
    };

    // Send data to backend and receive response
    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        // Update result in the HTML
        document.getElementById('result').innerHTML = `Each person will pay: ₹ ${data.result}`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
