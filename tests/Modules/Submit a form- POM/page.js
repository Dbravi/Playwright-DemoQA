import { expect } from '@playwright/test';

export class basePage {

//SELECTORS
  constructor(page) {
    this.page = page;
    
    this.baseUrl= 'https://demoqa.com/automation-practice-form';
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
    await this.page.goto(this.baseUrl);
  }

  async fillForm(input){
  await this.firstName.fill(input.firstName);
  await this.lastName.fill(input.lastName);
  await this.email.fill(input.email);
  await this.gender.click();
  await this.phoneNumber.fill(input.mobileNumber);
  }

  async clickSubmitButton() {
    await this.page.submitButton.click();
}
//VALIDATIONS

async validateModal() {
    expect(this.page.modal.toContainText('Thanks for submitting the form'));
}

}