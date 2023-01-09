import { Button } from "components/components.styled";
import { ContactItem } from "./FiltredContatcs.styled";
import PropTypes from 'prop-types';


export const FiltredContacts = ({ name, number, onDelete, id, onEdit }) => {
    return (
        <ContactItem>
            {name}: {number}
            <Button type="button" onClick={() => onDelete(id)}>
                Delete
            </Button>
            <Button type="button" onClick={() => onEdit({ name, number, id })}>
                Edit
            </Button>
        </ContactItem>
    );
};

FiltredContacts.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.node.isRequired,
    onDelete: PropTypes.func.isRequired,
};

