import { connect } from "react-redux";
import { setnumberOfPlayers } from "@/actions/user-selection";
import Game from "@/components/game";

function mapStateToProps(state) {
  return {
    numberOfPlayers: state.getIn(['configuration', 'numberOfPlayers']),
  }
}

export default connect(mapStateToProps)(Game)