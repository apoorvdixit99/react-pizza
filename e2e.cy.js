describe('E2E Tests', () => {

  it('Deletes a pizza', () => {
    cy.visit('/');
    cy.get('a[href="/3"]').click();
    cy.url().should('eq', 'http://localhost:3000/3');
    cy.contains('Delete').click();
    
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('a[href="/3"]').should('not.exist');
  })

  it('Adds a pizza', () => {
    cy.visit('/');
    cy.contains('button', 'Add Pizza').click();
    cy.url().should('eq', 'http://localhost:3000/add-pizza');
    cy.get('input[name="id"]').type('4');
    cy.get('input[name="pizza"]').type('Indian Pizza');
    cy.get('input[name="fanFavourite"][value="yes"]').check();
    cy.get('input[name="delivery"][value="no"]').check();
    cy.get('input[name="toppings"][value="tomatoes"]').check();
    cy.get('input[name="toppings"][value="onions"]').check();
    cy.get('input[name="toppings"][value="bell pepper"]').check();
    cy.get('input[type="submit"]').click();

    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('a[href="/4"]')
      .should('exist')
    cy.contains('Indian Pizza').should('exist');
  })

  it('Update a pizza', () => {
    cy.visit('/');
    cy.get('a[href="/3"]').click();
    cy.url().should('eq', 'http://localhost:3000/3');
    cy.get('input[name="pizza"]').clear().type('Piperooni');
    cy.get('input[type="submit"]').click();

    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('a[href="/3"]')
      .should('exist')
    cy.contains('Piperooni').should('exist');
    cy.contains('Pepperoni').should('not.exist');
  })

})