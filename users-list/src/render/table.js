import User from "../entity/user"
import renderTableHead from "./table-head"
import '../assets/css/table.css'

export default function renderTable (users) {
  const table = document.createElement('table')
  table.setAttribute('border', 1)
  // table.setAttribute('width', '100%')

  table.appendChild(renderTableHead())

  users.forEach((el, index) => {
    const user = new User(el)

    table.appendChild(user.render())
  })

  return table
}
