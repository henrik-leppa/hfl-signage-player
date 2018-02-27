import { connect } from 'react-redux';
import { default as SignComponent } from '../components/Sign';
import { deleteSign, updateSign } from '../actions/signs';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: props => {
      dispatch(updateSign(props));
    },
    onDeleteClick: id => {
      dispatch(deleteSign(id));
    },
  };
};

const Sign = connect(mapStateToProps, mapDispatchToProps)(SignComponent);

export default Sign;
