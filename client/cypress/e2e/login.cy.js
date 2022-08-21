describe('logins', () => {
    beforeEach(() => {
        visitLoginPage()
    })

    it('A User logs in and sees a welcome message', () => {
        loginWith('michael@example.com', 'passsword')

        expect(cy.contains('Welcome back Michael')).to.exist
    })

    it('A User logs off and sees a goodbye message', () => {
        loginWith('michael@example.com', 'password')
        logout()

        expect(cy.contains('Goodbye! See you soon!'))
    })
    it('A Pro User logs in and sees a thank you message for the first time', () => {
        loginWith('new-pro@example.com', 'passsword')
        expect(cy.contains('Thank you for supporting us!')).to.exist
    })

    it('A Pro User logs in and sees and sees a welcome message', () => {
        loginWith('old-pro@example.com', 'passsword')
        expect(cy.contains('Welcome back John')).to.exist
    })
})

const visitLoginPage = () => {
    cy.visit('http://localhost:3000')
}

const loginWith = (email, password) => {
    cy.get('[name="email"]').type(email)
    cy.get('[name="password"]').type(password)
    cy.get('button').click()
}
const logout = () => {
    cy.get('button').click()
}