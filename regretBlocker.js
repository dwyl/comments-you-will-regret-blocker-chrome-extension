// @flow
window.addEventListener('DOMContentLoaded', () => {
  const textareas = [...document.querySelectorAll('textarea')]
  textareas.map((textarea) => {
    textarea.addEventListener('change', () => {
      console.log(textarea.textContent.split())
    })
  })
})
