CREATE USER backend WITH PASSWORD 'backend#123';
CREATE DATABASE backend;
GRANT ALL PRIVILEGES ON DATABASE backend TO backend;

\c backend backend
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    name varchar(255),
    lastname varchar(255),
    city varchar(255),
    country varchar(255)
);

INSERT INTO Users(name, lastname, city, country)
VALUES ('William', 'Jones', 'Boston', 'USA');

INSERT INTO Users(name, lastname, city, country)
VALUES ('Jennifer', 'Lutz', 'Berlin', 'Germany');

INSERT INTO Users(name, lastname, city, country)
VALUES ('James', 'Jefferson', 'New York', 'USA');

INSERT INTO Users(name, lastname, city, country)
VALUES ('Salvatore', 'Marino', 'Washington', 'USA');

INSERT INTO Users(name, lastname, city, country)
VALUES ('Daniel', 'Smith', 'Glasgow', 'United Kingdom');

INSERT INTO Users(name, lastname, city, country)
VALUES ('Sybil', 'Johnson', 'London', 'United Kingdom');

INSERT INTO Users(name, lastname, city, country)
VALUES ('Maria', 'Perez', 'Paris', 'France');

INSERT INTO Users(name, lastname, city, country)
VALUES ('Ethel', 'Schneider', 'Madrid', 'Spain');

INSERT INTO Users(name, lastname, city, country)
VALUES ('John', 'Parker', 'Bristol', 'United Kingdom');

INSERT INTO Users(name, lastname, city, country)
VALUES ('Philip', 'Smith', 'Edinburgh', 'United Kingdom');

