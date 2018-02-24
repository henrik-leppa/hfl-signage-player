import { connect } from 'react-redux';
import { default as SignsComponent } from '../components/Signs';
import { textChange } from '../actions/signs';

const mapStateToProps = (state, ownProps) => {
  return {
    // text: state.signs[0].text
    text: state.signs.text
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: props => {
      dispatch(textChange(props));
    }
  };
};

const Signs = connect(mapStateToProps, mapDispatchToProps)(SignsComponent);

export default Signs;
