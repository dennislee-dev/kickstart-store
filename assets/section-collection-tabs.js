document.addEventListener('DOMContentLoaded', () => {
  let cTabs = document.querySelectorAll('.collection-tabs__tab')
  let cTabsMob = document.querySelector('.collection-tabs__mobile')

  if (cTabs.length > 0) {
    cTabs.forEach(el => {
      el.addEventListener('click', function () {
        let handle = el.getAttribute('data-handle')
        document.querySelector('.collection-hero__title').innerHTML =
          el.getAttribute('data-title')
        fetch('/collections/' + handle)
          .then(response => response.text())
          .then(html => {
            let parser = new DOMParser()
            let nHtml = parser
              .parseFromString(html, 'text/html')
              .querySelector('.product-grid-container').innerHTML
            document.querySelector('.product-grid-container').innerHTML = nHtml
          })
      })
    })
  }

  if (cTabsMob.length > 0) {
    cTabsMob.addEventListener('change', function () {
      let handle = this.value
      document.querySelector('.collection-hero__title').innerHTML =
        cTabsMob.options[cTabsMob.selectedIndex].innerHTML
      fetch('/collections/' + handle)
        .then(response => response.text())
        .then(html => {
          let parser = new DOMParser()
          let nHtml = parser
            .parseFromString(html, 'text/html')
            .querySelector('.product-grid-container').innerHTML
          document.querySelector('.product-grid-container').innerHTML = nHtml
        })
    })
  }
})
