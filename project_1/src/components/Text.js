import React, { Component } from 'react'
import axios from 'axios'

class Text extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {
        title: null,
        text: null,
        author: null,
        type: null,
        artist: null,
        writer: null
      }
    }

    this.getText = this.getText.bind(this)
  }

  componentWillMount() {
      this.getText(this.props.name)
  }

  componentWillReceiveProps (newProps) {
      this.getText(newProps.name)
  }

  getText(name) {
    console.log("name", name)
    if (name !== null && name !== '') {
      axios.get('texts/' + name + '.json')
        .then(res => {
          this.setState({data: res.data})
        })
    }
  }

  render () {
    return (

      <div>
        <h3><b>{this.state.data.title}</b></h3>
        <pre style={{maxWidth: '40vw', whiteSpace: 'pre-wrap'}}>{this.state.data.text}</pre>
        {(this.state.data.author !== null) && <div><i>by {this.state.data.author}</i></div>}
        {(this.state.data.artist !== null && this.state.data.writer !== null) && <div>
          <div><i>Artist: {this.state.data.artist}</i></div>
          <div><i>Writer: {this.state.data.writer}</i></div>
        </div>}
      </div>
    )
  }
}

export default Text
