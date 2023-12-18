
it('Login to Veriphy account', () => {    

// Navigate to Veriphy page
cy.visit('https://test.veriphy.co.uk/Portal/Account/Login?ReturnUrl=%2f') //('https://test.veriphy.co.uk/')  

// Enter login details
cy.get('#UserName').type('deepthi.kumar@davies-group.com')
cy.get('#Password').type('changeme')

// Click Sign In button
cy.get("[type='submit']").click()

// Verify successful login
cy.get('#content > header > div > h2').should('have.text', 'Veriphy – Compliance and Onboarding Platform')
})

