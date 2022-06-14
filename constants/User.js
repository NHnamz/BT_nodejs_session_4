const adminList = require("../constants/Admin");
const memberList = require("../constants/Member");
const guestList = require("../constants/Guest");

function addRole(array, role) {
  for (let index = 0; index < array.length; index++) {
    array[index].role = role;
  }
  return array;
}

addRole(adminList, "Admin");
addRole(memberList, "Member");
addRole(guestList, "Guest");

const userList = adminList.concat(memberList).concat(guestList);

module.exports = userList;