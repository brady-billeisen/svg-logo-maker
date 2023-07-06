module.exports = {
    circle: (answers) => {
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill=${answers.shapeColor} />
      
<text x="150" y="125" font-size="60" text-anchor="middle" fill=${answers.textColor}>${answers.text}</text>
      
</svg>
        `.trim();
    },
    triangle: (answers) => {
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<triangle cx="150" cy="25" r="100" fill=${answers.shapeColor} />
      
<text x="150" y="125" font-size="60" text-anchor="middle" fill=${answers.textColor}>${answers.text}</text>
      
</svg>
        `.trim();
    },
    square: (answers) => {
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<square cx="100" cy="50" r="200" fill=${answers.shapeColor} />
      
<text x="150" y="125" font-size="60" text-anchor="middle" fill=${answers.textColor}>${answers.text}</text>
      
</svg>
        `.trim();
    }
}