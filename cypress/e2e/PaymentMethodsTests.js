/// <reference types="cypress" />
import selectors from '../selectors/selectors';
import loginPage from '../pages/loginToSystemPage';
import paymentMethod from '../pages/paymentMethod';

describe('Check different options of payment methods', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.clearLocalStorage()
        loginPage.loginToSystem()
        cy.addToCart('Electronics', 'Cell phones', 'Smartphone')
        cy.addToCart('Electronics', 'Cell phones', 'Smartphone')
        cy.addToCart('Computers', 'Notebooks', '14.1-inch Laptop')
        loginPage.comparePrice()
        loginPage.fillOrderParameters()
        loginPage.billingAddrOrder()
        loginPage.shippingAddrOrder()
        loginPage.shippingMethodOrder()
    })
    it('Valid payment method - Check', () => {
        paymentMethod.paymentMethodCheck()
        paymentMethod.paymentInformationOrderCheck('Tricentis GmbH', "Leonard-Bernstein-Straße 10", "1220 Vienna", "Austria")
        loginPage.confirmOrder()
    });
    it('Valid payment method - Cash', () => {
        paymentMethod.paymentMethodCash()
        paymentMethod.paymentInformationOrderCash()
        loginPage.confirmOrder()
    });
    after(() => {
        loginPage.deleteProducts()
    });
    it('Valid payment method - Credit', () => {
        paymentMethod.paymentMethodCard()
        paymentMethod.paymentInformationOrderCard()
        loginPage.confirmOrder()
    });
    it('InValid payment method - Credit', () => {
        paymentMethod.paymentMethodCard()
        paymentMethod.paymentInformationOrderCardNegative()
    });
    it('Valid payment method - Purchase', () => {
        paymentMethod.paymentMethodPurchase()
        paymentMethod.paymentInformationOrderPurchase()
        loginPage.confirmOrder()
    });


})