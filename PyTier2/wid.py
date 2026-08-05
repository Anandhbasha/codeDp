#%%#
import ipywidgets as widgets
# pip install ipywidgets
from IPython.display import display
label = widgets.Label("Welcome to Python Widgets")
display(label)

button = widgets.Button(description="Click Me")
def clickEvent():
    print("buttonClicked")
button.on_click(clickEvent)
display(button)

text = widgets.Text(description="Name:")
display(text)

slider = widgets.IntSlider(
    value=10,min=0,max=100,
    description = "Age"
)
display(slider)
# %%
