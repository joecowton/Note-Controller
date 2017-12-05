(function(exports) {

var note = new Note("hello");
var list = new NoteList();
var viewlist = new ViewList(list);

function PrintsOutListofNotes(){
  list.saveList(note)
  console.log(list)
  if(viewlist.printlist() !== "<ul><li><div>hello</div></li></ul>"){
    throw new Error("This ain't a correct format ")
  } else {
    console.log("happy days")
  }
};

  PrintsOutListofNotes();
})(this);
