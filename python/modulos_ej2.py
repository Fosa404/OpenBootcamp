import time


def time_to_go_home():
    #obteniendo la hora en la tupla

    hora = time.localtime()[3]

    #obteniendo los minutos en la tupla

    minutos = time.localtime()[4]

    if hora >= 19: # Si son mas de las 19 hs es tiempo de irse a casa
        
        print('Es hora de irse a casa')

    elif hora == 18: #Si son mas de las 18 hs solo hay que calcular los minutos para irse
        
        dif_minutos = 60 - minutos
        print('Faltan {} minutos para irse'.format(dif_minutos))
        
    else:
        #Si minutos es > 0, a la hora hay que restarle uno porq en realidad
        # faltaria menos de lo que calculamos con la diferencia de horas
        if minutos > 0: 
            dif_hora = 19 - hora - 1
            dif_minutos = 60 - minutos
            print(f'Faltan {dif_hora} horas y {dif_minutos} minutos para irse ')
        else:
            # Si minutos es = 0 entonces solo
            #calculamos la diferencia justa de horas que faltan para las 19
            dif_hora = 19 - hora    
            print(f'Faltan {dif_hora} horas para irse')

time_to_go_home()