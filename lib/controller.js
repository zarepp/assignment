var Model = require('./model.js');

var Controller = {
  findUser: (num) => {
    var user = Model.users.find(user => user.number === num);
    return user;
  },

  findAmazecomRevoke: (num) => {
    var amazecomRevoke = Model.amazecomRevoke.find(amazecom => amazecom.number === num);
    if (!amazecomRevoke) {
      return null;
    }
    return amazecomRevoke;
  },

  findAmazecomGrant: (num) => {
    var amazecomGrant = Model.amazecomGrant.find(user => user.number === num);
    if (!amazecomGrant) {
      return null;
    }
    return amazecomGrant;
  },

  findWondertelRevoke: (num) => {
    var wondertelRevoke = Model.wondertelRevoke.find(amazecom => amazecom.number === num);
    if (!wondertelRevoke) {
      return null;
    }
    return wondertelRevoke;
  },

  findWondertelGrant: (num) => {
    var wondertelGrant = Model.wondertelGrant.find(user => user.number === num);
    if (!wondertelGrant) {
      return null;
    }
    return wondertelGrant;
  },
};

module.exports = Controller;