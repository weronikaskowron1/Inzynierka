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

INSERT INTO employees
(name, surname, image_path)
VALUES
(
    'Anna',
    'Nowicka',
    '/images/employees/anna_nowicka.jpg'
),
(
    'Karolina',
    'Mazur',
    '/images/employees/karolina_mazur.jpg'
),
(
    'Michał',
    'Krawczyk',
    '/images/employees/michal_krawczyk.jpg'
),
(
    'Tomasz',
    'Wójcik',
    '/images/employees/tomasz_wojcik.jpg'
),
(
    'Julia',
    'Kaczmarek',
    '/images/employees/julia_kaczmarek.jpg'
),
(
    'Natalia',
    'Lewandowska',
    '/images/employees/natalia_lewandowska.jpg'
),
(
    'Kamil',
    'Zieliński',
    '/images/employees/kamil_zielinski.jpg'
),
(
    'Monika',
    'Dąbrowska',
    '/images/employees/monika_dabrowska.jpg'
),
(
    'Patryk',
    'Woźniak',
    '/images/employees/patryk_wozniak.jpg'
),
(
    'Aleksandra',
    'Kamińska',
    '/images/employees/aleksandra_kaminska.jpg'
);

INSERT INTO service_type
(name, id_category)
VALUES
('Oczyszczanie twarzy', 2),
('Laminacja brwi', 2),
('Strzyżenie damskie', 1),
('Koloryzacja włosów', 1),
('Strzyżenie męskie', 4),
('Strzyżenie brody', 4),
('Manicure hybrydowy', 3),
('Przedłużanie paznokci', 3),
('Masaż klasyczny', 5),
('Masaż relaksacyjny', 5);

INSERT INTO services
(name, description, id_service_type, id_company, id_employee, duration)
VALUES

-- Salon Urody Bella
(
    'Oczyszczanie twarzy',
    'Podstawowy zabieg oczyszczający skórę twarzy.',
    1,
    1,
    1,
    60
),
(
    'Laminacja brwi',
    'Laminacja brwi wraz z regulacją i koloryzacją.',
    2,
    1,
    1,
    45
),

-- Hair Studio Nova
(
    'Strzyżenie damskie',
    'Strzyżenie włosów damskich wraz z myciem i modelowaniem.',
    3,
    2,
    2,
    60
),
(
    'Koloryzacja włosów',
    'Koloryzacja włosów wraz z pielęgnacją i modelowaniem.',
    4,
    2,
    2,
    120
),

-- Barber House
(
    'Strzyżenie męskie',
    'Klasyczne strzyżenie męskie.',
    5,
    3,
    3,
    30
),
(
    'Strzyżenie brody',
    'Modelowanie i strzyżenie brody.',
    6,
    3,
    3,
    30
),
-- Nail Art
(
    'Manicure hybrydowy',
    'Manicure z przygotowaniem płytki i lakierem hybrydowym.',
    7,
    4,
    4,
    60
),
(
    'Przedłużanie paznokci',
    'Przedłużanie paznokci metodą żelową.',
    8,
    4,
    4,
    120
),

-- Relax Studio
(
    'Masaż klasyczny',
    'Masaż całego ciała o średniej intensywności.',
    9,
    5,
    5,
    60
),
(
    'Masaż relaksacyjny',
    'Delikatny masaż relaksacyjny całego ciała.',
    10,
    5,
    5,
    90
);
INSERT INTO reservations
(id_service, id_company, id_employee, id_user, data, description)
VALUES
(
    1,
    1,
    1,
    1,
    '2026-09-02 10:00:00',
    'Oczyszczanie twarzy'
),
(
    2,
    1,
    1,
    3,
    '2026-09-03 14:30:00',
    'Laminacja brwi'
),
(
    3,
    2,
    2,
    2,
    '2026-09-04 09:00:00',
    'Strzyżenie damskie'
),
(
    4,
    2,
    2,
    5,
    '2026-09-05 12:00:00',
    'Koloryzacja włosów'
),
(
    5,
    3,
    3,
    4,
    '2026-09-06 11:30:00',
    'Strzyżenie męskie'
),
(
    6,
    3,
    3,
    2,
    '2026-09-07 16:00:00',
    'Strzyżenie brody'
),
(
    7,
    4,
    4,
    1,
    '2026-09-08 10:30:00',
    'Manicure hybrydowy'
),
(
    8,
    4,
    4,
    3,
    '2026-09-09 13:00:00',
    'Przedłużanie paznokci'
),
(
    9,
    5,
    5,
    5,
    '2026-09-10 15:00:00',
    'Masaż klasyczny'
),
(
    10,
    5,
    5,
    4,
    '2026-09-11 17:00:00',
    'Masaż relaksacyjny'
);