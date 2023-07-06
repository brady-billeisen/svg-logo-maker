module.exports = [
    {
        name: 'text',
        message: 'Enter up to three characters for the logo (Text should have at least one, but up to three characters):',
        validate: function (input) {
            return input.length <= 3 && input.length >= 1 || 'Text should have at least one, but up to three characters. Please try again.';
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
]