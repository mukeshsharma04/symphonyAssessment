import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../actions/creators/fileUpload";
import Home from "../components/pages/home";

export const mapStateToProps = ({ fileUpload }) => ({ fileUpload });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
