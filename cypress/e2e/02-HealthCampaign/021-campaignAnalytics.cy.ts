describe('CampaignAnalytics', () => {
  beforeEach(() => {
    cy.visit('/persona-analytics');
    cy.viewport('macbook-11');
  });

  it('Render Correctly', () => {
    cy.get('h1').contains('Persona Analytics');
    cy.get('h3').contains('วางแผนแคมเปญ ระหว่างเวลา');
    cy.get('p').contains('Keyword ยอดนิยม');
  });
});
