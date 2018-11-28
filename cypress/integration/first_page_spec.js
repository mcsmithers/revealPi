describe('The First Slide', function () {
    it('successfully loads', function () {
        cy.visit('http://localhost:8000/#/')
    })
})

// Find an element in the document containing the text 'clicks'
describe('The First Slide Clicks', function () {
    it('contains', function () {
        cy.contains('clicks')
    })
})

// Find an element in the document containing the text 'impressions'
describe('The First Slide Impressions', function () {
    it('contains', function () {
        cy.contains('impressions')
    })
})

// Find an element in the document with the class degree-symbol
describe('The First Slide Degree Symbol', function () {
    it('contains', function () {
        cy.get('.degree-symbol').contains('°')
    })
})