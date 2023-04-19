import tkinter
from tkinter import ttk

window = tkinter.Tk()

lista = ['Home', 'Menu', 'User', 'Settings']
list_show = tkinter.StringVar(value=lista)
listbox = tkinter.Listbox(window, listvariable=list_show)
listbox.pack()

label = tkinter.Label(window, text='Openbootcamp', bg='#047af3', fg='white')
label.pack(expand=50)
window.mainloop()