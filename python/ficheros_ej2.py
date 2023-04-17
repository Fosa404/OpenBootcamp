import pickle

class vehículo():
    def __init__(self, puertas, ruedas):
        self.puertas = puertas
        self.ruedas = ruedas


car = vehículo(5, 4)

f = open('data.bin', 'wb')
pickle.dump(car, f)
f.close()

f = open('data.bin', 'rb')
car2 = pickle.load(f)
f.close()

print(car2.ruedas)

