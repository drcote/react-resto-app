export default class RestoService {

  url = 'http://localhost:3001/menu';

  getMenuItems = () => {
    return fetch(this.url)
      .then(res => res.json())
      .catch(() => { throw new Error('Server Error') })
  }
}