import axios from 'axios'

console.log(process)

let instance = ''

if (process.browser) {
    instance = axios.create({
        baseURL: 'http://localhost:3000/api/v2/',
    })
} else {
    instance = axios.create({
        baseURL: 'http://tierklinik.webfactional.com/api/v2/',
    })
}
instance.defaults.headers.common['Accept'] = 'application/json'

export default instance
