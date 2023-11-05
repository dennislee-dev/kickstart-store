document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.learn_more').forEach(button => {
    button.addEventListener('click', function () {
      console.log("clicked")
      button
        .closest('.metaobjects_list')
        .querySelector('.modal').style.display = "block"
    })
  })

  document.querySelectorAll('.modal-content').forEach(element => {
    element.querySelector('.close').addEventListener('click', function () {
      element.closest('.modal').style.display = "none"
    })
  })
})
