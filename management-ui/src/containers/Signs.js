import { connect } from 'react-redux';
import { default as SignsComponent } from '../components/Signs';
import { createNewSign } from '../actions/signs';

const mapStateToProps = (state, ownProps) => {
  return {
    signs: state.signs
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onNewSignClick: () => {
      dispatch(createNewSign());
    },
  };
};

const Signs = connect(mapStateToProps, mapDispatchToProps)(SignsComponent);

export default Signs;
