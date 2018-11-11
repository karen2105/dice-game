import { connect } from "react-redux";
import { setnumberOfPlayers } from "@/actions/user-selection";
import UserSelection from "@/components/user-selection";

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    //onSubmit: (numberOfPlayers) => dispatch(setnumberOfPlayers(numberOfPlayers)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSelection)