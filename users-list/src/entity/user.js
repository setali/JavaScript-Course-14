import { COLUMNS } from '../utils/constants'

class User {
  constructor ({ id, name, username, email, address: _address }) {
    this.id = id ** 2
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

export default User
