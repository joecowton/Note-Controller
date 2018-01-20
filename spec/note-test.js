function testStoreNote() {
  var note = new Note('string');
  var describe = 'should store a note'
  assert.isTrue(describe, note.text() === 'string');
};

function testNoteTextProperty() {
  var note = new Note('string');
  var describe = 'Text is a property!'
  assert.isTrue(describe, note.text() === 'string');
};

testStoreNote();
testNoteTextProperty();
