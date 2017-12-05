(function(exports){

  var noteListModel = new NoteList();
  var note = new Note("hi");

  function array (){
    noteListModel.saveAndCreateNote("hi")
    console.log("notelist"+ noteListModel.list)
    if(noteListModel.list[0].text !== "hi" ) {
      throw new Error ("You're note is not in there")
    } else {
      console.log("Note saved!")
    }
  };


  array();
})(this);
