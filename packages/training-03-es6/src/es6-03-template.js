'use strict';

function show(template) {
  console.log('template', template);
  console.log('arguments', arguments);
}

let hello = 'Bonjour';
let world = 'vous';

show`One${hello}Two${world}Three`;

let template = 'One${hello}Two${world}Three';

show`${template}`;
