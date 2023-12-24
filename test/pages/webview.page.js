class WebviewPage {
    get webdriverDesc () {
        return $(`//android.widget.TextView[@text="Next-gen browser and mobile automation test framework for Node.js"]`);
    }
    get getStartedBtn () {
        return $(`//android.view.View[@content-desc="Get Started"]`);
    }
}

module.exports = new WebviewPage();