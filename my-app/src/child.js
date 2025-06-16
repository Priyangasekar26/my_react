import msgcontext from './msgcontext';
import useContext from './useContext';
function Child(){
    const msg=useContext(msgContext);
    return(
        <>
        <h1>childComponentmsg</h1>
        </>
    );
}
export default Child;