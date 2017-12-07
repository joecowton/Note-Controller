

function DoubleNote () {
  this.text = ""
  this.id = 1
}

function DoubleNoteList (notes) {
  this._list = [notes]
}
DoubleNoteList.prototype.list = function(){
  return this._list;
}

var noteListView = new NoteListView(new DoubleNoteList(new DoubleNote("", 1)));
// var noteListView = new NoteListView();
function PrintsOutListofNotes(){
  console.log(noteListView.noteList.list())
  if(noteListView.printlist() !== ''){
    throw new Error("failed to return empty html list ")
  } else {
    console.log("empty html list passed")
  }
};
PrintsOutListofNotes();
