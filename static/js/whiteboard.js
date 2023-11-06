const addNoteBtn = document.querySelector('#addNoteBtn')
const container = document.querySelector('#container');

addNoteBtn.addEventListener('click', addNote)

function fetchNotes() {
  fetch("http://localhost:3000/whiteboard")
    .then(resp => resp.json())
    .then(data => {
      addOldNotes(data)
    })
}

function addOldNotes(data) {
  const oldNotes = data;
  oldNotes.forEach(oldNote => {
    addNote(oldNote);
  });
}

function addNote(oldNote) {
  const deleteBtn = document.createElement("img");
  deleteBtn.setAttribute("src", "../../static/img/bin.png");
  deleteBtn.addEventListener('click', removeNote, { once: true })

  const editBtn = document.createElement("img");
  editBtn.setAttribute("src", "../../static/img/edit.png");
  //editBtn.addEventListener('click', editNote, { once: true })

  const text = document.createElement("p");
  text.setAttribute("contenteditable", "true")
  text.textContent = oldNote.text || " ";
  let randomColour = Math.floor(Math.random() * 16777215).toString(16);

  const note = document.createElement("div");
  note.setAttribute("class", "box");
  note.appendChild(deleteBtn);
  note.appendChild(editBtn);
  note.appendChild(text);
  note.style.backgroundColor = "#" + randomColour;
  container.appendChild(note);
}

const removeNote = (e) => {
  e.currentTarget.parentNode.remove();
}

// const editNote = (e) => {
// }

fetchNotes();
