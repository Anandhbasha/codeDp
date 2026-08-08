from flask import Blueprint
from controller.studentController import *

students = Blueprint("students",__name__)

@students.route("/",methods=['GET'])
def getAll():
    return getStudents()

@students.route("/addPage",methods=["GET"])
def addPage():
    return render_template("add.html")

@students.route("/add",methods=['POST'])
def add_Student():
    return addStudent()

@students.route("/stu/<int:id>",methods=["GET"])
def getOne(id):
    return getStudent(id)

@students.route("/edit/<int:id>",methods=["GET"])
def edit(id):
    return editStudent(id)

@students.route("/stuUpdate/<int:id>",methods=["PUT"])
def update(id):
    return updateStudent(id)
@students.route("/delStu/<int:id>",methods=["DELETE","GET"])
def deleteStu(id):
    return deleteStudent(id)