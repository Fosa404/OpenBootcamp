anyo = int(input('Introduce un año'))

print(anyo)

def bisiesto():
    if anyo % 4 == 0 and anyo % 100 == 0 and anyo % 400 == 0:
        print('El año es bisiesto')

    else:
        print('El año NO es bisiesto')

bisiesto()