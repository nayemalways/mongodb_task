// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("TaskManager");

// 1. Retrieve the count of individuals who are active (isActive: true) for each gender.
db.employee.aggregate([
    { $match: {isActive: true} },
    {$group: { _id: "$gender", count: {$sum:  1}}}
]);


// 2. Retrieve the names and email addresses of individuals who are active (`isActive: true`) and have a favorite fruit of "banana".
db.employee.aggregate([
    { $match: {isActive: true, favoriteFruit: "banana"} },
    {$project: {name: 1, email: 1}}
]);

// 3. Find the average age of individuals for each favorite fruit, then sort the results in descending order of average age.
db.employee.aggregate([
    {$group: { _id: "$favoriteFruit", avarageAge: {$avg: "$age"}}},
    {$sort: {avarageAge: -1}}
]);

// 4. Retrieve a list of unique friend names for individuals who have at least one friend, and include only the friends with names starting with the letter "W". (To solve this query I faced huge pera)
db.employee.aggregate([
      {$match: {friends: { $exists: true, $ne: [] }}},
      {$unwind: "$friends"},
      {$match: {"friends.name": {$regex: /^W/i}}},
      {$group: { _id: "$friends.name"}}
])