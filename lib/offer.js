var Model = require('./model.js');
var Controller = require('./controller.js');

var users = Model.users;
var subscription = {};

users.forEach((user) => {
  var num = user.number;

  var userName = Controller.findUser(num);
  var amazecomRevoke = Controller.findAmazecomRevoke(num);
  var amazecomGrant = Controller.findAmazecomGrant(num);
  var wondertelRevoke = Controller.findWondertelRevoke(num);
  var wondertelGrant = Controller.findWondertelGrant(num);
  
  // check if this user granted by amazecom or not
  if (!amazecomGrant && !wondertelGrant) {
    console.log("not granted at all");
    return false;
  }

  // if(!amazecomGrant) {
  //   console.log("value here: empty")
  // } else {
  //   var date = new Date(amazecomGrant.date);
  //   var month = date.getMonth()
  //   console.log("value here:", month);
  // }


  // check if amazecom earlier than wondertel
  if (amazecomGrant.date > wondertelGrant.date) {
  
    // //check if active or not in amaze
    // if (amazecomRevoke >= amazecomGrant) {
    //   //check if this user is active within period
    //   var addPeriod = amazecomGrant.period; //or whatever offset
    //   var amazecomGrantDate = new Date();
    //   var expiryDateAmazecom = amazecomGrantDate.setMonth(amazecomGrantDate.getMonth() + addPeriod);

    //   if (wondertelGrant > expiryDateAmazecom) {
    //     console.log("granted by wondertelGrant");
    //   }
    // } else {
    //   console.log("still active on amazecomGrant");
    //   // get time + period
    // }
    console.log("amazecom come first");
  } else {
    console.log("wondertel come first yaw");
  }  
});
