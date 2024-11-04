create database Biblioteca;
show databases;
use filme;

create table Livros (
  id int primary key,
  titulo varchar(100) not null,
  ano_publicacao year not null,
  id_autor int,
  id_categoria int,
  foreign key (id_autor) references Autores(id),
  foreign key (id_categoria) references Categorias(id)
);

create table Autores (
  id int primary key,
  nome varchar(100) not null,
  nacionalidade varchar(50) not null
);

create table Categorias (
  id int primary key,
  descricao varchar(50) not null
);

alter table Livros add preco decimal(5,2);
alter table Categorias add quantidade int;

insert into Autores values
(1, 'J.K. Rowling', 'Britânica'),
(2, 'George Orwell', 'Britânico'),
(3, 'Haruki Murakami', 'Japonês');

insert into Categorias values
(1, 'Ficção', 10),
(2, 'Não-ficção', 5),
(3, 'Fantasia', 7);

insert into Livros values
(1, 'Harry Potter e a Pedra Filosofal', 1997, 1, 3, 29.90),
(2, '1984', 1949, 2, 2, 39.90),
(3, 'Kafka à Beira-Mar', 2002, 3, 1, 34.90);

insert into Autores values
(4, 'Gabriel García Márquez', 'Colombiano');

insert into Livros values
(4, 'Cem Anos de Solidão', 1967, 4, 1, 49.90);

update Categorias set descricao = "Romance" where id = 1;
update Livros set preco = preco * 1.10 where ano_publicacao < 2000;
update Autores set nome = "Gabriel García Márquez" where id = 4;

delete from Livros where ano_publicacao < 1950;
delete from Categorias where quantidade < 5;

alter table Categorias drop column quantidade;
