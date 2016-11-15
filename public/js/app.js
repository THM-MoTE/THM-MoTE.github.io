$(document).foundation()
$(document).ready(() => {
  const imgElem = $('.tool-img')
  console.log(imgElem)
  let oldMaxWidth = '';

    console.log(imgElem)

    $(imgElem).click((event) => {
      const imgElem = event.target;

      const fullScreenExit = () => {
        if (!document.fullScreen && !document.mozFullScreen && !document.webkitIsFullScreen) {
          $(imgElem).css("max-width", oldMaxWidth)
          console.log("fullscreen exit")
        }
      }
      $(imgElem).on('fullscreenchange', fullScreenExit)
      $(imgElem).on('mozfullscreenchange', fullScreenExit)
      $(imgElem).on('webkitfullscreenchange', fullScreenExit)

      oldMaxWidth = $(imgElem).css('max-width')
      if (imgElem.requestFullScreen) {
        imgElem.requestFullScreen();
        $(imgElem).css("max-width", "100%")
      } else if (imgElem.mozRequestFullScreen) {
        imgElem.mozRequestFullScreen();
        $(imgElem).css("max-width", "100%")
      } else if (imgElem.webkitRequestFullScreen) {
        imgElem.webkitRequestFullScreen();
        $(imgElem).css("max-width", "100%")
      }
    })

})
