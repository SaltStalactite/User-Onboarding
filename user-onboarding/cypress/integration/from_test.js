describe('App refresh', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    const firstName = () => cy.get('input[name=firstname]');
    const lastName = () => cy.get('input[name=lastname]');
    const email = () => cy.get('input[name=email]');
    const password = () => cy.get('input[name=password]');
    const terms = () => cy.get('input[name=terms]');
    const submit = () => cy.get(`button[id='submit']`);

    it('types in names and checks if input contains it', () => {
        firstName().should('exist');
        firstName().type('John')
            .should('have.value', 'John');
        lastName().should('exist');
        lastName().type('Doe')
            .should('have.value', 'Doe');
    })

    it('types in email input', () => {
        email().should('exist');
        email().type('john@doe.com')
            .should('have.value', 'john@doe.com');
    })

    it('types in password input', () => {
        password().should('exist');
        password().type('password')
            .should('have.value', 'password');
    })

    it('can check the terms of service box', () => {
        terms().should('exist');
        terms().click();
        terms().should('be.checked')
    })

    it('can submit the form data', () => {
        firstName().type('John');
        lastName().type('Doe');
        email().type('JohnDoe@mail.com');
        password().type('password');
        terms().click();
        submit().click();
        firstName().should('have.value', '');
        lastName().should('have.value', '');
        email().should('have.value', '');
        password().should('have.value', '');
    })

    it('checks for form validation if an input is left empty', () => {
        firstName().type('John');
        lastName().type('Doe').clear();
        email().type('JohnDoe@mail.com');
        password().type('password');
        terms().click();
        cy.contains('Last Name is required').should('exist');
    })
})