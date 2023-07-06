const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square} = require('./lib/shapes');
const questions = require('./lib/questions');

const prompt = inquirer.createPromptModule();

prompt(questions)
    .then((answers) => {
        const svgContent = answers.shape === 'Circle' ? new Circle(answers.shapeColor, answers.textColor, answers.text).render() :
            answers.shape === 'Triangle' ? new Triangle(answers.shapeColor, answers.textColor, answers.text).render() :
            answers.shape === 'Square' ? new Square(answers.shapeColor, answers.textColor, answers.text).render() : '';

        fs.writeFile(answers.name, svgContent, (err) => {
            if (err) throw err;
            console.log(`${answers.name} has been created!`);
        });
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });
