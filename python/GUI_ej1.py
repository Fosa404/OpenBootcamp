from tkinter import *


def selection():
    if option.get() == 'Rojo':
        text.config(text= option.get(), fg='Red')
    elif option.get() == 'Amarillo':
        text.config(text= option.get(), fg='Yellow')
    else:
        text.config(text= option.get(), fg='green')

def Reset(event):
    option.set(None)
    text.config(text='')


window = Tk()
option = StringVar()
option.set(None)

option1 = Radiobutton(window, text = 'Rojo', value = 'Rojo', variable = option, command = selection )
option1.pack(anchor=W)

option2 = Radiobutton(window, text = 'Amarillo', value = 'Amarillo', variable = option, command = selection )
option2.pack(anchor=W)

option2 = Radiobutton(window, text = 'Verde', value = 'Verde', variable = option, command = selection )
option2.pack(anchor=W)

text = Label(window, bg='black')
text.pack(anchor=E, ipadx=80, ipady=80)

button = Button(window, text='Reset', bg='blue', fg='white')
button.bind('<Button-1>', Reset)
button.pack(anchor=SW)

window.mainloop()