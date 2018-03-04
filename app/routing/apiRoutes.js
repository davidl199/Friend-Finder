// ===============================================================================
// LOAD DATA
// ===============================================================================

var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
 
  // API POST Requests
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {

    var newFriend = req.body;
    var arr = newFriend.scores;
    var newFriendScore = 0
    for( var i in arr) {
       newFriendScore += parseInt(arr[i]);
    }
   
    var scoreTotal = 0
    var bestScore = 100;
    var frndArray = [];
    var frnd = null;
    var match = friendsData[0];
    var diff = 0;
    for(i = 0; i < friendsData.length; i++) {
       frnd = friendsData[i];
       frndArray = friendsData[i].scores;
       for(var x in friendsData[i].scores) {
           scoreTotal += parseInt(frndArray[x]);
       }
       diff = newFriendScore - scoreTotal;
       diff = Math.abs(diff);
       if(diff < bestScore) {
           bestScore = diff;
           match = frnd;
       }
       scoreTotal = 0;
    }
  
    friendsData.push(newFriend);
    res.json(match);
  });
};
