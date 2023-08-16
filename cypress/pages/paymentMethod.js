import { selectors } from '../selectors/selectors';
import { checkoutSelectors } from '../selectors/checkoutSelectors';
export default {
    paymentMethodCash: () => {
        cy.get('#paymentmethod_0').check()
        cy.clickElement('#payment-method-buttons-container > .button-1')
    },
    paymentInformationOrderCash: () => {
        cy.clickElement('#payment-info-buttons-container > .button-1')
    },
    paymentMethodCheck: () => {
        cy.get('#paymentmethod_1').check()
        cy.clickElement('#payment-method-buttons-container > .button-1')
    },
    paymentInformationOrderCheck: (text1, text2, text3, text4) => {
        cy.get('.info b').then(($elements) => {
            expect($elements[0].innerText).to.equal(text1)
            expect($elements[1].innerText).to.equal(text2)
            expect($elements[2].innerText).to.equal(text3)
            expect($elements[3].innerText).to.equal(text4)
            cy.clickElement('#payment-info-buttons-container > .button-1')
        });
    },
    paymentMethodCard: () => {
        cy.get('#paymentmethod_2').check()
        cy.clickElement('#payment-method-buttons-container > .button-1')
    },
    paymentInformationOrderCard: () => {
        cy.get('#CreditCardType').select('Master card')
        cy.get('#CardholderName').type('Positive flow')
        cy.get('#CardNumber').type('5375 4141 1677 9991')
        cy.get('#ExpireMonth').select('4')
        cy.get('#ExpireYear').select('2024')
        cy.get('#CardCode').type('123')
        cy.clickElement('#payment-info-buttons-container > .button-1')
    },
    paymentInformationOrderCardNegative: () => {
        cy.get('#CreditCardType').select('Master card')
        cy.get('#CardholderName').type('Negative flow')
        cy.get('#CardNumber').type('abcd abcd abcd abcd')
        cy.get('#ExpireMonth').select('4')
        cy.get('#ExpireYear').select('2024')
        cy.get('#CardCode').type('123')
        cy.clickElement('#payment-info-buttons-container > .button-1')
        cy.get('.validation-summary-errors > ul > li').contains('Wrong card number')
    },
    paymentMethodPurchase: () => {
        cy.get('#paymentmethod_3').check()
        cy.clickElement('#payment-method-buttons-container > .button-1')
    },
    paymentInformationOrderPurchase: () => {
        cy.get('#PurchaseOrderNumber').type('5375414116779991')
        cy.clickElement('#payment-info-buttons-container > .button-1')
    }
}