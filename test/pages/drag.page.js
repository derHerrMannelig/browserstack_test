class DragPage {
    get dragTitle () {
        return $(`//android.widget.TextView[@text="Drag and Drop"]`);
    }

    get dragCongrats () {
        return $(`//android.widget.TextView[@text="Congratulations"]`);
    }

    get retryBtn () {
        return $(`//android.view.ViewGroup[@content-desc="button-Retry"]`);
    }
}

module.exports = new DragPage();