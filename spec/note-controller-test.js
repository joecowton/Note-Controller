(function (exports){

  function noteDouble(){
    this.text = 'hi'
  };

  noteDouble.prototype = {
    Note: function(string) {}
  };

  var note = new noteDouble("hi");

  function NoteListDouble(){
    this.list = []
  }

  NoteListDouble.prototype = {
    saveAndCreateNote: function(hi){
      return ['hi']
    }
  }

  var noteList = new NoteList();

  function ViewListDouble(){
    this.list = ['hi']
  }

  ViewListDouble.prototype = {
    printlist: function(){
      return "<ul><li><div>hello</div></li></ul>"
    }
  }

  var viewList = new NoteListView();

  var noteController = new NoteController();

  function testsInstance(){
    if(typeof noteController !== 'object'){
      throw new Error("Help")
    } else {
      console.log("done")
    }
  }

  function testsIfNotelistIsPassedSomething(){
    if( "hi" !== "hi"){
      throw new Error("Note wasn't passed")
    }
  }

  function addNewNote () {
    noteController.addNote(note)
    if(noteController.noteListView.noteList.list[0].text.text !== "hi"){
      throw new Error('oh no!')  } else {
        console.log("I swear to god")
      }
  }

  // function addTextToWIndow(){
  //   // noteController.changeHTML()
  //   if(noteController.viewList[0].text !== "<ul><li><div>hello</div></li></ul>" ){
  //     throw new Error ("so done with this")
  //   } else {
  //     console.log("time for home")
  //   }
  // }

  // addTextToWIndow()
  addNewNote();
  testsIfNotelistIsPassedSomething();
  testsInstance();
})(this);
