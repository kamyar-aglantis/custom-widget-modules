var MySimpleModule = {
  message: "Hello from MySimpleModule!",
  showMessage: function () {
    console.log(this.message);
    return this.message;
  },

  // Additional utility methods for ThingsBoard widgets
  init: function (ctx) {
    console.log("MySimpleModule initialized for widget:", ctx);
    return this;
  },

  getWidgetMessage: function (widgetTitle) {
    return this.message + " Widget: " + (widgetTitle || "Unknown");
  },
};

// Make it available globally for ThingsBoard widget environment
window.MySimpleModule = MySimpleModule;
