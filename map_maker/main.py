from tkinter import *
from tkinter import font




root = Tk()
root.geometry("800x500")
root.title("Map maker")

variable = StringVar(root)
variable.set("one")
dropDown = OptionMenu(root, variable, "one", "two", "three")
dropDown.config(font=("Calibri",20))
dropDown.pack()

root.mainloop()
