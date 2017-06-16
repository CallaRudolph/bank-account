// business logic:
function Account(name, initial) {
  this.fullName = name;
  this.initial = initial;
  this.balance = initial;
}

Account.prototype.addToBalance = function(depositParameter) {
  this.deposit = depositParameter;
  this.balance += this.deposit;
  return this.balance
}

Account.prototype.subtractFromBalance = function(withdrawalParameter) {
  this.withdrawal = withdrawalParameter;
  this.balance -= this.withdrawal;
  return this.balance
}

function resetFields() {
  $("input#new-name").val("");
  $("input#initial-deposit").val("0");
  $("input#deposit").val("0");
  $("input#withdraw").val("0");
}

//user logic:

$(document).ready(function() {
  $("#new-account").submit(function(event) {
    event.preventDefault();

    var fullName = $("input#new-name").val();
    var initial = parseInt($("input#initial-deposit").val());
    bankAccount = new Account(fullName, initial);
    $(".panel").show();
    $(".name").text(bankAccount.fullName);
    $(".money").text("$" + bankAccount.balance);
    $("#new-account").hide();
    $("#activity").show();
  });

  $("#activity").submit(function(event) {
    event.preventDefault();
    var deposit = parseInt($("input#deposit").val());
    var withdraw = parseInt($("input#withdraw").val());

    var newDeposit = bankAccount.addToBalance(deposit);
    var newWithdrawal = bankAccount.subtractFromBalance(withdraw);
    $(".money").text("$" + newDeposit);
    $(".money").text("$" + newWithdrawal);
    resetFields();
  });
});
