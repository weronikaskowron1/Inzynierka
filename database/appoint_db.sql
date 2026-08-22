create type sex as enum(
 'kobieta',
 'mezczyzna',
 'inny'
);

create type user_type as enum(
 'admin',
 'user',
 'employer'
);

Create table if not exists users(
	id serial primary key,
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
	
Create table if not exists opinions(
    id serial primary key,
    rating float not null,
    description text,
    id_reservation int references reservations(id) on delete cascade,
    id_user int references users(id) on delete cascade,
    data timestamp not null default now,
    primary key(id_user,id_reservation)
);

Create table if not exists favourites(
    id_company int references companies(id) on delete cascade,
    id_user int references users(id) on delete cascade,
    primary key(id_user,id_company)
);

Create table if not exists reservations(
    id serial primary key,
    id_service int references services(id) on delete cascade,
    id_company int references companies(id) on delete cascade,
    id_employee int references employees(id) on delete cascade,
    id_user int references users(id) on delete cascade,
    data timestamp not null,
    description varchar(255) default null
);

-- KATEGORIE
INSERT INTO categories (name) VALUES
('Fryzjer'),
('Kosmetyka'),
('Paznokcie'),
('Barber'),
('Masaż');


INSERT INTO adresses
(street, building_number, apartment_number, postal_code, city)
VALUES
('Marszałkowska', '10', '5', '00-001', 'Warszawa'),
('Puławska', '25', '12', '02-515', 'Warszawa'),
('Grunwaldzka', '45', '8', '80-241', 'Gdańsk'),
('Piotrkowska', '120', '3', '90-006', 'Łódź'),
('Długa', '15', NULL, '31-147', 'Kraków');


-- SALONY / FIRMY
INSERT INTO companies
(name, email, password, phone, image_path, website, nip, regon, krs, id_category)
VALUES
(
    'Salon Urody Bella',
    'kontakt@bella.pl',
    'haslo123',
    '501234567',
    '/images/bella.jpg',
    'https://bella.pl',
    '1234567890',
    '123456789',
    '0000123456',
    2
),
(
    'Hair Studio Nova',
    'kontakt@nova.pl',
    'haslo123',
    '502345678',
    '/images/nova.jpg',
    'https://nova.pl',
    '2345678901',
    '234567890',
    '0000234567',
    1
),
(
    'Barber House',
    'kontakt@barberhouse.pl',
    'haslo123',
    '503456789',
    '/images/barberhouse.jpg',
    'https://barberhouse.pl',
    '3456789012',
    '345678901',
    '0000345678',
    4
),
(
    'Nail Art',
    'kontakt@nailart.pl',
    'haslo123',
    '504567890',
    '/images/nailart.jpg',
    'https://nailart.pl',
    '4567890123',
    '456789012',
    '0000456789',
    3
),
(
    'Relax Studio',
    'kontakt@relaxstudio.pl',
    'haslo123',
    '505678901',
    '/images/relax.jpg',
    'https://relaxstudio.pl',
    '5678901234',
    '567890123',
    '0000567890',
    5
);


-- UŻYTKOWNICY
INSERT INTO users
(name, surname, email, password, last_logged, phone, image_path, id_adress, sex)
VALUES
(
    'Anna',
    'Kowalska',
    'anna.kowalska@example.com',
    'haslo123',
    now(),
    '601234567',
    '/images/users/anna.jpg',
    1,
    'kobieta'
),
(
    'Jan',
    'Nowak',
    'jan.nowak@example.com',
    'haslo123',
    now(),
    '602345678',
    '/images/users/jan.jpg',
    2,
    'mezczyzna'
),
(
    'Kasia',
    'Wójcik',
    'kasia.wojcik@example.com',
    'haslo123',
    now(),
    '603456789',
    '/images/users/kasia.jpg',
    3,
    'kobieta'
),
(
    'Michał',
    'Lewandowski',
    'michal.lewandowski@example.com',
    'haslo123',
    now(),
    '604567890',
    '/images/users/michal.jpg',
    4,
    'mezczyzna'
),
(
    'Ola',
    'Zielińska',
    'ola.zielinska@example.com',
    'haslo123',
    now(),
    '605678901',
    '/images/users/ola.jpg',
    5,
    'kobieta'
);