const fs =reqyuire('fs')
fs.writeFile('example.txt', 'Hello, World!', (err) => {
    err ? console.error(err) : console.log('File written successfully!');
});

fs.readFile('example.txt', 'utf8', (err, data) => {
    err ? console.error(err) : console.log('File content:', data);
});