use library;

db.createCollection("books");
db.createCollection("authors");
db.createCollection("members");
db.createCollection("loans");
db.createCollection("reviews");

// Books - // Съдържа информация за книги в библиотеката: заглавие, жанр(ове), година на издаване, ID на автора, брой налични копия и информация за издателя.
db.books.insertMany([
  { title: "1984", genre: ["Dystopian", "Political"], published: 1949, author_id: 1, copies: 5, publisher: { name: "Secker & Warburg", city: "London" } },
  { title: "To Kill a Mockingbird", genre: ["Classic", "Drama"], published: 1960, author_id: 2, copies: 3, publisher: { name: "J.B. Lippincott & Co.", city: "Philadelphia" } },
  { title: "Brave New World", genre: ["Dystopian"], published: 1932, author_id: 3, copies: 4, publisher: { name: "Chatto & Windus", city: "London" } },
  { title: "The Great Gatsby", genre: ["Classic"], published: 1925, author_id: 4, copies: 2, publisher: { name: "Charles Scribner's Sons", city: "New York" } },
  { title: "Moby Dick", genre: ["Adventure"], published: 1851, author_id: 5, copies: 6, publisher: { name: "Harper & Brothers", city: "New York" } },
  { title: "Pride and Prejudice", genre: ["Romance"], published: 1813, author_id: 6, copies: 7, publisher: { name: "T. Egerton", city: "London" } },
  { title: "War and Peace", genre: ["Historical"], published: 1869, author_id: 7, copies: 5, publisher: { name: "The Russian Messenger", city: "Moscow" } },
  { title: "Crime and Punishment", genre: ["Psychological"], published: 1866, author_id: 8, copies: 3, publisher: { name: "The Russian Messenger", city: "Moscow" } },
  { title: "The Hobbit", genre: ["Fantasy"], published: 1937, author_id: 9, copies: 8, publisher: { name: "George Allen & Unwin", city: "London" } },
  { title: "Dune", genre: ["Sci-Fi"], published: 1965, author_id: 10, copies: 5, publisher: { name: "Chilton Books", city: "Philadelphia" } }
]);

// Съдържа информация за авторите: име, година на раждане, националност и списък с награди.
db.authors.insertMany([
  { _id: 1, name: "George Orwell", birth_year: 1903, nationality: "British", awards: ["Prometheus Hall of Fame"] },
  { _id: 2, name: "Harper Lee", birth_year: 1926, nationality: "American", awards: ["Pulitzer Prize"] },
  { _id: 3, name: "Aldous Huxley", birth_year: 1894, nationality: "British", awards: [] },
  { _id: 4, name: "F. Scott Fitzgerald", birth_year: 1896, nationality: "American", awards: [] },
  { _id: 5, name: "Herman Melville", birth_year: 1819, nationality: "American", awards: [] },
  { _id: 6, name: "Jane Austen", birth_year: 1775, nationality: "British", awards: [] },
  { _id: 7, name: "Leo Tolstoy", birth_year: 1828, nationality: "Russian", awards: [] },
  { _id: 8, name: "Fyodor Dostoevsky", birth_year: 1821, nationality: "Russian", awards: [] },
  { _id: 9, name: "J.R.R. Tolkien", birth_year: 1892, nationality: "British", awards: ["International Fantasy Award"] },
  { _id: 10, name: "Frank Herbert", birth_year: 1920, nationality: "American", awards: ["Nebula Award"] }
]);

// Съдържа информация за членовете на библиотеката: име, имейл, телефон, адрес и вид членство.
db.members.insertMany([
  { name: "Ivan Petrov", email: "ivan@example.com", phone: "0888123456", address: { city: "Sofia", zip: "1000" }, membership: "standard" },
  { name: "Maria Georgieva", email: "maria@example.com", phone: "0888234567", address: { city: "Plovdiv", zip: "4000" }, membership: "premium" },
  { name: "Petar Dimitrov", email: "petar@example.com", phone: "0888345678", address: { city: "Varna", zip: "9000" }, membership: "standard" },
  { name: "Elena Hristova", email: "elena@example.com", phone: "0888456789", address: { city: "Burgas", zip: "8000" }, membership: "premium" },
  { name: "Nikola Stoyanov", email: "nikola@example.com", phone: "0888567890", address: { city: "Ruse", zip: "7000" }, membership: "standard" },
  { name: "Georgi Kolev", email: "georgi@example.com", phone: "0888678901", address: { city: "Pleven", zip: "5800" }, membership: "premium" },
  { name: "Tanya Petkova", email: "tanya@example.com", phone: "0888789012", address: { city: "Stara Zagora", zip: "6000" }, membership: "standard" },
  { name: "Kristian Marinov", email: "kristian@example.com", phone: "0888890123", address: { city: "Blagoevgrad", zip: "2700" }, membership: "premium" },
  { name: "Radoslav Ivanov", email: "radoslav@example.com", phone: "0888901234", address: { city: "Haskovo", zip: "6300" }, membership: "standard" },
  { name: "Vesela Petrova", email: "vesela@example.com", phone: "0888012345", address: { city: "Shumen", zip: "9700" }, membership: "premium" }
]);

// Съдържа информация за заетите книги: ID на член, ID на книга, дата на заемане, дата на връщане и статус.
db.loans.insertMany([
  { member_id: 1, book_id: 1, loan_date: ISODate("2024-06-01"), return_date: ISODate("2024-06-15"), status: "returned" },
  { member_id: 2, book_id: 2, loan_date: ISODate("2024-06-02"), return_date: ISODate("2024-06-16"), status: "returned" },
  { member_id: 3, book_id: 3, loan_date: ISODate("2024-06-03"), return_date: ISODate("2024-06-17"), status: "returned" },
  { member_id: 4, book_id: 4, loan_date: ISODate("2024-06-04"), return_date: ISODate("2024-06-18"), status: "returned" },
  { member_id: 5, book_id: 5, loan_date: ISODate("2024-06-05"), return_date: ISODate("2024-06-19"), status: "returned" },
  { member_id: 6, book_id: 6, loan_date: ISODate("2024-06-06"), return_date: ISODate("2024-06-20"), status: "active" },
  { member_id: 7, book_id: 7, loan_date: ISODate("2024-06-07"), return_date: ISODate("2024-06-21"), status: "active" },
  { member_id: 8, book_id: 8, loan_date: ISODate("2024-06-08"), return_date: ISODate("2024-06-22"), status: "active" },
  { member_id: 9, book_id: 9, loan_date: ISODate("2024-06-09"), return_date: ISODate("2024-06-23"), status: "active" },
  { member_id: 10, book_id: 10, loan_date: ISODate("2024-06-10"), return_date: ISODate("2024-06-24"), status: "active" }
]);

// Съдържа потребителски ревюта за книги: ID на книга, ID на член, оценка, коментар и дата.
db.reviews.insertMany([
  { book_id: 1, member_id: 1, rating: 5, comment: "Brilliant book!", date: ISODate("2024-06-01") },
  { book_id: 2, member_id: 2, rating: 4, comment: "Loved it!", date: ISODate("2024-06-02") },
  { book_id: 3, member_id: 3, rating: 5, comment: "Very interesting.", date: ISODate("2024-06-03") },
  { book_id: 4, member_id: 4, rating: 3, comment: "Good but long.", date: ISODate("2024-06-04") },
  { book_id: 5, member_id: 5, rating: 4, comment: "Classic masterpiece.", date: ISODate("2024-06-05") },
  { book_id: 6, member_id: 6, rating: 5, comment: "Loved the characters!", date: ISODate("2024-06-06") },
  { book_id: 7, member_id: 7, rating: 4, comment: "Epic story.", date: ISODate("2024-06-07") },
  { book_id: 8, member_id: 8, rating: 5, comment: "Very deep and intense.", date: ISODate("2024-06-08") },
  { book_id: 9, member_id: 9, rating: 5, comment: "Great for all ages!", date: ISODate("2024-06-09") },
  { book_id: 10, member_id: 10, rating: 5, comment: "A sci-fi classic.", date: ISODate("2024-06-10") }
]);
