<h1 align="center">
  <br>
  <img src="assets/Star-Wars-logo.png" alt="imagem star wars" width="500">
  <br>
    <br>
        Desafio Star Wars
  <br>
</h1>

## Sumário

1. [Objetivo](#objetivo)
2. [Funcionalidades](#funcionalidades)
3. [Ferramentas](#ferramentas)

---

## Objetivo

Desenvolver uma API que contenha os dados dos planetas da franquia Star Wars. Cada planeta deve ter informações como nome, terreno e clima. E para cada planeta, ter a quantidade de aparições em filmes obtidas pela API pública do Star Wars: http://swapi.dev/api/planets

---

## Funcionalidades

### Adicionar um planeta

- `POST` http://localhost:8000/planetas/

### Listar planetas

- `GET` http://localhost:8000/planetas/

### Buscar por nome

- `GET` http://localhost:8000/planetas/planeta + "/nomedoplaneta"

### Buscar por ID

- `GET` http://localhost:8000/planetas/planeta + "/iddoplaneta"

### Remover planeta

- `DELETE`http://localhost:8000/planetas + "/nomedoplaneta"

---

## Ferramentas

- Node.JS

- MongoDB
