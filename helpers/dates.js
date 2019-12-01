const moment = require("moment");

module.exports = {
  
  readableDate: function(date) {
    return moment(new Date(date)).format("MMMM D, YYYY"); 
  }
}