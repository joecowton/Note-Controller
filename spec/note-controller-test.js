window.onload = function() {

  var assert = {
    isTrue: function(describe, assertionToCheck){
      if (!assertionToCheck){
        throw new Error("assertion failed: " + assertionToCheck + "is not truthy");
      } else{
        console.log('is true')
      }
    },

    isContained: function(describe, id, expected){
      if (document.getElementById(id) === expected){
        throw new Error(describe + "is not contained");
      } else{
        console.log('is true')
      }
    }
  };


  function noteDouble(){
    this._text = 'hi'
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

  // function addNewNote () {
  //   noteController.addNote(note)
  //   if(noteController.noteListView.noteList.list[0].text.text !== "hi"){
  //     throw new Error('oh no!')  } else {
  //       console.log("note added")
  //     }
  // }

  function testSwitchHTML() {
    var noteController = new NoteController()
    noteController.addNote('hi')
    noteController.switchHTML()
    assert.isContained("rendered HTML", 'app', "<ul><li><div>hi</div></li></ul>"  )
  }

  testSwitchHTML();
  // addNewNote();
  testsIfNotelistIsPassedSomething();
  testsInstance();
}
