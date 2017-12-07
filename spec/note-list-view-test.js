

function DoubleNote () {this._text = ""; this.id = 1 }
DoubleNote.prototype.text = function () { return this._text }

function DoubleNoteList (notes) { this._list = [notes] }
DoubleNoteList.prototype.returnNotes = function(){ return this._list }

var noteListView = new NoteListView(new DoubleNoteList(new DoubleNote()));

function PrintsOutListofNotes(){
  if(noteListView.printlist() !== '<ul><li><div><a href="#1"></a></div></li></ul>'){
    throw new Error("failed to return empty html list ")
  } else {
    console.log("empty html list passed")
  }
};
PrintsOutListofNotes();


function AddsTwoNotesToList(){

  function DoubleNote (text, id) {this._text = text; this.id = id }
  DoubleNote.prototype.text = function () { return this._text }

  function DoubleNoteList (note1, note2) { this._list = [note1,note2] }
  DoubleNoteList.prototype.returnNotes = function(){ return this._list }

  var noteListView = new NoteListView(new DoubleNoteList((new DoubleNote("1234567890123456789012345", 1)),(new DoubleNote("1234567890123456789012345", 2))));

  if(noteListView.printlist() !== `<ul><li><div><a href="#1">12345678901234567890</a></div></li></ul><ul><li><div><a href="#2">12345678901234567890</a></div></li></ul>`){
    throw new Error("Failed to return list of two notes")
  } else{
    console.log("returned list of two notes")
  }
}

AddsTwoNotesToList();
