from flask import Flask,request

app = Flask(__name__)
# class object

# get method
@app.route("/")
# get or read
def index():
    return "Hello Welcome"
@app.route("/home")
# get or read
def home():
    return "Hello Welcome to Home"
@app.route("/about")
def about():
    return "This is About Page"
@app.route("/html")
def html():
    return "<h1>Welcome to HTML</h1>"

@app.route("/person/<name>")
def person(name):
    return f"Welcome{name}"

@app.route("/square/<int:num>")
def square(num):
    return num*num

@app.route("/marks/<name>/<int:mark>")
def marks(name,mark):
    if mark>=40:
        return f"{name}Passed"
    else:
        return f"{name}Failed"

# Get method
students = [
    {"id":1,"name":"Ravi"},
    {"id":2,"name":"Raja"},
]

@app.route("/students",methods=["GET"])
def getStudents():
    return students

@app.route("/addStudent",methods=["POST"])
def addStudent():
    data = request.json
    students.append(data)
    return{
        "mesaage":"Student Added Succesfully",
        "Student":data
    }

# put
# edit or update
@app.route("/student/<int:id>", methods=["PUT"])
def updateStudent(id):
    data = request.json
    for stu in students:
        if stu[id]==id:
            stu["name"] = data["name"]
            return{
                "message":"Update sucessfully",
                "Student":stu
            }

    return{"Message":"Unable to update student"}

if __name__ =="__main__":
    app.run(debug=True)