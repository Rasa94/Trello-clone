export function getDragAfterElement(e, direction) {
  let draggableElements;

  if (direction == 'y') {
    draggableElements = [...document.querySelectorAll(".listItem")];
  } else if (direction == 'x') {
    draggableElements = [...document.querySelectorAll(".cat")];
  }
  
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    let offset;

    if (direction == 'y') {
      offset = e - box.top - box.height / 2;
    } else if (direction == 'x') {
      offset = e - box.left - box.width / 2;
    }
    
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}