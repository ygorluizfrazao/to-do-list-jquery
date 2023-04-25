const NOT_DONE = false;
const DONE = true;

let todoLists;

let addOptional;
let formOptional;
let inputOptional;
let listOptional;

let addImportant;
let formImportant;
let inputImportant;
let listImportant;

let addUrgent;
let formUrgent;
let inputUrgent;
let listUrgent;

let addImmediate;
let formImmediate;
let inputImmediate;
let listImmediate;

$(document).ready(() => {
  try {
    todoLists = loadCookie();
  } catch (error) {
    todoLists = {
      optional: [],
      important: [],
      urgent: [],
      immediate: [],
    };
  }

  setupOptionalBoard();
  setupImportantBoard();
  setupUrgentBoard();
  setupImmediateBoard();
  updateBoards();
});

function loadCookie() {
  const cookie = JSON.parse(document.cookie);
  if (
    cookie.optional == undefined ||
    cookie.important == undefined ||
    cookie.urgent == undefined ||
    cookie.immediate == undefined
  ) {
    return {
      optional: [],
      important: [],
      urgent: [],
      immediate: [],
    };
  } else {
    return cookie;
  }
}

function setupOptionalBoard() {
  addOptional = $("#add-optional");
  formOptional = $("#form-optional");
  inputOptional = $("#input-optional");
  listOptional = $("#list-optional");

  addOptional.click(() => {
    toggleOptionalForm();
  });

  formOptional.submit((e) => {
    e.preventDefault();
    addTodo(todoLists.optional, {
      value: inputOptional.val(),
      status: NOT_DONE,
    });
    toggleOptionalForm();
  });
}

function toggleOptionalForm() {
  if (addOptional.html() !== "remove") {
    formOptional.slideDown();
    addOptional.html("remove");
    inputOptional.val("");
  } else {
    formOptional.slideUp();
    addOptional.html("add");
    inputOptional.val("");
  }
}

function setupImportantBoard() {
  addImportant = $("#add-important");
  formImportant = $("#form-important");
  inputImportant = $("#input-important");
  listImportant = $("#list-important");

  addImportant.click(() => {
    toggleImportantForm();
  });

  formImportant.submit((e) => {
    e.preventDefault();
    addTodo(todoLists.important, {
      value: inputImportant.val(),
      status: NOT_DONE,
    });
    toggleImportantForm();
  });
}

function toggleImportantForm() {
  if (addImportant.html() !== "remove") {
    formImportant.slideDown();
    addImportant.html("remove");
    inputImportant.val("");
  } else {
    formImportant.slideUp();
    addImportant.html("add");
    inputImportant.val("");
  }
}

function setupUrgentBoard() {
  addUrgent = $("#add-urgent");
  formUrgent = $("#form-urgent");
  inputUrgent = $("#input-urgent");
  listUrgent = $("#list-urgent");

  addUrgent.click(() => {
    toggleUrgentForm();
  });

  formUrgent.submit((e) => {
    e.preventDefault();
    addTodo(todoLists.urgent, { value: inputUrgent.val(), status: NOT_DONE });
    toggleUrgentForm();
  });
}

function toggleUrgentForm() {
  if (addUrgent.html() !== "remove") {
    formUrgent.slideDown();
    addUrgent.html("remove");
    inputUrgent.val("");
  } else {
    formUrgent.slideUp();
    addUrgent.html("add");
    inputUrgent.val("");
  }
}

function setupImmediateBoard() {
  addImmediate = $("#add-immediate");
  formImmediate = $("#form-immediate");
  inputImmediate = $("#input-immediate");
  listImmediate = $("#list-immediate");

  addImmediate.click(() => {
    toggleImmediateForm();
  });

  formImmediate.submit((e) => {
    e.preventDefault();
    addTodo(todoLists.immediate, {
      value: inputImmediate.val(),
      status: NOT_DONE,
    });
    toggleImmediateForm();
  });
}

function toggleImmediateForm() {
  if (addImmediate.html() !== "remove") {
    formImmediate.slideDown();
    addImmediate.html("remove");
    inputImmediate.val("");
  } else {
    formImmediate.slideUp();
    addImmediate.html("add");
    inputImmediate.val("");
  }
}

function addTodo(to, data) {
  to.push(data);
  document.cookie = JSON.stringify(todoLists);
  updateBoards();
}

function updateBoards() {
  listOptional.html("");
  todoLists.optional.forEach((item) => {
    const newItem = $("<li></li>");
    const content = $(`<span>${item.value}</span>`);

    updateItemStatus(item, content);

    newItem.click(() => {
      updateItemStatus(item, content, !item.status);
    });

    content.appendTo(newItem);
    newItem.appendTo(listOptional);
  });

  listImportant.html("");
  todoLists.important.forEach((item) => {
    const newItem = $("<li></li>");
    const content = $(`<span>${item.value}</span>`);

    updateItemStatus(item, content);

    newItem.click(() => {
      updateItemStatus(item, content, !item.status);
    });

    content.appendTo(newItem);
    newItem.appendTo(listImportant);
  });

  listUrgent.html("");
  todoLists.urgent.forEach((item) => {
    const newItem = $("<li></li>");
    const content = $(`<span>${item.value}</span>`);

    updateItemStatus(item, content);

    newItem.click(() => {
      updateItemStatus(item, content, !item.status);
    });

    content.appendTo(newItem);
    newItem.appendTo(listUrgent);
  });

  listImmediate.html("");
  todoLists.immediate.forEach((item) => {
    const newItem = $("<li></li>");
    const content = $(`<span>${item.value}</span>`);

    updateItemStatus(item, content);

    newItem.click(() => {
      updateItemStatus(item, content, !item.status);
    });

    content.appendTo(newItem);
    newItem.appendTo(listImmediate);
  });
}

function updateItemStatus(item, content, status) {
  if (status != undefined && status !== null) {
    item.status = status;
    document.cookie = JSON.stringify(todoLists);
  }

  if (item.status === NOT_DONE) {
    content.removeClass("done");
    content.addClass("not-done");
  } else {
    content.removeClass("not-done");
    content.addClass("done");
  }
}
