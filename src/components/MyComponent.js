
const React = require('react');

export default class IndecisionApp extends React.Component {
  state = {
    title: 'Entry Point for App',
    subtitle: 'Start Coding!',
  }
  componentDidMount = () => {
    console.log('componentDidMount: I get called on first render of this component');
  }
  componentDidUpdate = (prevProps, prevState) => {
    console.log('componentDidUpdate: I get called on every render of this component');
  }
  render() {
    return (
      <div>
        <h1 className='my-component__title'>{this.state.title}</h1>
        <h2 className='my-component__subtitle'>{this.state.subtitle}</h2>
      </div>
    )
  }
}