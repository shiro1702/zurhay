var fs = require('fs');

exports.readFiles = function(dirname, onFileContent, onError, onEnd) {

  console.log(dirname);
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    console.log(filenames.length);
    var readDone = 0;
    filenames.forEach(function(filename) {
      fs.readFile(dirname + filename, 'utf-8', function(err, content) {
        readDone++;
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content);
        if (readDone === filenames.length) {
          onEnd();
        };
      });
    });
  });
}