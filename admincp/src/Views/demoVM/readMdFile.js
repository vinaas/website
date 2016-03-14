import {inject,LogManager} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
@inject(HttpClient)
export class ReadMdFile{
  constructor(http) {
    this.logger = LogManager.getLogger('ReadFileMd');
    http.configure(config => {
    config
      .useStandardConfiguration()
      .withBaseUrl();
  });
  this.http = http;
  }
  activate(){
    this.http.fetch(`/getSomeFileMd`)
      .then(response => response.json())
      .then(data => {
        this.logger.info('print rs', data);
        this.data=data;
      });

  }
}
