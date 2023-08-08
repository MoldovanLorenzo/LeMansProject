from flask import Flask,request,jsonify
from flask_cors import CORS


app=Flask(__name__)
CORS(app)

votes={'Cadiliac':1,'Prosche':1,'Toyota':0,'Ferrari':2}
ips_that_voted=list()
@app.route('/score_calculator',methods=['GET'])
def score_calculator():
    
    if request.method=='GET':
       return jsonify(votes)

@app.route('/add_scores',methods=['POST'])
def add_score():
    if request.method=='POST':
        choice=request.get_json()
        if(choice['user_ip'] not in ips_that_voted):

            votes[choice['update_field']]+=1
            ips_that_voted.append(choice['user_ip'])
        
        return jsonify({"resonse":"ok"})
if __name__ == '__main__':
    app.run(debug=True)
