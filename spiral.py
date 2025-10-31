import turtle

t=turtle.Turtle(); t.speed(-0)

colors=["red", "yellow", "green", "blue", "indigo", "violet"]

for i in range(360):
  t.pencolor(colors[i%6])
  t.forward(i * 1)
  t.right(60.5)
  t.width(width=25)

turtle.done()