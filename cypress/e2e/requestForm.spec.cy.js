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

  it('should have a form where a user can request an appointment', () => {
    cy.visit('http://localhost:3000');
    cy.get('.single-pet-card').click();
    cy.url('http://localhost:3000/Nebula-2');
    cy.get('button').click();
    cy.url('http://localhost:3000/request-form');
  });

  it('should be able to fill out the form and submit a new appointment request', () => {
    cy.intercept('POST', 'https://confurm-api.herokuapp.com/api/v1/appointments',
      {
        statusCode: 200,
        body: {
          id: Date.now(),
          userName: 'Emily Miles',
          patientName: 'Nova',
          requestReason: 'Nail trim',
          status: 'pending'
        }
      });
    cy.get('input[placeholder="first name"]').type('Emily');
    cy.get('input[placeholder="last name"]').type('Miles');
    cy.get('input[placeholder="pet name"]').type('Nova');
    cy.get('textarea').type('Nail trim');
    cy.get('button').click();
  });

  it('should be able to return to the dashboard by clicking on the app logo', () => {
    cy.get('.logo').click();
  });
});