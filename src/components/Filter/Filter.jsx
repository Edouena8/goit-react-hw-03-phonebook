import PropTypes from 'prop-types';
import { FilterWrap, FilterText, FilterInput } from "./Filter.styled";

const Filter = ({value, onChange}) => (
    <FilterWrap>
        <FilterText>Find contacts by name</FilterText>
        <FilterInput 
            type="text" 
            velue={value} 
            onChange={onChange}
        />
    </FilterWrap>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Filter;