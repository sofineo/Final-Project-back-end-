# ENDPOINTS
![image](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![image](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

### Introdução

Aplicação para cardápio digital.

API oferece os seguintes serviços:
  - Criação de usuário
  - Autenticação de usuário com TOKEN JWT
  - Criação de prato
  - Upload de imagens
  - Edição de prato
  - Listagem dos pratos com busca por nome ou ingrediente
  - Detalhamento do prato


### Casos de sucesso
#### ![image](https://img.shields.io/badge//users-gray?style=for-the-badge&logo=b&Color=white) 
`POST /users`
###### Body:
```json
{
	"name": "John Doe",
	"email": "johndoe@mail.com",
	"password": "123456"
}
``` 
###### Response: Status code: 201 CREATED

#### ![image](https://img.shields.io/badge//session-100000?style=for-the-badge&logo=b&Color=white) 

`POST /session`
###### Body:
```json
{
	"email": "johndoe@mail.com",
	"password": "123456"
}
``` 
###### Response: Status code: 202 ACCEPTED
```json
{
	"user": {
		"id": 1,
		"name": "John Doe",
		"email": "johndoe@mail.com",
		"password": "$2a$08$BiumDcYQWaZeVUKd9x/bl.o4XrwPa.DQgfzcOCxurhHcmugDQBDj6",
		"admin": 0,
		"created_at": "2023-06-07 18:13:12",
		"updated_at": "2023-06-07 18:13:12"
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6MSwiaWF0IjoxNjg2NzA2ODk1LCJleHAiOjE2ODY3OTMyOTUsInN1YiI6IjEifQ.glGubvwmTMDf8chYznzD06BLTG7z1TKOrM1LCvNO_nM"
}
``` 
#### ![image](https://img.shields.io/badge//dishes-100000?style=for-the-badge&logo=b&Color=white) 


Deve ser possível listar os filmes armazenados no banco de dados. Seguindo as regras de paginação

exemplo de URL: `http://localhost:3000/movies/?sort=price&order=desc&page=2&perPage=3`

###### Resposta: Status code: 200 
```json
{
    "prevPage": "http://localhost:3000/movies?page=1&perPage=3",
    "nextPage": "http://localhost:3000/movies?page=3&perPage=3",
    "count": 14,
    "data": [
        {
            "id": 8,
            "name": "Filme 08",
            "description": null,
            "duration": 88,
            "price": 72
        },
        {
            "id": 4,
            "name": "Filme 04",
            "description": null,
            "duration": 75,
            "price": 72
        },
        {
            "id": 11,
            "name": "Filme 11",
            "description": null,
            "duration": 7,
            "price": 68
        }
    ]
}
```

`PATCH - /movies/:id - FORMATO DA REQUISIÇÃO`

Deve ser possível atualizar um filme pelo id recebido nos parâmetros da rota.
###### Corpo de requisição:
```json
{
    "id": 55,
    "duration": 130,
    "price": 200
}
```

###### Resposta: Status code: 200 
```json
{
    "id": 4,
    "name": "Filme 04",
    "description": null,
    "duration": 130,
    "price": 200
}
```


`DELETE - /movies/:id- FORMATO DA REQUISIÇÃO`
Deleta um filme pelo id recebido nos parâmetros da rota.

###### Status code: 204 NO CONTENT

### Endpoints, Casos de erro

`Nas rotas POST e PATCH /movies`
O nome (name) deve ser único.
Caso seja enviado um nome já registrado, retorna: 
###### Status code: 409 CONFLICT
```json
{
    "message": "Movie already exists."
}
```

`Nas rotas POST e PATCH `
Contam com serialização de dados.
Em caso de erro ao validar os dados,  retorna:
###### Status code: 400 BAD REQUEST
```json
{
    "name": ["Expected string, received number"],
    "duration": ["Expected number, received string"]
 }
```

`Em todas as rotas que recebem id por parâmetro`
 Deve verificar se o id informado existe.
 Caso o filme (movie) não exista,  retorna:
###### Status code: 404 NOT FOUND
```json
{
    "message": "Movie not found"
}
```


