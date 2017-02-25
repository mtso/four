const PROGRESS_KEY = 'progress';

function Manager(database, words) {
  var db = database;
  var progress = db.getItem(PROGRESS_KEY);

  if (progress === null) {
    reset();
  } else {
    progress = JSON.parse(progress);
  }

  function save() {
    var progressValue = JSON.stringify(progress);
    db.setItem(PROGRESS_KEY, progressValue);
  }

  function reset() {
    var progress = words.reduce(function(obj, word) {
      obj[word] = false;
      return obj;
    }, {});
    save();
  }

  function complete(word) {
    progress[word] = true;
    save();
  }

  function isComplete(word) {
    return progress[word];
  }

  this.reset = reset;
  this.complete = complete;
  this.isComplete = isComplete;
}

module.exports = Manager;