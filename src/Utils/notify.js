import {toast} from 'react-toastify';

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
    //debugger;
    // error
    // 1. check error
    // 2. parse error
    // 3. extract error message
    // 4. prepare error message
    // 5. show them UI using toast 


}

export default {
    showSuccess,
    showInfo,
    showWarning,
    handleError
}