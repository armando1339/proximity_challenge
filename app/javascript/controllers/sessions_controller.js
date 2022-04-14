import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['email', 'password', 'submitButton'];

  connect() {
    this.submitButtonTarget.disabled = true;
  }

  validateEmail(event) {
    event.preventDefault()
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    this.showInvalidField( reg.test(this.emailTarget.value) == false, this.emailTarget )
    this.disableForm()
  }

  validatePassword(event) {
    event.preventDefault()

    this.showInvalidField(this.passwordTarget.value.length <= 6, this.passwordTarget)
    this.disableForm()
  }

  showInvalidField(condition, target) {
    if (condition){
      target.classList.add('is-invalid');
    } else {
      target.classList.remove('is-invalid');
      target.classList.add('is-valid');
    }
  }

  disableForm() {
    let email_valid = this.emailTarget.classList.contains('is-valid')
    let password_valid = this.passwordTarget.classList.contains('is-valid')

    if (email_valid && password_valid) {
      this.submitButtonTarget.disabled = false;
    }
  }
}
