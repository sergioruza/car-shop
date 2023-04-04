# <h1 align="center">🚗 car-shop 🚗</h1>
<fig>
<img src="https://s1.1zoom.me/big0/562/345021-admin.jpg">
</fig>

## Inicialização
Para executar o projeto, utilize as ferramentas descritas na sessão *Ferramentas*.

## Ferramentas
* Docker - Conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional.
```bash

# Faça o clone
$ git clone git@github.com:sergioruza/car-shop.git

# Acesse a pasta
$ cd car-shop

# Instale as dependências local
$ npm install

# Suba os contêineres
$ docker-compose up -d

# Entre no terminal do container
$ docker exec -it car_shop bash

# Instale as dependências no bash
$ npm install

# Inicie o projeto
$ npm run dev
# [nodemon] starting `node .`
# ouvindo porta 300?
```
# car-shop

## Introdução

Este projeto possui o objetivo principal de criar uma API de gerenciamento de veículos e,
com os objetivos gerais de firmar conhecimentos em MongoDB.

## Análise técnica

### Descrição do ambiente técnico

O sistema é composto de uma API com rotas. Linguagem, frameworks e bibliotecas principais:
> Back-End
* **F1** - TypeScript.
* **F2** - Node.
* **F3** - MongoDB.
* **F4** - Mongoose.
* **F5** - express.

### Requisitos Funcionais
Respeitando a proposta, o sistema deverá atender os seguintes requisitos:

* **RF1** - Desenvolver endpoints que estarão conectados ao seu banco de dados seguindo os princípios do REST;
* **RF2** - Rotas:  
                   * post /cars: Cadastra carros;  
                   * get /cars: Lista todos os carros cadastrados;  
                   * get /cars/:id: Busca um carro pelo id;  
                   * put /cars/:id: Atualiza informações de um carro pelo id;  
                   * post /motorcycles: Cadastra motos;  
                   * get /motorcycles: Lista todas as motos cadastradas;  
                   * put /motorcycles/:id: Atualiza informações de uma moto pelo id;  

## Finais
<details>
 <summary><strong>:memo: Objetivos de Aprendizado</strong></summary><br /> 

- Utilizar Node.js;

- Utilizar Mongoose para manipulação no mongoDB;

- Realizar uma aplicação com CRUD;
  
- Aplicar os princípios de Programação Orientada a Objetos;
  
- Aplicar os principios de SOLID;

</details>


