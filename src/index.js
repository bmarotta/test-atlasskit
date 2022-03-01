import { Editor } from '@atlaskit/editor-core';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // Create a new Editor class just to force the dependency
    new Editor();
  
    return element;
}
  
document.body.appendChild(component());