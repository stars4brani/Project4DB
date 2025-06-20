//READ заявки

db.books.find().pretty();// books: извличане на всички документи
db.books.find({ genre: "Dystopian" }).pretty();// books: филтриране по жанр (например "Dystopian")
db.books.find({ genre: "Dystopian", published: { $gt: 1930 } }).pretty();// books: филтриране по жанр и година на издаване

db.authors.find().pretty();// authors: всички автори
db.authors.find({ nationality: "British" }).pretty();// authors: филтриране по националност "British"
db.authors.find({ nationality: "British", birth_year: { $gt: 1900 } }).pretty();// authors: филтриране по националност и година на раждане > 1900

db.members.find().pretty();// members: всички членове
db.members.find({ "address.city": "Sofia" }).pretty();// members: филтриране по град "Sofia"
db.members.find({ "address.city": "Sofia", membership: "premium" }).pretty();// members: филтриране по град и вид членство

db.loans.find().pretty();// loans: всички записи за заеми
db.loans.find({ status: "active" }).pretty();// loans: филтриране по статус "active"
db.loans.find({ status: "active", loan_date: { $gte: ISODate("2024-06-05") } }).pretty();// loans: филтриране по статус и дата на заемане след 2024-06-05

db.reviews.find().pretty();// reviews: всички ревюта
db.reviews.find({ rating: 5 }).pretty();// reviews: филтриране по оценка 5
db.reviews.find({ rating: 5, date: { $gte: ISODate("2024-06-05") } }).pretty();// reviews: филтриране по оценка и дата на ревю


//UPDATE заявки

// books: увеличаване броя копия на "1984" с 2
db.books.updateOne({ title: "1984" }, { $inc: { copies: 2 } });
// authors: добавяне на нова награда на George Orwell
db.authors.updateOne({ name: "George Orwell" }, { $push: { awards: "New Literary Award" } });
// members: промяна на вид членство на Ivan Petrov на "premium"
db.members.updateOne({ name: "Ivan Petrov" }, { $set: { membership: "premium" } });
// loans: промяна на статус на първия активен заем на "returned"
db.loans.updateOne({ status: "active" }, { $set: { status: "returned" } });
// reviews: обновяване на коментар на първото ревю с rating 5
db.reviews.updateOne({ rating: 5 }, { $set: { comment: "Updated review comment" } });


//DELETE заявки

// books: изтриване на книга с title "Moby Dick"
db.books.deleteOne({ title: "Moby Dick" });
// authors: изтриване на автор без награди
db.authors.deleteOne({ awards: { $size: 0 } });
// members: изтриване на член с email "tanya@example.com"
db.members.deleteOne({ email: "tanya@example.com" });
// loans: изтриване на заем със статус "returned"
db.loans.deleteOne({ status: "returned" });
// reviews: изтриване на ревю с оценка по-малка от 4
db.reviews.deleteOne({ rating: { $lt: 4 } });


//AGGREGATE

// books: групиране по жанр и изчисляване на общ брой копия
db.books.aggregate([
  { $unwind: "$genre" },
  { $group: { _id: "$genre", totalCopies: { $sum: "$copies" }, count: { $sum: 1 } } },
  { $sort: { totalCopies: -1 } }
]);
// authors: броене колко автори има за всяка националност
db.authors.aggregate([
  { $group: { _id: "$nationality", count: { $sum: 1 } } },
  { $sort: { count: -1 } }
]);
// members: филтриране на премиум членове и сортиране по име
db.members.aggregate([
  { $match: { membership: "premium" } },
  { $sort: { name: 1 } }
]);
// loans: броене на активните заеми и групиране по член
db.loans.aggregate([
  { $match: { status: "active" } },
  { $group: { _id: "$member_id", activeLoans: { $sum: 1 } } },
  { $sort: { activeLoans: -1 } }
]);
// reviews: средна оценка за всяка книга и сортиране по средна оценка
db.reviews.aggregate([
  { $group: { _id: "$book_id", avgRating: { $avg: "$rating" }, reviewCount: { $sum: 1 } } },
  { $sort: { avgRating: -1 } }
]);

