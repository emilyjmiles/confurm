// import users from
describe('Dashboard spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://confurm-api.herokuapp.com/api/v1/users', { fixture: 'users' });
    cy.intercept('GET', 'https://confurm-api.herokuapp.com/api/v1/patients', { fixture: 'patients' });
    cy.intercept('GET', 'https://confurm-api.herokuapp.com/api/v1/appointments', { fixture: 'appointments' });
    cy.visit('http://localhost:3000/');
  });

  // it('should have a header', () => {
  //   cy.get('.header').contains('Hi Emily!');

  // });

});