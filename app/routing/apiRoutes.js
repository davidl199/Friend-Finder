// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");
//var waitListData = require("../data/waitinglistData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/admin", function(req, res) {
    //res.json(tableData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    /* if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    } */
    console.log("Post friends api");
    friendsData.push(req.body);
    console.log(friendsData);
    //console.log(req.body);
    // for(i=0;i < friendsData.length; i++) {
    //   console.log(friendsData[i].scores[i])
    // }
    // console.log(friendsData[0].name + " " + friendsData[0].scores[0]);
    // console.log(friendsData[0].name + " " + friendsData[0].scores[1]);
    // console.log(friendsData[0].name + " " + friendsData[0].scores[2]);

    // console.log(friendsData[1].name + " " + friendsData[1].scores[0]);
    res.json(friendsData[0]);
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    /* tableData = [];
    waitListData = [];

    console.log(tableData); */
  });
};
