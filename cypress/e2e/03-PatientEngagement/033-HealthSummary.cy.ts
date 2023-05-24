import AccessToken from '../../fixtures/accessToken';

describe.skip('Health Summary', () => {
  const searchTest = {
    patientId: 'a22bfcb9-3f99-4ec4-a477-03cc1bd30a20',
  };

  beforeEach(() => {
    cy.setCookie('access_token', AccessToken);
  });

  describe('functionalities', () => {
    beforeEach(() => {
      cy.visit(`/health-summary/${searchTest.patientId}`);
    });

    it('Clinical Summary', () => {
      cy.get('h1').contains('Health Summary');
      cy.get('h1').contains('Clinical Information');
      cy.get('h1').contains('Health Analysis');
      cy.get('h1').contains('Laboratory Result');
      cy.get('h1').contains('Laboratory Document');
      cy.get('h1').contains('Medicine History');
    });

    // it's good practice to test each feature separately, but I do this to save time
    it.skip('go to Vaccine, Hospital Visit, Telemedicine, Custom Profile', () => {
      cy.get('[data-cy=navFooter-1]').click();

      cy.get('[data-cy=navFooter-2]').click();
      cy.get('h1').contains('ประวัติการทำงาน');
      cy.get('h1').contains(
        'บันทึกเกี่ยวกับการบาดเจ็บหรือเจ็บป่วยเนื่องจากการทำงานและสาเหตุ'
      );

      cy.get('[data-cy=navFooter-3]').click();
      cy.get('h1').contains('ประวัติการตรวจ');

      cy.get('[data-cy=navFooter-4]').click();
      cy.get('h1').contains('รายการตรวจผ่านโทรศัพท์');

      cy.get('[data-cy=navFooter-5]').click();
      cy.get('h1').contains('ประวัติรายการ');
    });
  });
});
