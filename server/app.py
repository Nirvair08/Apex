from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route('/api/health')
def health():
    return {'status': 'Apex API is running'}

if __name__ == '__main__':
    app.run(debug=True, port=5000)