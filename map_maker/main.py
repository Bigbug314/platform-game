from tkinter import *
from tkinter import font




itemsName= [
    "Platform1",
    "Platform2",
    "Moving platform1",
    "Moving platform2",
    "Bouncy platform",
    "Spike",
    "Checkpoint"
]


root = Tk()
root.geometry("800x500")
root.title("Map maker")

canvas = Canvas(root, width=800, height=500, bg="snow2")
canvas.pack()

variable = StringVar(root)
variable.set(itemsName[0])
dropDown = OptionMenu(canvas, variable, *itemsName)
dropDown.config(font=("Calibri",15))
dropDown.place(x=600, y=0)

root.mainloop()
