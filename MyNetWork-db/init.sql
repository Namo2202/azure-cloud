CREATE TABLE utilisateurs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pseudo VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    urlImgProfil VARCHAR(255) NOT NULL
);

INSERT INTO utilisateurs (pseudo, email, password, urlImgProfil) VALUES
    ('Alain', 'alain@yahoo.fr', '123456', 'https://thispersondoesnotexist.com/image'),
    ('Béatrice', 'bea@yahoo.fr', '123456', 'https://thispersondoesnotexist.com/image'),
    ('nafise', 'nafise@test.com', 'nafise123', 'https://thispersondoesnotexist.com/image'),

CREATE TABLE articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pseudo VARCHAR(255) NOT NULL,
    contenu TEXT NOT NULL,
    urlImgArticle VARCHAR(255) NOT NULL,
    `like` INT DEFAULT 0,
    urlImgProfil VARCHAR(255) NOT NULL,
    date BIGINT NOT NULL,
    commentaires TEXT,
    FOREIGN KEY (pseudo) REFERENCES utilisateurs(pseudo)
);


INSERT INTO articles (pseudo, contenu, urlImgArticle, `like`, urlImgProfil, date, commentaires) VALUES
    ('Alain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', 'https://source.unsplash.com/random/1080x720', 5, 'https://thispersondoesnotexist.com/image', 1649427945051, '[{"id": 1, "contenu": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...", "pseudo": "Béatrice", "dt": 1649277945051}, {"id": 2, "contenu": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...", "pseudo": "Julien", "dt": 1649277945051}, {"id": 3, "contenu": "test ajout commentaire -04", "pseudo": "nafise", "dt": 1670762603520}]'),
    ('Alain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', 'https://source.unsplash.com/random/1080x720', 5, 'https://thispersondoesnotexist.com/image', 1649427945051, '[{"id": 1, "contenu": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...", "pseudo": "Béatrice", "dt": 1649277945051}]'),
   
