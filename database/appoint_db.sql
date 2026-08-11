create type sex as enum(
 'kobieta',
 'mężczyzna',
 'inny'
);

create type user_type as enum(
 'admin',
 'user',
 'employer'
);

Create table if not exists users(
	id serial primary key,
	username varchar(50) unique not null,
	name varchar(30) not null,
	surname varchar(30) not null,
	email varchar(255) unique not null,
	password varchar(50) not null,
	created_at timestamp not null default now(),
	last_logged timestamp not null,
	phone varchar(20) unique,
	image_path varchar(255),
	id_adress int references adresses(id) on delete cascade,
	sex sex default 'inny'
);

Create table if not exists categories(
	id serial primary key,
	name varchar(35) not null
);

Create table if not exists companies(
	id serial primary key,
	name varchar(100) not null,
	email varchar(255) unique not null,
	password varchar(50) not null,
	phone varchar(20) unique,
	image_path varchar(255),
	website varchar(255) unique,
	nip varchar(10) not null unique,
	regon varchar(14),
	krs varchar(10),
	created_at timestamp not null default now(),
	id_category int references categories(id) on delete cascade
);

Create table if not exists adresses(
	id serial primary key,
	street varchar(80),
	building_number varchar(10),
	apartment_number varchar(10),
	postal_code varchar(10),
	city varchar(25)
);

Create table if not exists adresses_companies(
	id_adress int references adresses(id) on delete cascade,
	id_company int references companies(id) on delete cascade,
	primary key(id_adress,id_company)
);

Create table if not exists employees(
	id serial primary key,
	name varchar(30) not null,
	surname varchar(30) not null,
	image_path varchar(255)
);

Create table if not exists employees_companies(
	id_employee int references employees(id) on delete cascade,
	id_company int references companies(id) on delete cascade,
	primary key(id_employee,id_company)
);

Create table if not exists service_type(
	id serial primary key,
	name varchar(35) not null,
	id_category int references categories(id) on delete cascade
);

Create table if not exists services(
	id serial primary key,
	name varchar(50) not null,
	description text,
	id_service_type int references service_type(id) on delete cascade,
	id_company int references companies(id) on delete cascade,
	id_employee int references employees(id) on delete cascade
);


Create table if not exists services_employees(
	price float not null,
	data timestamp not null,
	id_employee int references employees(id) on delete cascade,
	id_service int references services(id) on delete cascade,
	primary key(id_employee,id_service)
);

Create table if not exists services_companies(
	id_service int references services(id) on delete cascade,
	id_company int references companies(id) on delete cascade,
	primary key(id_service,id_company)
);

Create table if not exists roles(
	email varchar(255) unique not null,
	roles user_type default 'user'
);

Create table if not exists admins(
	id serial primary key,
	email varchar(255) unique not null,
	password varchar(50) not null
);
	
