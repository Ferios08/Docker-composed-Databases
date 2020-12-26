db.createUser(
    {
        user: "your_username",
        pwd: "strongPassword",
        roles:[
            {
                role: "readWrite",
                db:  "your_database"
            }
        ]
    }
)