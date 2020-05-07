import HelloWorldButton from './components/HelloWorldButton/index.js';
import Heading from './components/Header/index.js';
import _ from 'lodash';
import React from 'react';

const heading = new Heading();
heading.render(_.upperFirst('hello world'));
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

export default helloWorldButton;
