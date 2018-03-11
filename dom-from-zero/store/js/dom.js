'use strict';

// const node = {
//     name: 'h1',
//     props: {
//       class: 'main-title'
//     },
//     childs: [
//       'Заголовок'
//     ]
//   };
  
//       const elementT = createElement(node);
//       const wrapper = document.getElementById('root');
//       wrapper.appendChild(elementT);

function createElement(content) {
    if ((typeof content === 'string') || (typeof content === 'number') || (content === true)) {
        return document.createTextNode(content);
    }

    if ((content === undefined) || (content === null) || (content === false)) {
        return document.createTextNode('');
    }

    const element = document.createElement(content.name || 'div');
    
    if (content.props && Object.keys(content.props).length > 0) {
        Object.keys(content.props).forEach(key => {
            if (content.props[key]) element.setAttribute(key, content.props[key]);
        });
    }
    if (content.childs && content.childs.length > 0) {
        content.childs.forEach(child => {
            element.appendChild(createElement(child));
        });
    }
    return element;
}
