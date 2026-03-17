export default class BasePage {
    /**
     * Navigates to a specified URL path
     * @param path The path to append to the baseUrl
     */
    navigate(path: string) {
        cy.visit(path);
    }

    /**
     * Fetches the selector object from the centralized selector_map.json
     */
    getSelectorMap() {
        return cy.fixture('selector_map.json');
    }
}
