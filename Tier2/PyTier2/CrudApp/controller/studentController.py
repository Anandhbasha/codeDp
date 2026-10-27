# from flask import request,render_template
# from dataBase.db import cursor,connection

# def getStudents():
#     cursor.execute("select * From STUDENTS")
#     stu =  cursor.fetchall()
#     return render_template(
#         "index.html",
#         stu=stu
#     )

# def addStudent():
#     data = request.get_json()
#     sql = """INSERT INTO STUDENTS(STUDENT_NAME,COURSENAME,AGE) VALUES (%s,%s,%s)"""
#     values = (data["STUDENT_NAME"],data["COURSENAME"],data["AGE"])
#     cursor.execute(sql,values)
#     connection.commit()
#     return {
#         "message":"Student Added sucessfully"
#     }

# def getStudent(id):
#     sql = """select * from STUDENTS where id=%s"""
#     value = id
#     cursor.execute(sql,value)
#     return cursor.fetchone()

# def updateStudent(id):
#     data = request.json
#     sql = """Updtae STUDENTS set COURSENAME=%s,AGE=%s where id = %s"""
#     cursor.execute(sql,data["COURSENAME"],data["AGE"],id)
#     connection.commit()
#     return { "message":"Updated succesfully"}

# def deleteStudent(id):
#     cursor.execute("Delte From STUDENTS where id=%s",(id))
#     connection.commit()
#     return{
#         "message":"Student Removed Sucessfully"
#     }




from flask import request,render_template,redirect,url_for
from dataBase.db import cursor,connection

def getStudents():
    cursor.execute("select * From STUDENTS")
    stu =  cursor.fetchall()
    return render_template(
        "index.html",
        stu=stu
    )

def addStudent():
    studentName = request.form["studentName"]
    courseName = request.form["courseName"]
    StudentAge = request.form["StudentAge"]
    sql = """INSERT INTO STUDENTS(STUDENT_NAME,COURSENAME,AGE) VALUES (%s,%s,%s)"""
    values = (studentName,courseName,StudentAge)
    cursor.execute(sql,values)
    connection.commit()
    return redirect(url_for("students.getAll"))


def getStudent(id):
    sql = """select * from STUDENTS where id=%s"""
    value = id
    cursor.execute(sql,value)
    return cursor.fetchone()

def editStudent(id):
    sql = """select * from STUDENTS where id=%s"""
    student = cursor.execute(sql,(id,))
    student =  cursor.fetchone()
    return render_template("edit.html",student=student)

def updateStudent(id):
    studentName = request.form["studentName"]
    studentCourse = request.form["studentCourse"]
    studentAge = request.form["studentAge"]
    sql = """Update STUDENTS set studentName = %s COURSENAME=%s,AGE=%s where id = %s"""
    cursor.execute(sql,studentName,studentCourse,studentAge,id)
    connection.commit()
    return redirect(url_for("students.getAll"))


def deleteStudent(id):
    cursor.execute("Delete From STUDENTS where id=%s",(id))
    connection.commit()
    if request.method == "GET": 
        return redirect("/") 
    