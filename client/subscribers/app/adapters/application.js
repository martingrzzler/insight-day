import RESTAdapter from '@ember-data/adapter/rest';
import ENV from 'subscribers/config/environment';

export default class ApplicationAdapter extends RESTAdapter {
  host = ENV.APP.apiBaseHost;
}
