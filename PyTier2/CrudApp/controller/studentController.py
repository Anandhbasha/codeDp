from flask import request
from dataBase.db import cursor,connection

def getStudents():
    cursor.execute("select * From STUDENTS")
    return cursor.fetchall()

def addStudent():
    data = request.get_json()
    sql = """INSERT INTO STUDENTS(STUDENT_NAME,COURSENAME,AGE) VALUES (%s,%s,%s)"""
    values = (data["STUDENT_NAME"],data["COURSENAME"],data["AGE"])
    cursor.execute(sql,values)
    connection.commit()
    return {
        "message":"Student Added sucessfully"
    }

def getStudent(id):
    sql = """select * from STUDENTS where id=%s"""
    value = id
    cursor.execute(sql,value)
    return cursor.fetchone()