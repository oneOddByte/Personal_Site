import tkinter as tk

def add():
    num1 = float(entry1.get())
    num2 = float(entry2.get())
    result_label.config(text=f"Result: {num1 + num2}")

# Create the main window
root = tk.Tk()
root.title("Simple Calculator")

# Create UI elements
entry1 = tk.Entry(root)
entry2 = tk.Entry(root)
add_button = tk.Button(root, text="+", command=add)
result_label = tk.Label(root, text="Result: ")

# Arrange elements in the window
entry1.pack()
entry2.pack()
add_button.pack()
result_label.pack()

# Run the application
root.mainloop()

