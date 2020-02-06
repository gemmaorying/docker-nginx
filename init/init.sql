use mysql;
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
create database test;
use test;
create table user
(
    id int auto_increment primary key,
    username varchar(64) unique not null
);
insert into user values(1, "zhangsan");
insert into user values(2, "lisi");