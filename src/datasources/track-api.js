const { RESTDataSource } = require('apollo-datasource-rest');

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    // the Catstronauts catalog is hosted on this server
    this.baseURL = 'https://desafio13.herokuapp.com/api/productos/';
  }

  getTracksForHome() {
    return this.get('tracks');
  }
  //sirve solo este
  getProds() {
    return this.get('listar');
  }

  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }

  getTrack(trackId) {
    return this.get(`track/${trackId}`);
  }

  getTrackModules(trackId) {
    return this.get(`track/${trackId}/modules`);
  }

  getModule(moduleId) {
    return this.get(`module/${moduleId}`);
  }

  incrementTrackViews(trackId) {
    return this.patch(`track/${trackId}/numberOfViews`);
  }
}

module.exports = TrackAPI;
