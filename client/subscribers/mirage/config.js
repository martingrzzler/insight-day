import ENV from 'subscribers/config/environment';

import { Response } from 'ember-cli-mirage';

export default function () {
  this.urlPrefix = ENV.APP.apiBaseHost;

  this.get('/subscribers', (schema) => {
    return schema.subscribers.all();
  });

  this.post('/subscribers', (schema, request) => {
    let body = null;
    try {
      body = JSON.parse(request.requestBody);
      if (!body) {
        throw new Error('Body missing');
      }
    } catch (error) {
      return new Response(422, {}, { errors: [error] });
    }

    const missingProperties = [];
    ['firstName', 'lastName', 'email', 'gender', 'state'].forEach((key) => {
      if (!body[key] && typeof body[key] !== 'boolean') {
        missingProperties.push(key);
      }
    });

    if (missingProperties.length > 0) {
      return new Response(
        422,
        {},
        { errors: [`Missing properties: ${missingProperties.join(', ')}`] }
      );
    }

    const { firstName, lastName, email, gender, state } = body;
    return schema.subscribers.create({ firstName, lastName, email, gender, state });
  });

  this.put('/subscribers/:id', (schema, request) => {
    let body = null;
    const { id } = request.params;

    const model = schema.subscribers.find(id);
    if (!model) {
      return new Response(404, {}, { errors: [`Subscriber not found`] });
    }

    try {
      body = JSON.parse(request.requestBody);
      if (!body) {
        throw new Error('Body missing');
      }
    } catch (error) {
      return new Response(422, {}, { errors: [error] });
    }

    const newModel = model.update(body);

    return newModel;
  });

  this.delete('/subscribers/:id', (schema, request) => {
    const { id } = request.params;

    const model = schema.subscribers.find(id);

    if (!model) {
      return new Response(404, {}, { errors: [`Subscriber not found`] });
    }

    model.destroy();

    return;
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
}
