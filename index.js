// var url = 'https://jsonplaceholder.ir/users/1'
var url = 'http://localhost:3000/'
var placeHolder = document.getElementById('data')

var xhr = new XMLHttpRequest()

function getData (url, method = 'GET') {
  xhr.onreadystatechange = function () {
    console.log(xhr.readyState)
  }
  xhr.open(method, url)

  xhr.send()

  xhr.onload = function () {
    var data = JSON.parse(xhr.response)

    placeHolder.textContent = data.name
  }

  xhr.onerror = function () {
    console.log('Error')
  }
}

document.getElementById('action').addEventListener('click', function () {
  getData(url)
})

// function setCookie (name, value, time) {
//   var date = new Date()

//   date.setSeconds(date.getSeconds() + time)

//   document.cookie =
//     name + '=' + value + ';expires=' + date.toUTCString() + ';path=/'
// }

// function deleteCookie (name) {
//   setCookie(name, '', 0)
// }

// function getCookie (name) {
//   return Object.fromEntries(
//     document.cookie.split('; ').map(function (el) {
//       return el.split('=')
//     })
//   )[name]
// }

// var Cookies = {
//   set: setCookie,
//   get: getCookie,
//   remove: deleteCookie
// }

// console.log(Cookies.get('name'))
