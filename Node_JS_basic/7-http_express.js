const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
    let message = 'This is the list of our students\n';

    try {
        const data = await countStudents(process.argv[2]);
        message += data;  // Assuming countStudents returns the formatted data.
        res.send(message);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
