(function(exports){
  var noteList = new NoteList();

  function testSavesNoteIntoArray (){
    if(noteList.saveList("note") !== ["note"] ) {
      throw new Error ("You're note is not in there")
    } else {
      console.log("Note saved!")
    }
  };

})(this);
