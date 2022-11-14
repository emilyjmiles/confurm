describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://confurm-api.herokuapp.com/api/v1/users', {
      statusCode: 200,
      ok: true,
      fixture: 'users'
    });

    cy.intercept('GET', 'https://confurm-api.herokuapp.com/api/v1/patients', {
      statusCode: 200,
      ok: true,
      fixture: 'patients'
    });

    cy.intercept('GET', 'https://confurm-api.herokuapp.com/api/v1/appointments', {
      statusCode: 200,
      ok: true,
      fixture: 'appointments'
    });
  });
  it('should display a pets profile', () => {
    cy.visit('http://localhost:3000');
    cy.get('.single-pet-card').click();
    cy.url('http://localhost:3000/Nebula-2');
  });

  it('should contain the pets, image, name, and last weight on file', () => {
    cy.get('.profile-container').should('exist').should('be.visible');
    cy.get('.profile-image').should('exist').should('be.visible');
    cy.get('.pet-details').should('exist').should('be.visible');
    cy.get('.pet-details').contains('Nebula');
    cy.get('.pet-details').contains('Last Weight');
    cy.get('.pet-details').contains('Prescriptions');
    cy.get('.pet-details').contains('Medication');
    cy.get('.pet-details').contains('Instructions');
  });

  it('should be able to navigate to the request form', () => {
    cy.get('button').click();
  });
});