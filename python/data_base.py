import sqlite3

alumnos = [{'id': 1, 'Nombre': 'Lautaro', 'Apellido': 'Martinez'},
           {'id': 2, 'Nombre':'Lionel', 'Apellido': 'Messi'},
           {'id': 3, 'Nombre':'Angel', 'Apellido': 'Di Maria'},
           {'id': 4, 'Nombre':'Enzo', 'Apellido': 'Fernandez'},
           {'id': 5, 'Nombre':'Cristian', 'Apellido': 'Romero'},
           {'id': 6, 'Nombre':'Nicolas', 'Apellido': 'Otamendi'},
           {'id': 7, 'Nombre':'Julian', 'Apellido': 'Alvarez'},
           {'id': 8, 'Nombre':'Nicolas', 'Apellido': 'Tagliafico'}]

def insert_student(iden, nombre, apellido):
    conn = sqlite3.connect('miaplicacion.db')
    cursor = conn.cursor()

    query = 'INSERT INTO Alumnos(id, Nombre, Apellido) VALUES(?, ?, ?)'
    cursor.execute(query, (iden, nombre, apellido))
    conn.commit()


    cursor.close()
    conn.close()

for alumno in alumnos:
    insert_student(alumno['id'], alumno['Nombre'], alumno['Apellido'])


conn = sqlite3.connect('miaplicacion.db')
cursor = conn.cursor()
cursor.execute("SELECT * FROM Alumnos WHERE Nombre= 'Nicolas'")
print(cursor.fetchall())
cursor.close()
conn.close()