import turtle

t=turtle.Turtle(); t.speed(-0)

colors=["red", "yellow", "green", "blue", "indigo", "violet"]

for i in range(360):
  t.pencolor(colors[i%6])
  t.forward(i * 0.5)
  t.right(61)
  t.width(width=5)

turtle.done()