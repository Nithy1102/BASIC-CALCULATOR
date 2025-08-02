from flask import Flask, render_template, request, jsonify

app = Flask(__name__, static_folder='style', template_folder='templates')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    expression = data.get("expression", "")
    try:
        result = eval(expression)
        return jsonify({'result': result})
    except:
        return jsonify({'result': 'Error'}), 400

if __name__ == '__main__':
    app.run(debug=True)
