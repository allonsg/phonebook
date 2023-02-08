import { ClimbingBoxLoader } from 'react-spinners';

const localObj = JSON.parse(localStorage.getItem('persist:user'));
const token =
  localObj && localObj.token?.length > 10
    ? localObj.token.slice(1, localObj.token.length - 1)
    : '';

export default token;
