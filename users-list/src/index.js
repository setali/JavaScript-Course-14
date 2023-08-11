import request from './utils/request'
import { URL } from './utils/constants'
import renderPage from './render/page'

request(URL).then(({ data }) => renderPage(data))
