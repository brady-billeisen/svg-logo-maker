const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes');
const questions = require('./lib/questions');

const prompt = inquirer.createPromptModule();

prompt(questions)
    .then((answers) => {
        const svgContent = shapes[answers.shape](answers);

        fs.writeFile(answers.name, svgContent, (err) => {
            if (err) throw err;
            console.log('Logo created successfully!');
        });
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });
