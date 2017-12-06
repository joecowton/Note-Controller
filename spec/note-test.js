(function(exports){
  var assert = {
    isTrue: function(describe, assertionToCheck){
      if (!assertionToCheck){
        throw new Error("assertion failed: " + assertionToCheck + "is not truthy");
      } else{
        console.log(describe)
      }
    }
  };

  function testStoreNote() {
    var note = new Note('string');
    var describe = 'Its fine!'
    assert.isTrue(describe, note.store() === 'string');
  };

  function testNoteTextProperty() {
    var note = new Note('string');
    var describe = 'Text is a property!'
    assert.isTrue(describe, note.text === 'string');
  };

testStoreNote();
testNoteTextProperty();
})(this);
