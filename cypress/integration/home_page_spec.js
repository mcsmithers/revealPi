describe('The Home Page', function () {
    it('successfully loads', function () {
        cy.visit('http://localhost:8000') // change URL to match your dev URL
    })
})

describe('The Home Page Root', function () {
    it('successfully loads', function () {
        cy.visit('/')
    })
})

// now that we're in, let's check out a slide route or two
describe('Home Page Targets Traffic', function () {
    it('successfully loads', function () {
        cy.visit('http://localhost:8000/#/11')
    })
})

describe('Home Page Targets Random Pic', function () {
    it('successfully loads', function () {
        cy.visit('http://localhost:8000/#/3')
    })
})