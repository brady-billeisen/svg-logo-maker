const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./shapes');

inquirer
    .prompt([
        {
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            validate: function (input) {
                return input.length <= 3 || 'Text should have up to three characters.';
            },
        },
        {
            name: 'textColor',
            message: 'Enter the text color (keyword or hexadecimal number):',
        },
        {
            name: 'shape',
            type: 'list',
            message: 'Select a shape:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            name: 'shapeColor',
            message: 'Enter the shape color (keyword or hexadecimal number):',
        },
    ])
    .then((answers) => {
        // Call the generateLogo function with the user-provided input
        generateLogo(answers);
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });

function generateLogo(answers) {
    const svgContent = shapes[answers.shape](answers);
    fs.writeFile('logo.svg', svgContent, (err) => {
        if (err) throw err;
        console.log('Logo created successfully!');
    });
}
