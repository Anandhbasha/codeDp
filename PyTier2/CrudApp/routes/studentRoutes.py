from flask import Blueprint
from controller.studentController import *

students = Blueprint("students",__name__)

@students.route("/",methods=['GET'])
def getAll():
    return getStudents()

@students.route("/add",methods=['POST'])
def add_Student():
    return addStudent()

@students.route("/stu/<int:id>",methods=["GET"])
def getOne(id):
    return getStudent(id)
