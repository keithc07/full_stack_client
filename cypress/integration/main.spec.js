const getInputByLabel = (label) => {
	return cy
		.contains("label", label)
		.invoke("attr", "for")
		.then((id) => {
			cy.get("#" + id);
		});
};

describe("Admin", () => {
    it("Admin redirects", () => {
        cy.visit("http://localhost:3001/sign_in")
        cy.url().should("match",/sign_in/)
        getInputByLabel("Email").type("admin@test.com")
        getInputByLabel("Password").type("admin")
        cy.get("button").contains("Sign In").click()
        cy.get('[href="/admin"]').click();
        cy.url().should("match",/admin/)
        cy.get('.sc-dJjYzT > :nth-child(1) > button').click();
    })
})
