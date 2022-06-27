# Projeto Test

Desenvolvimento de dois CRUDS, um de usuários e outro de produtos, junto com um envio de email para usuários que se cadastraram.

## Instalação

Clone o repósitório: https://github.com/RafVFG/test.git

Instale as dependências:
``` bash 
$ yarn 
```

Preencha as variáveis de ambiente dentro do .env

Execute a aplicação em modo de desenvolvimento: 
``` bash
$ yarn dev
```

## Funcionalidades

### Criação de um produto
http://localhost:3000/api/create-product

``` bash
#Exemplo de body
{
	"name": "pessego",
	"value": "78",
	"idUserCreate": "1",
	"idCompany": "2"	
}
```

### Busca pelo produto
http://localhost:3000/api/read-product?idCompany=1&idUserCreate=1

Os filtros são enviados pela rota (query params), caso não tenha um filtro de busca todos os produtos são listados

### Atulização de um produto
http://localhost:3000/api/update-product/1

O id é passado como parâmetro na rota ("update-product/:id") 

``` bash
#Exemplo de body
{
	"name": "pera",
	"value": "80"
}
```

### Exclusão de um produto
http://localhost:3000/api/delete-product/2

O produto é apagado de acordo com o id que é passado na rota

### Criação de um usuário
http://localhost:3000/api/create-user

Nomes repetidos só podem ocorrer dentro da mesma empresa

``` bash
#Exemplo de body
{
	"name": "rafael",
	"email": "rafaelvinicius@gmail.com",
	"idCompany": 1
}
```

### Busca pelo usuário
http://localhost:3000/api/read-user/1

A busca é feita de acordo com o id selecionado


### Atulização de um usuário
http://localhost:3000/api/update-user/1

O id é passado como parâmetro na rota ("update-user/:id") 

``` bash
#Exemplo de body
{
	"name": "pera",
	"value": "80"
}
```

### Exclusão do usuário
http://localhost:3000/api/delete-user/2

O usuário é apagado de acordo com o id que é passado na rota
