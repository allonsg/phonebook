import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';
import { CiEdit } from 'react-icons/ci';
import { BsTrash } from 'react-icons/bs';

export const Card = styled.li`
  max-width: 320px;
  min-width: 260px;
  height: 150px;
  background: whitesmoke;
  transition: 0.2s linear;
  box-shadow: 1px 1px 10px lightslategray;
  cursor: default;
  border-radius: 5px;
`;

export const CardTopPart = styled.div`
  width: 100%;
  height: 70%;
  padding: 15px;
  display: flex;
  gap: 20px;
`;

export const LeftPart = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ContactName = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

export const Name = styled.p`
  font-size: 24px;
  margin: 0;
`;

export const ContactInfo = styled.div``;

export const ContactPhone = styled.a`
  color: grey;
  margin: 0;
  text-decoration: none;
`;

export const RightPart = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserBlock = styled.div`
  width: 70px;
  height: 70px;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid rgb(231, 227, 227);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserIcon = styled(FaUser)`
  width: 40px;
  height: 40px;
  fill: ${props => props.theme.userIcon};
`;

export const CardBottomPart = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  border: 1px solid rgb(231, 227, 227);
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;

  & :first-child:hover > p {
    color: #5585b5;
  }

  & :nth-child(2n):hover > p {
    color: red;
  }
`;

export const BottomPart = styled.button`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  border-radius: inherit;

  :hover > p {
    transform: scale(1.1);
  }

  :first-child {
    border-right: 1px solid rgb(231, 227, 227);
    border-bottom-right-radius: unset;
  }
`;

export const ActionButton = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  gap: 5.5px;
  font-weight: bold;
  transition: 0.2s linear;
  cursor: pointer;
`;

export const Icon = styled.span`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EditIcon = styled(CiEdit)`
  width: 20px;
  height: 20px;
`;

export const TrashIcon = styled(BsTrash)`
  width: 20px;
  height: 20px;
`;
