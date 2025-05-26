var MySimpleModule = {
  message: "Hello from MySimpleModule!",
  showMessage: function () {
    console.log(this.message);
    return this.message;
  },
};
