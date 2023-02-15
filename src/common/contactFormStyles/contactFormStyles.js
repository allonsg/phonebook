import {
  Button,
  FormHeader,
  Input,
  Label,
  LoginBox,
} from 'common/formStyles/formStyles';
import styled from 'styled-components';

export const ContactActionBox = styled(LoginBox)`
  background: white;
`;

export const ContactHeader = styled(FormHeader)`
  color: ${props => props.theme.contactFormMainColor};
`;

export const ContactInput = styled(Input)`
  color: ${props => props.theme.contactFormMainColor};
  border-bottom: 1px solid ${props => props.theme.contactFormMainColor};
`;

export const ContactButton = styled(Button)`
  color: ${props => props.theme.contactFormMainColor};

  :hover {
    background-color: ${props => props.theme.contactFormMainColor};
  }
`;

export const ContactLabel = styled(Label)`
  color: ${props => props.theme.contactFormSecondColor};
`;
