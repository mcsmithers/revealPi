describe('The Top Images Slide', function () {
    it('successfully loads', function () {
        cy.visit('http://localhost:8000/#/1')
    })
})

describe('The Top Images Slide Loader', function () {
    it('tests the image for the loader to appear', function () {
        cy.get('.base-styles')
    })
})

describe('The Top Images Slide Loader Has Image', function () {
    it('checks for the loader to appear', function () {
        cy.get('.base-styles').contains('img')
    })
})

describe('The Top Images Slide has Headline Blocks', function () {
    it('times the headlines to appear', function () {
        cy.get('.grid-item', { timeout: 10000 })
    })
})