import React from 'react'
import { fetchTeams } from '../../actions/teams'
import { connect } from 'react-redux'
import TeamsList from './List'
import CreateTeamFormContainer from './FormContainer'

class TeamsListContainer extends React.Component {
  componentDidMount() {
      console.log(this.props);
      
      this.props.fetchTeams()
  }

  render() {
    return <>
      <TeamsList teams={this.props.teams} />
      <CreateTeamFormContainer />
    </>
  }
}

const mapStateToProps = state => ({
  teams: state.teams
})

export default connect(mapStateToProps, {fetchTeams})(TeamsListContainer)