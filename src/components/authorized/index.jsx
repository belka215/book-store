import { useDispatch } from "react-redux";
import { AUTH_ACTION } from "../../store/actions";

export const Authorized = () => {
    const dispatch = useDispatch();
    const handleLogOut = () => {
        dispatch(AUTH_ACTION);
    }

    return (
        <div>
            <p>You are authorized!</p>
            <button onClick={handleLogOut}>Log out</button>
        </div>
    )
}