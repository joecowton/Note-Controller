(function(exports){

  var noteList = new NoteList();
  var note = new Note("hi");
  
  function array (){
    noteList.saveList(note)
    if(noteList.list[0].text !== "hi" ) {
      throw new Error ("You're note is not in there")
    } else {
      console.log("Note saved!")
    }
  };


  array();
})(this);
