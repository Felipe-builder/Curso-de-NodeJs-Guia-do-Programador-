INSERT INTO usuarios(nome, email, idade) VALUES(
    "Paulino Santos",
    "paulino_santos12@hotmail.com",
    34
);

DELETE FROM usuarios WHERE idade=34;

UPDATE usuarios SET nome = "Rodrigo Lacerda" WHERE nome="Paulino Santos";