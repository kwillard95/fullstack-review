const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/repos', {useNewUrlParser: true}).then(
  () => {console.log('ready!')}
).catch(function(err) {
  console.log('error')
})


let repoSchema = mongoose.Schema({
  // TODO: your schema here!
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;