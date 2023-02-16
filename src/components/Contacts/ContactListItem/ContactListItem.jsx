import {
    ActionButton,
    BottomPart,
    Card,
    CardBottomPart,
    CardTopPart,
    ContactInfo,
    ContactName,
    ContactPhone,
    EditIcon,
    Icon,
    LeftPart,
    Name,
    RightPart,
    TrashIcon,
    UserBlock,
    UserIcon,
} from "./ContactListItem.styled";
import PropTypes from 'prop-types';


export const ContactListItem = ({ name, number, onDelete, id, onEdit }) => {
    const tel = `tel:${number}`;
    return (
        <Card>
            <CardTopPart>
                <LeftPart>
                    <ContactName>
                        <Name>{name}</Name>
                    </ContactName>
                    <ContactInfo>
                        <ContactPhone href={tel}>
                            {number}
                        </ContactPhone>
                    </ContactInfo>
                </LeftPart>
                <RightPart>
                    <UserBlock>
                        <UserIcon />
                    </UserBlock>
                </RightPart>
            </CardTopPart>
            <CardBottomPart>
                <BottomPart onClick={() => onEdit({ name, number, id })}>
                    <ActionButton >
                        <Icon>
                            <EditIcon/>
                        </Icon>
                        Edit
                    </ActionButton>
                </BottomPart>
                <BottomPart onClick={() => onDelete(id)}>
                    <ActionButton >
                        <Icon>
                            <TrashIcon/>
                        </Icon>
                        Delete
                    </ActionButton>
                </BottomPart>
            </CardBottomPart>
        </Card>
    );
}



ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.node.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
};