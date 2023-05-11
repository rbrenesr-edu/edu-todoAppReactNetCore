USE ToDO

CREATE TABLE Tarea(
	IdTarea int primary key identity(1,1),
	Descripcion varchar(150),
	FechaRegistro datetime default getdate()
)


insert into Tarea(Descripcion) values ('Descripcion tarea 01')
insert into Tarea(Descripcion) values ('Descripcion tarea 02')