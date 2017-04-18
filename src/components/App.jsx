import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item1: '',
      item2: '',
		}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
		let name = event.target.name
		let value = event.target.value
		this.setState({[name]: value})
  }

	handleSubmit(event) {
	}

  render() {
    return (
      <div style={{textAlign: 'center'}}>
      </div>
    )
  }
}
