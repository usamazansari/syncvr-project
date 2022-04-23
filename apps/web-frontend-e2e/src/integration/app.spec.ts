describe('UI Look and Feel', () => {
  it('should display title', () => {
    cy.visit('/');
    cy.get('title').should('have.text', 'Fibonacci Series Generator');
  });

  it('should display the name of the app in the header', () => {
    cy.get('p#brand').should('have.text', 'Fibonacci Series Generator');
  });

  it('should display star repository button', () => {
    cy.get('a#syncvr-project-header-star-repository').contains('star');
  });

  it('should display info button', () => {
    cy.get('button#syncvr-project-header-info-button').contains('info');
  });

  it('should display the name of the author in the footer', () => {
    cy.get('syncvr-project-footer').contains('usamazansari');
  });
});

describe('Dialog box Look and Feel', () => {
  it('should click info button', () => {
    cy.get('button#syncvr-project-header-info-button').click();
  });
  it('should display dialog box when clicked on info button', () => {
    cy.get('syncvr-project-dialog').should('be.visible');
  });
  it('should have title "Playing Around"', () => {
    cy.get('h2[mat-dialog-title]').contains('Playing Around');
  });
  it('should click the close button', () => {
    cy.get('button#syncvr-project-dialog-close-button').click();
  });
  it('should close the dialog box', () => {
    cy.get('syncvr-project-dialog').should('not.exist');
  });
});

describe('Input Card Look and Feel', () => {
  it('should display the card title', () => {
    cy.get('syncvr-project-form').should('exist');
    cy.get('syncvr-project-form mat-card-title').should('have.text', 'Input');
  });

  it('should display the input as a range having min 2 and max 50', () => {
    cy.get('input#form-input-range').should('exist');
    cy.get('input#form-input-range').should('have.attr', 'min', '2');
    cy.get('input#form-input-range').should('have.attr', 'max', '50');
  });

  it('should display the initial range value', () => {
    cy.get('p#form-range-value').contains('2');
  });

  it('should update the range value to 3', () => {
    cy.get('input#form-input-range').invoke('val', '3').trigger('change');
    cy.get('p#form-range-value').contains('3');
  });

  it('should update the range value to 16', () => {
    cy.get('input#form-input-range').invoke('val', '16').trigger('change');
    cy.get('p#form-range-value').contains('16');
  });

  it('should update the range value to 29', () => {
    cy.get('input#form-input-range').invoke('val', '29').trigger('change');
    cy.get('p#form-range-value').contains('29');
  });

  it('should update the range value to 44', () => {
    cy.get('input#form-input-range').invoke('val', '44').trigger('change');
    cy.get('p#form-range-value').contains('44');
  });
});
