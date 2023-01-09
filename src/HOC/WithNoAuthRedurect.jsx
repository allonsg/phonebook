import { getUser } from "redux/userSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


function WithNoAuthRedirect(Component, navigateTo){
    const ComponentWithRedirect = props => {
        const user = useSelector(getUser);
        return !!user ? <Navigate to={navigateTo}/> : <Component {...props} /> 
    }
    return ComponentWithRedirect;
}

WithNoAuthRedirect.propTypes = {
    navigateTo: PropTypes.string.isRequired,
    Component: PropTypes.func.isRequired,
};


export default WithNoAuthRedirect;
