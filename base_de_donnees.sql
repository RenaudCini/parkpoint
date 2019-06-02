CREATE TABLE profil_user (
    id_user INT UNSIGNED NOT NULL AUTO_INCREMENT,
    prenom CHAR(15)NOT NULL,
    nom VARCHAR(30) NOT NULL,
    age DATETIME NOT NULL,
    ville VARCHAR(30) NOT NULL,
    img_user VARCHAR(250),
    PRIMARY KEY (id_user)
);

CREATE TABLE place(
    id_place INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_user INT REFERENCES profil_user(id_user),
    adress VARCHAR(250) NOT NULL,
    img_parking_place VARCHAR(250),
    size ENUM('L', 'M', 'S') NOT NULL,
    content TEXT NOT NULL,
    note_moyenne INT(4),
    nb_comment INT
);

CREATE TABLE comment(
    id_comment INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_user INT REFERENCES profil_user(id_user),
    id_location INT REFERENCES reservation(id_reservation),
    id_place INT REFERENCES place(id_place),
    content TEXT NOT NULL,
    date_onlin DATETIME,
    note INT(4),
    img_comment VARCHAR(250)
);

CREATE TABLE reservation(
    id_reservation  INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_place INT REFERENCES place(id_place),
    id_user_loueur INT REFERENCES profil_user(id_user),
    id_user INT REFERENCES profil_user(id_user)

)

CREATE TABLE commande_client (
    code_commande INT  NOT NULL;
    date_de_commande DATIME NOT NULL,      
    quantite INT(15)NOT NULL,     
);



CREATE TABLE article(
    code_article INT  NOT NULL ,
    libellel CHAR(15)NOT NULL, 
   prix_unitaire INT(15)NOT NULL,      
   
);

CREATE TABLE fournisseur (
    code_fournisseur INT  NOT NULL ,
    email CHAR(15)NOT NULL,    
    age DATETIME NOT NULL,
    nom VARCHAR(30) NOT NULL,
    prenom VARCHAR(30) NOT NULL
   adress VARCHAR(30) NOT NULL,
    ville VARCHAR(30) NOT NULL,
   pays VARCHAR(30) NOT NULL,
 numero_de_telephone Int(10) NOT NULL,
);

CREATE TABLE client (
    code_client INT  NOT NULL ,
    email CHAR(15)NOT NULL,    
    age DATETIME NOT NULL,
    nom VARCHAR(30) NOT NULL,
    prenom VARCHAR(30) NOT NULL
   adress VARCHAR(30) NOT NULL,
    ville VARCHAR(30) NOT NULL,
   pays VARCHAR(30) NOT NULL,
 numero_de_telephone Int(10) NOT NULL,
);


LOAD DATA [LOCAL] INFILE 'clients.csv'
INTO TABLE client
[FIELDS
    [TERMINATED BY '\t']
    [ENCLOSED BY '']
    [ESCAPED BY '\\' ]
]
[LINES 
    [STARTING BY '']    
    [TERMINATED BY '\n']
]
[IGNORE nombre LINES]
[(code_client,email,age,nom,prenom,adress,ville,pays,numero_telephone)];


LOAD DATA [LOCAL] INFILE 'fournisseur.csv'
INTO TABLE client
[FIELDS
    [TERMINATED BY '\t']
    [ENCLOSED BY '']
    [ESCAPED BY '\\' ]
]
[LINES 
    [STARTING BY '']    
    [TERMINATED BY '\n']
]
[IGNORE nombre LINES]
[(code_frounisseur,email,age,nom,prenom,adress,ville,pays,numero_telephone)];



LOAD DATA [LOCAL] INFILE 'article.csv'
INTO TABLE client
[FIELDS
    [TERMINATED BY '\t']
    [ENCLOSED BY '']
    [ESCAPED BY '\\' ]
]
[LINES 
    [STARTING BY '']    
    [TERMINATED BY '\n']
]
[IGNORE nombre LINES]
[(code_articles ,libellel ,prix_unitair)];



LOAD DATA [LOCAL] INFILE 'commande.csv'
INTO TABLE client
[FIELDS
    [TERMINATED BY '\t']
    [ENCLOSED BY '']
    [ESCAPED BY '\\' ]
]
[LINES 
    [STARTING BY '']    
    [TERMINATED BY '\n']
]
[IGNORE nombre LINES]
[(code_commande ,date_de_commande)];

CREATE TABLE commande (
    code_commande INT  NOT NULL ,
    date_de_commande DATIME NOT NULL,  
  PRIMARY KEY (commande) 
);