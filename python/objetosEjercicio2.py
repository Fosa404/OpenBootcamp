class Alumno:
    def __init__(self, Nombre, Nota):

        self.Nombre = Nombre
        self.Nota = Nota
    
    def mostrar_atr(self):
        print(f'Nombre: {self.Nombre}')
        print(f'Nota: {self.Nota}')

    def aprobado (self):
        if self.Nota < 6:
            print('Tu nota es ',self.Nota,', no has aprobado')
        else:
            print(f'Tu nota es ',self.Nota,', has aprobado')


alumno1 = Alumno('Pedro', 8)
alumno1.mostrar_atr()
alumno1.aprobado()

alumno2 = Alumno('Maria', 5)
alumno2.mostrar_atr()
alumno2.aprobado()

