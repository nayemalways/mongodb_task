// 1. Find all documents in the collection where the age is greater than 30, and only return the name and email fields. 

db.users.find({
    age: {$gt: 30}
}).project({name: 1, email: 1});

// 2. 1. Find all documents in the collection where the age is greater than 30, and only return the name and email fields. 

db.users.find({
    $or: [
            {favoutiteColor: "Maroon"},
            {favoutiteColor: "Blue"}
        ]
});

// 3. Find all documents where the skill is an empty array.
db.users.find({
    skills: {$size: 0}
}) ;

// 4. Find documents where the person has skills in both "JavaScript" and "Java."
db.users.find({
    skills: {
        $elemMatch: {
            name: {$in: ["Javascript", "JAVA"]} 
        }
    }
});


// 5. Add a new skill to the skills array for the document with the email "amccurry3@cnet.com". 
// The skill is {"name": "Python", "level":"Beginner", "isLearning": true};
db.users.updateOne(
    {email: "amccurry3@cnet.com"},
    {
        $addToSet: {
            skills: {
                name: "Python",
                level: "Beginner",
                isLearning: true
            }
        }
    }
);

// 6. Add a new language "Spanish" to the list of languages spoken by the person.
db.users.updateOne(
    {email: "amccurry3@cnet.com"},
    {
        $addToSet: {
            languages: "Spanish"  
        }
    }
);

// 7. Remove the skill with the name "Kotlin" from the skills array.
db.users.updateOne( 
     {email: "amccurry3@cnet.com"},
     {
         $pull: {
             skills: {name: "KOTLIN"}
         }
     }
);

 
