
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




  var noteController = new NoteController();

  function testsInstance(){
    if(typeof noteController !== 'object'){
      throw new Error("Help")
    } else {
      console.log("noteController is an instance of NoteController")
    }
  }


  function testSwitchHTML () {
    var noteController = new NoteController();
    noteController.addNote('hi')
    if(noteController.switchHTML() !== `<ul><li><div><a href="#notes/1">hi</a></div></li></ul>`){
      throw new Error('oh no!')  } else {
        console.log("note added as html")
      }
  }


  function addNotes() {

    noteController.addNote("note here")
    noteController.addNote("note here 2")
    noteController.switchHTML();
    noteController.singleNotePost();
    noteController.listenForSubmit();

  }


  testSwitchHTML();
  testsInstance();
  addNotes();
