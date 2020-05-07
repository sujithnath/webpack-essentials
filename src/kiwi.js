import Heading from './components/Header/index.js';
import KiwiImage from './components/kiwiImage/index.js';
import _ from 'lodash';
import React from 'react';

const heading = new Heading();
heading.render(_.upperFirst('kiwi'));
const kiwiImage = new KiwiImage();
kiwiImage.render();
