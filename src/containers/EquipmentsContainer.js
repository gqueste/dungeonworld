import { connect } from 'react-redux';
import { onEquipmentSelect } from '../actions';
import Equipments from '../components/Equipments';


const mapStateToProps = (state) => {
  return {
    equipments: state.equipments
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelect: (equipment) => {
      dispatch(onEquipmentSelect(equipment));
    }
  }
};

const EquipmentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Equipments);

export default EquipmentsContainer;
