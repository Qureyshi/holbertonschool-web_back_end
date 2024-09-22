const fs = require('fs').promises;

async function countStudents(path) {
    try {
        const data = await fs.readFile(path, 'utf8');
        const lines = data.split('\n').filter(line => line.trim() !== '');
        
        const students = {};
        let totalStudents = 0;

        lines.forEach((line, index) => {
            const fields = line.split(',');
            if (index === 0) return; // Skip header line
            const field = fields[3]; // Assuming the field is in the 4th column
            const name = fields[0]; // Assuming the name is in the 1st column

            if (field) {
                if (!students[field]) {
                    students[field] = [];
                }
                students[field].push(name);
                totalStudents++;
            }
        });

        console.log(`Number of students: ${totalStudents}`);

        for (const [field, names] of Object.entries(students)) {
            console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
