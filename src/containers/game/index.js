import { connect } from "react-redux";
import { setnumberOfPlayers } from "@/actions/user-selection";
import Game from "@/components/game";

function mapStateToProps(state) {
  return {
    numberOfPlayers: state.getIn(['configuration', 'numberOfPlayers'])
  }
}

function mapDispatchToProps(dispatch) {
  return {
    //onSubmit: (numberOfPlayers) => dispatch(setnumberOfPlayers(numberOfPlayers)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)