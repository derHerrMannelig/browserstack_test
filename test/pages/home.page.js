class HomePage {
    get webdriverLogo () {
        return $(`//android.widget.ScrollView[@content-desc="Home-screen"]/android.view.ViewGroup/android.widget.ImageView[1]`);
    }

    get appDesc () {
        return $(`//android.widget.TextView[@text="Demo app for the appium-boilerplate"]`);
    }

    get webviewBtn () {
        return $(`//android.widget.Button[@content-desc="Webview"]`);
    }

    get dragBtn () {
        return $(`//android.widget.Button[@content-desc="Drag"]`);
    }

    get loginBtn () {
        return $(`//android.widget.Button[@content-desc="Login"]`);
    }
}

module.exports = new HomePage();