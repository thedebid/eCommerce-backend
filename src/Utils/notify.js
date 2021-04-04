import {toast} from 'material-react-toastify';
import "material-react-toastify/dist/ReactToastify.css";

function showSuccess(msg){
    toast.success(msg);
}

function showInfo(msg){
    toast.info(msg);
}

function showWarning(msg){
    toast.warning(msg);
}

function handleError(error){
    let errMsg = "Something went wrong";
    const err = error.response;
    if (err && err.data) {
      errMsg = err.data.message;
    }
    toast.error(errMsg);

}

export default {
    showSuccess,
    showInfo,
    showWarning,
    handleError
}