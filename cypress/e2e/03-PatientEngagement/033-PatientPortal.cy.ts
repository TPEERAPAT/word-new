describe('Patient Portal', () => {
  const searchTest = {
    search: 'test11',
    uid: 'ced36f14-df12-49ac-93bc-8b289cca4901',
  };

  beforeEach(() => {
    cy.visit('/patient-profile');
    // cy.viewport('macbook-13');
  });

  it('can search patient', () => {
    cy.get('h1').contains('Patient Portal');
    const typeSearch = () => cy.get('#id_or_name');
    typeSearch()
      .type(searchTest.search)
      .should('have.value', searchTest.search);
    cy.get('#search-button').click();

    // Search Result
    cy.get('h1').contains('Patient Profile');
  });
});
