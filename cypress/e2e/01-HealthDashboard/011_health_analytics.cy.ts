import AccessToken from '../../fixtures/accessToken';

describe('Primary Dashboard', () => {
  beforeEach(() => {
    cy.setCookie('access_token', AccessToken);
    cy.viewport('macbook-11');
  });

  it('can navigate from search portal', () => {
    cy.visit('/');
    cy.get('h1').contains('Health Analytics');
  });
});
