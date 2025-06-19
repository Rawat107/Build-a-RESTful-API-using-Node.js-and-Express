import express from 'express';

const app = express();
const PORT = 3000;

// Middle ware to parse JSON bodies
app.use(express.json());

let users = [
    {
        id: '1',
        firstName: "Vaibhav",
        lastName: 'Rawat',
        hobby: 'Coding'
    },
    {
        id: "2",
        firstName: "Rahul",
        lastName: "Verma",
        hobby: "Cycling"
    },
    {
        id: "3",
        firstName: "Priya",
        lastName: "Kumar",
        hobby: "Photography"
    },
    {
        id: "4",
        firstName: "Aman",
        lastName: "Joshi",
        hobby: "Gaming"
    },
];

// request logger middleware
app.use((req, res, next) => {

    // To get the log method, 
    res.on('finish', () => {
        console.log(`${req.method} http://localhost:${PORT}${req.originalUrl} -> ${res.statusCode}`)
    });

    // To move to next
    next();
})

// Validation middleware
function validateUser(req, res, next) {
  
    // Predefine fields so keep the integrity of data
    const allowedFields = ['firstName', 'lastName', 'hobby'];

    const inputFields = Object.keys(req.body);

    // Check for missing required fields
    for (const field of allowedFields) {
    if (!req.body[field]) {
        return res.status(400).json({ error: `Missing required field: ${field}` });
    }
    }

    // Check for any extra fields
    const extraFields = inputFields.filter(field => !allowedFields.includes(field));
    if (extraFields.length > 0) {
    return res.status(400).json({
        error: `Invalid field(s): ${extraFields.join(', ')}`
    });
    }

    next();
}



//Get all user 
app.get('/users', (req, res) => {
    res.status(200).json(users);
})

// Get specific users
app.get('/user/:id', (req, res) => {
    // getting the user by id
    const user = users.find(u => u.id === req.params.id);

    // Displaying error with status and error message
    if(!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json(user);
});

// POST new user
app.post('/user', validateUser, (req, res) => {
    // Making sure the id add in a sequence
    const lastId = users.length > 0 ? parseInt(users[users.length - 1].id ) : 0;

    // Preparing newUser 
    const newUser = { id: (lastId + 1).toString(), ...req.body };

    // Adding the user to existing array of users
    users.push(newUser);

    res.status(200).json(users)
})

// PUt update user
app.put('/user/:id', validateUser, (req, res) => {
    // Finding index of user to update
    const index = users.findIndex(u => u.id === req.params.id);

    // If Index not found return status and error
    if(index === -1) return res.status(404).json({ error: "User not found" });

    users[index] = { id: req.params.id, ...req.body };
    res.status(200).json(users);
});

// DELETE USER
app.delete('/user/:id', (req, res) => {
    const index = users.findIndex(u => u.id === req.params.id);

    if(index === -1) return res.status(404).json({ error: "User not found" });

    const deleteUser = users.splice(index, 1);
    res.status(200).json(deleteUser[0]);
})

// start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})