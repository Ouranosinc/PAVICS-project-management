var server = require('./../server/server');
var db = server.dataSources.db;
var lbTables = [
  // Built-in
  'User',
  'AccessToken',
  'ACL',
  'RoleMapping',
  'Role',
  // Custom
  'Dataset',
  'Facet',
  'Project',
  'Research',
  'Task',
  'Workflow'
];
db.automigrate(lbTables, function(er) {
  if (er) throw er;
  console.log('Loopback tables [' + lbTables + '] created in ', db.adapter.name);
  db.disconnect();
});
