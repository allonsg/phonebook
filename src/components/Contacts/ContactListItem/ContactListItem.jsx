import { Button } from "components/components.styled";
import { ContactItem } from "./ContactListItem.styled";
import PropTypes from 'prop-types';


export const ContactListItem = ({ name, number, onDelete, id, onEdit }) => {
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

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.node.isRequired,
    onDelete: PropTypes.func.isRequired,
};