//const express = require('express');

//const app = express();

//app.use(express.static('public')) update bellow
//app.use(express.static(__dirname + '/dist'));


//app.get('/', function(req, res){
 //   res.sendFile(__dirname + '/dist/index.html');
//})

//let server = app.listen(8888, function(){
   // console.log('App server is running on port 8888');
//});


//chat gtp intergrating above and data model provided const express = require('express');
const app = express();

// Serve static files from the "dist" directory
app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/dist/index.html');
});

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Define the Data Model using an in-memory object to act as our database:
let activities = {};
let nextId = 1; // A simple way to generate unique IDs

// CRUD operations for activities
app.post('/activities', (req, res) => {
    const { name, category, image, duration, feeling, intensity, calories } = req.body;

    // Validate input data
    if (typeof name !== 'string' || name.trim() === '') {
        return res.status(400).send('Name is required and must be a string.');
    }
    if (typeof category !== 'string' || category.trim() === '') {
        return res.status(400).send('Category is required and must be a string.');
    }
    if (typeof image !== 'string') { // You may want to add more complex validation for URLs or file paths
        return res.status(400).send('Image must be a string.');
    }
    if (typeof duration !== 'number' || duration <= 0) {
        return res.status(400).send('Duration is required and must be a positive number.');
    }
    if (![1, 2, 3].includes(feeling)) { // Assuming feeling is expected to be 1, 2, or 3
        return res.status(400).send('Feeling must be one of the specified values: 1, 2, or 3.');
    }
    if (typeof intensity !== 'number' || intensity < 1 || intensity > 10) {
        return res.status(400).send('Intensity must be a number between 1 and 10.');
    }
    if (typeof calories !== 'number' || calories < 0) {
        return res.status(400).send('Calories must be a non-negative number.');
    }

    // Create a new activity object
    const newActivity = {
        id: `activity-${nextId++}`,
        name,
        category,
        image,
        duration,
        feeling,
        intensity,
        calories,
        date: new Date().toISOString()
    };

    // Store the new activity
    activities[newActivity.id] = newActivity;

    res.status(201).send(newActivity);
});

app.get('/activities', (req, res) => {
    res.send(Object.values(activities));
});

app.delete('/activities/:id', (req, res) => {
    const { id } = req.params;
    if (!activities[id]) {
        return res.status(404).send('Activity not found');
    }

    delete activities[id];
    res.status(204).send();
});

// Start the server on port 8888
let server = app.listen(8888, function(){
    console.log('App server is running on port 8888');
});