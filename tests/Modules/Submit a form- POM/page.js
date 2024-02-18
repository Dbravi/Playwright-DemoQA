const { expect } = require('@playwright/test');
const formData  = require('./data.json');

exports.PlaywrightDevPage = class PlaywrightDevPage {

//SELECTORS
  constructor(page) {
    this.page = page;
    this.basePage= 'https://demoqa.com/automation-practice-form';
    this.firstName= page.getByPlaceholder('First Name');
    this.lastName= page.getByPlaceholder('Last Name');
    this.email= page.getByPlaceholder('name@example.com');
    this.gender= page.getByText('Male', { exact: true });
    this.phoneNumber= page.getByPlaceholder('Mobile Number');
    this.submitButton=page.getByRole('button', { name: 'Submit' });
    this.modal=page.locator('#example-modal-sizes-title-lg');
  }

//ACTIONS
  async navigate() {
    await this.page.goto(this.basePage);
  }

  async fillForm(formData){
  await this.firstName.fill(formData.firstName);
  await this.lastName.fill(formData.lastName);
  await this.email.fill('damianbravi@somemail.com');
  await this.gender.click();
  await this.phoneNumber.fill('1234567890');
  }

  async clickSubmitButton() {
    await this.page.submitButton.click();
}
//VALIDATIONS

async validateModal() {
    expect(this.page.modal.toContainText('Thanks for submitting the form'));
}

};