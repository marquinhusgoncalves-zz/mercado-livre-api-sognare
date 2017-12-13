import React from 'react'
import { connect } from 'react-redux'
import { fetchItems } from '../actions'

class ItemsList extends Component {
  componentDidMount() {
    this.props.fetchItems()
  }

  renderItems() {
    return this.props.users.map( items => {
      return <li key={user.id}>{items.name}</li>
    })
  }

  render() {
    return (
      <div>
        Here's  big list of items
        <ul>{this.renderItems()}</ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {users: state.users}
}

export default connect(mapStateToProps, {fetchItems})(ItemsList)