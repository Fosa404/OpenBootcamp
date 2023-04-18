user_data = input('Ingresa una lista de paises separados por coma:\n\n')
paises = sorted(set(user_data.split(', ')))

output = ', '.join(paises)
print(f'\n{output}\n')
