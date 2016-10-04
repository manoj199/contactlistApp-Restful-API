var express =  require('express');
var app =  express();



app.use(express.static(__dirname + "/public"));
app.get('/contactlist', function(req, res){
  console.log("I received a get request")

  person1 = {
      name: 'Manoj',
      email: 'manojingalagi199@gmail.com',
      number: '8867813367'
  };

  person2 = {
      name: 'Manju',
      email: 'manjuingalagi052@gmail.com',
      number: '9035782155'
  };

  person3 = {
      name: 'Suraj',
      email: 'Suraj@gmail.com',
      number: '8451126451'
  };

  var contactlist = [person1,person2,person3];
  res.json(contactlist);
});

app.listen(3000);
console.log("Server running on port 3000");
