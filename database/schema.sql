DROP DATABASE IF EXISTS pickup_league;
CREATE DATABASE pickup_league;
USE pickup_league;
CREATE TABLE users (
 id INTEGER AUTO_INCREMENT NOT NULL,
 email VARCHAR(255) NOT NULL,
 firstName VARCHAR(255) NOT NULL,
 lastName VARCHAR(255) NOT NULL,
 PASSWORD VARCHAR(255) NOT NULL,
 PRIMARY KEY(id)
);
insert into users(email,firstname,lastname,password) values("blake@gmail.com","blake","thompson","password");
CREATE TABLE gameTypes (
    id INTEGER AUTO_INCREMENT NOT NULL,
    gameTypesName VARCHAR(255) NOT NULL,
    minPlayers INTEGER NOT NULL,
    maxPlayers INTEGER NOT NULL,
    neededToPlay BOOLEAN NOT NULL,
    PRIMARY KEY(id)
);
insert into gameTypes(gameTypesName,minPlayers,maxPlayers,neededToPlay) values("volleyball",4,12,true);
CREATE TABLE eventLocation (
    id INTEGER AUTO_INCREMENT NOT NULL,
    parkName VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);
ALTER TABLE gamesToBePlayed
ADD location_id integer not null;
insert into eventLocation(parkName)values("Portsmouth park");
select * from eventLocation;
CREATE TABLE gamesToBePlayed (
    id INTEGER AUTO_INCREMENT NOT NULL,
    gametypeid integer,
    location_id integer,
    primary key(id),
	foreign key(gametypeid) references gameTypes(id)
);

delete from gamesToBePlayed;
insert into gamesToBePlayed(gametypeid,location_id) values(1,1);
select gt.gameTypesName, gt.id from gamesToBePlayed g , gameTypes gt, eventlocation e where g.gametypeid=gt.id