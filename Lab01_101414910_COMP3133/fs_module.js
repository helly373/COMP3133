const fs = require('fs');
const csv = require('csv-parser');

const inputFilePath = 'input_countries.csv';
const canadaFilePath = 'canada.txt';
const usaFilePath = 'usa.txt';


function deleteFileIfExists(filePath) {
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`${filePath} deleted.`);
    }
}

deleteFileIfExists(canadaFilePath);
deleteFileIfExists(usaFilePath);

function writeHeaders(filePath, headers) {
    fs.writeFileSync(filePath, headers + '\n');
}

writeHeaders(canadaFilePath, 'country,year,population');
writeHeaders(usaFilePath, 'country,year,population');

fs.createReadStream(inputFilePath)
    .pipe(csv())
    .on('data', (row) => {
        if (row.country.toLowerCase() === 'canada') {
            fs.appendFileSync(canadaFilePath, `${row.country},${row.year},${row.population}\n`);
        } else if (row.country.toLowerCase() === 'united states') {
            fs.appendFileSync(usaFilePath, `${row.country},${row.year},${row.population}\n`);
        }
    })
    .on('end', () => {
        console.log('CSV file processing completed.');
        console.log(`Filtered data written to ${canadaFilePath} and ${usaFilePath}`);
    })
    .on('error', (err) => {
        console.error('Error processing the CSV file:', err);
    });
