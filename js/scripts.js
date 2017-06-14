// business logic:
function Account(name, initial) {
  this.fullName = name;
  this.initial = initial;
  this.balance = initial;
  this.deposit;
  this.withdraw;
}

Account.prototype.addToBalance = function(depositParameter) {
  this.deposit = depositParameter;
  this.balance = this.balance + this.deposit;
  console.log(this.balance);
  return this.balance + this.deposit
}

function resetFields() {
  $("input#new-name").val("");
  // $("input#initial-deposit").val("0");
  $("input#deposit").val("0");
  $("input#withdraw").val("0");
}

//user logic:

$(document).ready(function() {
  $("#new-account").submit(function(event) {
    event.preventDefault();

  var fullName = $("input#new-name").val();
  var initial = parseInt($("input#initial-deposit").val());
  var deposit = parseInt($("input#deposit").val());
  var withdraw = parseInt($("input#withdraw").val());


  var bankAccount = new Account(fullName, initial);

  var newDeposit = bankAccount.addToBalance(deposit);

  console.log(bankAccount);

  // var accountBalance = new Balance(deposit, withdraw);
  $(".panel").show();
  $(".name").text(bankAccount.fullName);
  // $(".money").text("$" + bankAccount.Balance());

  resetFields();

  });
});
