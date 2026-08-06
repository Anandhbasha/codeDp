import pymysql

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="123456",
    database="flaskCruds",
    cursorclass=pymysql.cursors.DictCursor
)

cursor = connection.cursor()

cursor.execute("CREATE DATABASE IF NOT EXISTS flaskCruds")
connection.select_db("flaskCruds")
cursor.execute("""
    CREATE TABLE IF NOT EXISTS STUDENTS(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    STUDENT_NAME VARCHAR(100),
    COURSENAME VARCHAR(50),
    AGE INT
)
""")

connection.commit()
print("Database and Table Ready")