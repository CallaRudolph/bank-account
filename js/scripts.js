function Account(name, initial, deposit, withdraw) {
  this.fullName = name;
  this.initial = initial
  // this.balance = [];
  this.deposit = deposit;
  this.withdraw = withdraw;
}


Account.prototype.Balance = function () {
  return (this.initial + this.deposit - this.withdraw);
}


$(document).ready(function() {
  $("#new-account").submit(function(event) {
    event.preventDefault();

  var fullName = $("input#new-name").val();
  var initial = parseInt($("input#initial-deposit").val());
  var deposit = parseInt($("input#deposit").val());
  var withdraw = parseInt($("input#withdraw").val());

  var bankAccount = new Account(fullName, initial, deposit, withdraw);

  // var accountBalance = new Balance(deposit, withdraw);

  $(".money").text("$" + bankAccount.Balance());

  });
});
