describe('react-components: Chart component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=chart--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Chart!');
    });
});
