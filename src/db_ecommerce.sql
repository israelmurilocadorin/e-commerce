
-- Cadastro clientes
USE db_ecommerce;

CREATE TABLE IF NOT EXISTS Clientes(
    ID int NOT NULL AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(50) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    cpf CHAR(11) NOT NULL,
    endereco VARCHAR(50) NOT NULL,
    PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS Produtos(
    ID int NOT NULL AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    descricao TEXT,
    preco FLOAT NOT NULL,
    base64_foto_1 TEXT NOT NULL,
    base64_foto_2 TEXT NOT NULL,
    base64_foto_3 TEXT NOT NULL,
    PRIMARY KEY (ID)
);
