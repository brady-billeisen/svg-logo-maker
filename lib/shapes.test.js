const { Circle, Square, Triangle } = require('./shapes');

function normalizeSVG(svgString) {
  return svgString
    .replace(/\s+/g, ' ')
    .replace(/>\s+</g, '><')
    .trim();
}

describe('circle', () => {
  it('will return a logo in the shape of a circle.', () => {
    const shapeColor = 'blue';
    const textColor = 'white';
    const text = 'My Circle';
    const shape = new Circle(shapeColor, textColor, text);
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
    const renderedSVG = normalizeSVG(shape.render());
    const expectedNormalizedSVG = normalizeSVG(expectedSVG);
    expect(renderedSVG).toEqual(expectedNormalizedSVG);
  });
});

describe('triangle', () => {
  it('will return a logo in the shape of a triangle.', () => {
    const shapeColor = 'green';
    const textColor = 'black';
    const text = 'My Triangle';
    const shape = new Triangle(shapeColor, textColor, text);
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,50 250,250 50,250" fill="${shapeColor}" /><text x="150" y="180" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
    const renderedSVG = normalizeSVG(shape.render());
    const expectedNormalizedSVG = normalizeSVG(expectedSVG);
    expect(renderedSVG).toEqual(expectedNormalizedSVG);
  });
});

describe('square', () => {
  it('will return a logo in the shape of a square.', () => {
    const shapeColor = 'red';
    const textColor = 'white';
    const text = 'My Square';
    const shape = new Square(shapeColor, textColor, text);
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="200" height="200" fill="${shapeColor}" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
    const renderedSVG = normalizeSVG(shape.render());
    const expectedNormalizedSVG = normalizeSVG(expectedSVG);
    expect(renderedSVG).toEqual(expectedNormalizedSVG);
  });
});
