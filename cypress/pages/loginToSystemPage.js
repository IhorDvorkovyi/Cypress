import { selectors } from '../selectors/selectors';
import { checkoutSelectors } from '../selectors/checkoutSelectors';
export default {

    loginToSystem: () => {
        cy.clickElement('.ico-login')
        cy.get('#Email').type(selectors.emailValid)
        cy.get('#Password').type(selectors.passwordValid)
        cy.get('form > .buttons ').click()
    },
    comparePrice: () => {
        cy.clickElement("a[class='ico-cart'] span[class='cart-label']")
        let total = 0;
        cy.get('.cart tbody tr td span.product-subtotal').each(($el, index, $list) => {
            const price = $el.text();
            total += Number(price);
        })
        cy.get('.totals span.product-price').first().then(($el) => {
            let totalSum = Number($el.text());
            expect(totalSum).to.equal(total);
        });
    },
    deleteProducts: () => {
        cy.clickElement("a[class='ico-cart'] span[class='cart-label']")
        cy.get('.cart tbody input[type="checkbox"]').check();
        cy.get('.shopping-cart-page .update-cart-button').click()
    },
    billingAddrOrder: () => {
        cy.clickElement(checkoutSelectors.continueButtom)
    },
    shippingAddrOrder: () => {
        cy.clickElement('#shipping-buttons-container > .button-1')
    },
    shippingMethodOrder: () => {
        cy.clickElement('#shippingoption_0')
        cy.clickElement('#shipping-method-buttons-container > .button-1')
    },
    paymentMethodOrder: () => {
        cy.get('#paymentmethod_0').check()
        cy.clickElement('#payment-method-buttons-container > .button-1')
    },
    paymentInformationOrder: () => {
        cy.clickElement('#payment-info-buttons-container > .button-1')
    },
    confirmOrder: () => {
        cy.clickElement('#confirm-order-buttons-container > .button-1')
    },
    fillOrderParameters: () => {
        cy.get('#CountryId').select('Ukraine');
        cy.get('#StateProvinceId').select('Other (Non US)');
        cy.get('#ZipPostalCode').type('123')
        cy.get('#termsofservice').check()
        cy.clickElement('#checkout')
    }





    //cy.get('.cart tbody tr td span.product-subtotal').each(($el, index, $list) => {
    //  const price = $el.text()
    //total += Number(price);
    //}).then(() => {
    //  cy.wait(1000);
    //console.log('Total price:', total);
    //});


}