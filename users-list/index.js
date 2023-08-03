const url = 'https://jsonplaceholder.typicode.com/users'
const COLUMNS = ['id', 'name', 'username', 'email', 'address']

function request (url, method = 'GET') {
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

request(url).then(({ data }) => renderPage(data))

function renderPage (users) {
  const root = document.getElementById('root')

  root.appendChild(renderHead())

  root.appendChild(renderTable(users))
}

class User {
  constructor ({ id, name, username, email, address: _address }) {
    this.id = id
    this.name = name
    this.username = username
    this.email = email
    this._address = _address

    // this.delete = this.delete.bind(this)
  }

  get address () {
    return `${this._address.city} ${this._address.street} ${this._address.suite}`
  }

  delete = () => this.element.remove()

  render () {
    const tr = document.createElement('tr')
    tr.setAttribute('id', `row-${this.id}`)

    this.element = tr

    COLUMNS.forEach(column => {
      const td = document.createElement('td')
      td.textContent = this[column]

      tr.appendChild(td)
    })

    const action = document.createElement('td')
    action.textContent = 'x'
    action.style.padding = '10px'
    action.style.color = 'red'
    action.style.cursor = 'pointer'
    action.addEventListener('click', this.delete)
    // action.addEventListener('click', () => this.delete())
    // action.addEventListener('click', this.delete)
    // action.addEventListener('click', function (event) {
    //     event.target.parentElement.remove()
    // })

    tr.appendChild(action)

    return tr
  }
}

function renderTable (users) {
  const table = document.createElement('table')
  table.setAttribute('border', 1)
  table.setAttribute('width', '100%')

  table.appendChild(renderTableHead())

  users.forEach((el, index) => {
    const user = new User(el)

    table.appendChild(user.render())
  })

  return table
}

function renderTableHead () {
  const tr = document.createElement('tr')

  COLUMNS.forEach(column => {
    const th = document.createElement('th')
    th.textContent = column

    tr.appendChild(th)
  })

  return tr
}

function renderHead () {
  const div = document.createElement('div')

  const h2 = document.createElement('h2')

  h2.textContent = 'Users list'

  div.appendChild(h2)

  return div
}
