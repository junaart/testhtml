t=Number(prompt("Введите температуру на улице"))

if (t<-20)
    document.write("Мороз")
else
    if ((t>=-20) && (t<0))
	document.write("Прохладно")
else
    if ((t>=0) &&(t<20))
	document.write("Нормально")
else document.write("Жарко")

