# Project4DB
Задача по БД за втора оценка


**Общо описание**
Базата данни library моделира работа на малка библиотека. Тя съдържа информация за книги, автори, членове на библиотеката, заеми и ревюта. Целта ѝ е да улесни управлението на книги, проследяването на заети книги и събирането на обратна връзка от читатели.


**Описание на колекциите**
1. books
Съдържа: информация за всяка книга.

Примерна структура:

json
Copy
Edit
{
  "_id": ObjectId,
  "title": "1984",
  "author": "George Orwell",
  "genre": ["Dystopian", "Science Fiction"],
  "published": 1949,
  "copies": 5
}
Полета:

title — заглавие на книгата

author — име на автора

genre — масив от жанрове

published — година на издаване

copies — брой налични копия

2. authors
Съдържа: биографична информация за авторите.

Примерна структура:

json
Copy
Edit
{
  "_id": ObjectId,
  "name": "George Orwell",
  "birth_year": 1903,
  "nationality": "British",
  "awards": ["Prometheus Hall of Fame Award"]
}
Полета:

name — име на автора

birth_year — година на раждане

nationality — националност

awards — масив от награди

3. members
Съдържа: информация за регистрираните читатели.

Примерна структура:

json
Copy
Edit
{
  "_id": ObjectId,
  "name": "Ivan Petrov",
  "email": "ivan@example.com",
  "address": {
    "city": "Sofia",
    "street": "Main Street 1"
  },
  "membership": "standard"
}
Полета:

name — име на члена

email — имейл

address — обект с информация за адреса (град, улица)

membership — вид членство (standard, premium)

4. loans
Съдържа: информация за заеманите книги.

Примерна структура:

json
Copy
Edit
{
  "_id": ObjectId,
  "book_id": ObjectId,
  "member_id": ObjectId,
  "loan_date": ISODate,
  "return_date": ISODate,
  "status": "active"
}
Полета:

book_id — референция към книгата

member_id — референция към члена

loan_date — дата на заемане

return_date — дата на връщане

status — статус (active, returned, overdue)

5. reviews
Съдържа: потребителски ревюта за книги.

Примерна структура:

json
Copy
Edit
{
  "_id": ObjectId,
  "book_id": ObjectId,
  "member_id": ObjectId,
  "rating": 5,
  "comment": "Amazing book!",
  "date": ISODate
}
Полета:

book_id — референция към книгата

member_id — референция към члена

rating — оценка (1–5)

comment — текст на ревюто

date — дата на публикуване

