from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate_rent():
    # Get data from the frontend
    data = request.get_json()
    
    rent = int(data['rent'])
    food = int(data['food'])
    electricity_units = int(data['electricity_units'])
    charge_per_unit = int(data['charge_per_unit'])
    persons = int(data['persons'])

    # Calculate total electricity bill
    total_electricity_bill = electricity_units * charge_per_unit

    # Calculate the total cost and per person share
    total_cost = rent + food + total_electricity_bill
    cost_per_person = total_cost / persons

    # Send back the result as JSON
    return jsonify({'result': round(cost_per_person, 2)})

if __name__ == '__main__':
    app.run(debug=True)
