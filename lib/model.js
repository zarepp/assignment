var fs = require('fs');
var accounts = JSON.parse(fs.readFileSync('../data/accounts.json', 'utf8'));
var amazecom = JSON.parse( fs.readFileSync('../data/amazecom.json', 'utf8'));
var wondertel = JSON.parse(fs.readFileSync('../data/wondertel.json', 'utf8'));


var Model = {
  users: accounts.users.map((user) => (user)),
  amazecomRevoke: amazecom.revocations.map((revocation) => (revocation)),
  amazecomGrant: amazecom.grants.map((grant) => (grant)),
  wondertelRevoke: wondertel.revocations.map((revocation) => (revocation)),
  wondertelGrant: wondertel.grants.map((grant) => (grant))
}

module.exports = Model;

