let todoLists = {
    optional: [],
    important: [],
    urgent: [],
    immediate: []
};

let addOptional;
let formOptional;
let inputOptional;

let addImportant;
let formImportant;

let addUrgent;
let formUrgent;

let addImmediate;
let formImmediate;

$(document).ready(() => {
  setupOptionalBoard();
  setupImportantBoard();
  setupUrgentBoard();
  setupImmediateBoard();
});

function setupOptionalBoard() {
  addOptional = $("#add-optional");
  formOptional = $("#form-optional");
  inputOptional = $("#input-optional");

  addOptional.click(() => {
    if (addOptional.html() !== "remove") {
      $("#form-optional").slideDown();
      $("#add-optional").html("remove");
    } else {
      $("#form-optional").slideUp();
      $("#add-optional").html("add");
    }
  });

  formOptional.submit((e) => {
    e.preventDefault();
    alert(inputOptional.val());
  });
}

function setupImportantBoard() {
  addImportant = $("#add-important");
  formImportant = $("#form-important");

  addImportant.click(() => {
    if (addImportant.html() !== "remove") {
      $("#form-important").slideDown();
      $("#add-important").html("remove");
    } else {
      $("#form-important").slideUp();
      $("#add-important").html("add");
    }
  });
}

function setupUrgentBoard() {
  addUrgent = $("#add-urgent");
  formUrgent = $("#form-urgent");

  addUrgent.click(() => {
    if (addUrgent.html() !== "remove") {
      $("#form-urgent").slideDown();
      $("#add-urgent").html("remove");
    } else {
      $("#form-urgent").slideUp();
      $("#add-urgent").html("add");
    }
  });
}

function setupImmediateBoard() {
  addImmediate = $("#add-immediate");
  formImmediate = $("#form-immediate");

  addImmediate.click(() => {
    if (addImmediate.html() !== "remove") {
      $("#form-immediate").slideDown();
      $("#add-immediate").html("remove");
    } else {
      $("#form-immediate").slideUp();
      $("#add-immediate").html("add");
    }
  });
}
