import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBreedDetails } from '../../actions/examples/fetchBreedDetails'
import Emoji from '../render/Emoji'
import Loading from '../render/Loading'

class BreedDetailsContainer extends Component {
  state = {
    breedImages: null
  }

  componentDidMount() {
    this.props.fetchBreedDetails(this.props.match.params.breed)
  }

  render() {
    // console.log('Name: ', this.props.match.params.breed);
    if ( this.props.match.params.breed == '' ) {
      return <>
          <h2 className="content-subhead">We are loading the list <Emoji symbol="😉" label="Winking Face"/></h2>
          <Loading/>
      </>
    }
    
    const images = this.props.breedImages

    return <>
      <h2 className="content-subhead">The {this.props.match.params.breed} dog breed</h2>
      <p>Below you will see 10 images of the {this.props.match.params.breed} breed.</p>
      <button onClick={() => this.props.history.push('/breeds')} className="pure-button pure-button-primary">Go Back</button>
      <br/><br/>

      <div className="pure-g">
          { images && images.map((url, index) => <div key={index} className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-3">
            <img className="pure-img-responsive" src={ url } alt={index} /></div>) }
          { !images && 'Loading...' }
      </div>
      <button onClick={() => this.props.history.push('/breeds')} className="pure-button pure-button-primary">Go Back</button>
    </>
  }
}

const mapDispatchToProps = {
  fetchBreedDetails
}

const mapStateToProps = (state) => {
  return {
    breedImages: state.breedImages
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreedDetailsContainer);