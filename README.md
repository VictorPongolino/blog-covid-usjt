# blog-covid-usjt
Um Projeto Universitário de um blog que tem como objetivo fornecer informações cruciais para o combate do novo corona vírus.

### Instalação

A aplicação utiliza o nodejs acompanhado do MYsql para funcionar.

#### .ENV

- Copie o sample.env para .env e edite as chaves.
- Na chave DB_ use as configurações idênticas a de seu banco. (próximo passo)
- Na chave SECRET use uma chave aleatória para a proteção das sessões das requests.

#### MYSQL

Configure um banco de dados MYSQL ou rode em um ambiente docker:

```
version: '3.3'
services:
  db:
    image: mysql:5.7
    restart: always
    environment:
      MYSQL_DATABASE: 'banco_de_dados'
      MYSQL_PASSWORD: 'senha'
      MYSQL_ROOT_PASSWORD: 'senha'
    ports:
      - '3306:3306'
    expose:
      - '3306'
    volumes:
      - my-db:/var/lib/mysql
volumes:
  my-db:
```

#### NODEJS

No seu terminal, acesse o diretório da aplicação e use **node app.js**
