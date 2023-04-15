class Vehiculo:
    color = 'verde'
    ruedas = 4
    puertas = 4


class Coche(Vehiculo):
    velocidad = 200
    cilindrada = 1.6



coche = Coche()

print(coche)