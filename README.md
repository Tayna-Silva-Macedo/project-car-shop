# Bem-vindo ao Projeto Car Shop!

Este é um projeto da [Trybe](https://www.betrybe.com/) que foi desenvolvido no módulo de Back-end.
O Car Shop trata-se de uma API com CRUD (Create, Read, Update e Delete) para gerenciar uma concessionária de veículos, possibilitando criar, ler, atualizar e deletar motos e carros em um banco de dados ***MongoDB*** através do framework ***Mongoose***.
Neste projeto buscou-se seguir todas as diretrizes dos princípios ***SOLID*** e do paradigma de programação ***POO*** (Programação Orientada a Objetos).

## Tecnologias utilizadas

Em seu desenvolvimento foi utilizada linguagem ***TypeScript*** para escrever os códigos e ***Node.js*** juntamente com o framework ***Express*** para fornecer toda a estrutura que possibilitou a construção dos endpoints da aplicação. 

Fora isso, foi utilizado o ODM ***Mongoose***, que é o responsável por toda a abstração de consultas e manipulações do banco de dados ***MongoDB***.

Além disso, foram escritos testes unitários testando a camada de serviço, para isso utilizou-se ***Mocha*** e ***Chai*** para estruturar os testes e fazer as asserções e o ***Sinon*** para mockar as funções, não permitindo que os testes tivessem acesso ao banco de dados.

## O que foi desenvolvido

  - Banco de dados MongoDB com duas collections, uma para carros e uma para motos; 
  - Endpoints que lêem e escrevem em um banco de dados MongoDB;
  - Divisão da aplicação em camadas (arquitetura MSC), o que permite uma maior organização do código e maior facilidade de manutenção;
  - Testes unitários, que são mais rápidos de serem executados e podem nos dar mais segurança na hora de refatorar o código, sem correr o risco de quebrar a aplicação.

## Como rodar o projeto na sua máquina utilizando o Docker:

1. Navegue até o local onde deseja clonar o repositório e utilize o **git clone**:
```
git clone git@github.com:Tayna-Silva-Macedo/project-car-shop.git
```

2. Acesse o diretório do projeto **project-car-shop**:
```
cd project-car-shop
```

3. Suba o container Docker para rodar os serviços utilizando o comando:
```
docker-compose up -d
```

4. Acesse o terminal do container car_shop:
```
docker exec -it car_shop bash
```

4. Instale todas as dependências necessárias e por fim, inicie a aplicação usando o comando:
```
npm install && npm run dev
```

> ℹ️ Ao subir a aplicação, o serviço node estará rodando na port 3001 da sua máquina e o banco de dados MongoDB estará rodando na porta 27017.

5. Para rodar os testes unitários e verificar sua cobertura utilize o seguinte comando:

```
npm run test:coverage
```

## Endpoints da API:

#### Carros

|Método  |Funcionalidade                                        |URL                                          |
|:------:|:----------------------------------------------------:|:-------------------------------------------:|
|`POST`  |Cadastra um novo carro e retorna todos os seus dados  |http://localhost:3001/cars                   |
|`GET`   |Retorna todos os carros cadastrados                   |http://localhost:3001/cars                   |
|`GET`   |Retorna um carro pelo seu id                          |http://localhost:3001/cars/:id               |
|`PUT`   |Atualiza um carro pelo seu id                         |http://localhost:3001/cars/:id               |
|`DELETE`|Deleta um carro pelo seu id                           |http://localhost:3001/cars/:id               |

Na requisição `POST`, é necessário informar um JSON no seguinte formato:

```
{
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
}
```
Na requisição `PUT`, é necessário informar um JSON no seguinte formato:

```
{
  "model": "Marea",
  "year": 1992,
  "color": "Red",
  "status": true,
  "buyValue": 12.000,
  "doorsQty": 2,
  "seatsQty": 5
}
```

#### Motos

|Método  |Funcionalidade                                        |URL                                          |
|:------:|:----------------------------------------------------:|:-------------------------------------------:|
|`POST`  |Cadastra uma nova moto e retorna todos os seus dados  |http://localhost:3001/motorcycles            |
|`GET`   |Retorna todas as motos cadastradas                    |http://localhost:3001/motorcycles            |
|`GET`   |Retorna uma moto pelo seu id                          |http://localhost:3001/motorcycles/:id        |
|`PUT`   |Atualiza uma moto pelo seu id                         |http://localhost:3001/motorcycles/:id        |
|`DELETE`|Deleta uma moto pelo seu id                           |http://localhost:3001/motorcycles/:id        |

Na requisição `POST`, é necessário informar um JSON no seguinte formato:

```
{
  "model": "Honda Cb 600f Hornet",
  "year": 2005,
  "color": "Yellow",
  "status": true,
  "buyValue": 30.000,
  "category": "Street",
  "engineCapacity": 600
}
```
Na requisição `PUT`, é necessário informar um JSON no seguinte formato:

```
{
  "model": "Honda Cb 600f Hornet",
  "year": 2014,
  "color": "Red",
  "status": true,
  "buyValue": 45.000,
  "category": "Street",
  "engineCapacity": 600
}
```
