export default function request (url, method = 'GET') {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.send()

    xhr.onload = function () {
      if (this.status >= 400) {
        return reject({ status: this.status, error: 'Request error' })
      }
      const data = JSON.parse(this.responseText)
      return resolve({ data, status: this.status })
    }

    xhr.onerror = function () {
      return reject({ status: this.status, error: 'Request error' })
    }
  })
}
