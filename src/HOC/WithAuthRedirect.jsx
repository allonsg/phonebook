import { getUser } from "redux/userSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


function WithAuthRedirect (Component, navigateTo) {
    const ComponentWithRedirect = props => {
        const user = useSelector(getUser);
        return !!user ? <Component {...props} /> : <Navigate to={navigateTo}/>
    }
    return ComponentWithRedirect;
}

WithAuthRedirect.propTypes = {
    navigateTo: PropTypes.string.isRequired,
    Component: PropTypes.func.isRequired,
};

export default WithAuthRedirect;
