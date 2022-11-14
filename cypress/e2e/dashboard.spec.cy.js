describe('Dashboard spec', () => {
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

    cy.visit('http://localhost:3000');
  });

  it('should have a header that contains the app logo and says hi to the user', () => {
    cy.get('.header').contains('Hi Emily!');
    cy.get('.logo').should('be.visible');
  });

  it('should have a dashboard that contains important reminders and pet cards', () => {
    cy.get('.dashboard').should('be.visible');
    cy.get('.reminders-section').should('be.visible');
    cy.get('.reminders-section > .overlay').contains('Important Reminders');
    cy.get('.reminders-section > .overlay').contains('Appointments');
    cy.get('.single-pet-card').should('be.visible');
    cy.get('.single-pet-card').contains('Nebula');
    cy.get('.pet-image').should('be.visible');
  });

  it('should be able to click on a pet card to be redirected to that pets profile', () => {
    cy.get('.single-pet-card').click();
  });

});