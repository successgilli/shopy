import db from '..';

const User = `create table if not exists Users (
    id SERIAL primary key,
    name text not null,
    password varchar(150)
    );`

const Products = `create table if not exists Products(
    id uuid DEFAULT uuid_generate_v4 (),
    name text not null,
	description varchar(250) not null,
	price float not null,
	category varchar(250) not null,
	image varchar(250) not null,
	color varchar(250) not null
    );
`
const migrateDb = () => db.query(`${User} ${Products}`);

export default migrateDb;
