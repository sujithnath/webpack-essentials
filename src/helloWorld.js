import HelloWorldButton from './components/HelloWorldButton/index.js';
import Heading from './components/Header/index.js';

const heading = new Heading();
heading.render('hello world');
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

export default helloWorldButton;
