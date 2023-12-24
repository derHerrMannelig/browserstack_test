class LoginPage {
    get loginTitle () {
        return $(`//android.widget.TextView[@text="Login / Sign up Form"]`);
    }
    get loginTab () {
        return $(`//android.view.ViewGroup[@content-desc="button-login-container"]`);
    }
    get signUpTab () {
        return $(`//android.view.ViewGroup[@content-desc="button-sign-up-container"]`);
    }
    get inputEmail () {
        return $(`//android.widget.EditText[@content-desc="input-email"]`);
    }
    get inputPassword () {
        return $(`//android.widget.EditText[@content-desc="input-password"]`);
    }
    get inputRepeatPassword () {
        return $(`//android.widget.EditText[@content-desc="input-repeat-password"]`);
    }
    get btnLogin () {
        return $(`//android.view.ViewGroup[@content-desc="button-LOGIN"]`);
    }
    get btnSignUp () {
        return $(`//android.view.ViewGroup[@content-desc="button-SIGN UP"]`);
    }
    get alertSuccess () {
        return $(`//android.widget.TextView[@resource-id="android:id/alertTitle"]`);
    }
    get btnAlert () {
        return $(`//android.widget.Button[@resource-id="android:id/button1"]`);
    }

    async fillCredentials(email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        if (await this.inputRepeatPassword.isExisting()) {
            await this.inputRepeatPassword.setValue(password);
        }
    }
}

module.exports = new LoginPage();