import React from 'react';

export const Button = (props) =>
{
    const label = props.label || 'submit';
    const disabledLabel = props.disabledLabel || 'submitting...';
    let btn = props.isSubmitting
    //?<button disabled className="btn btn-info" >{disabledLabel}</button>
    ?<button disabled className="btn btn-primary btn-round btn-block">{disabledLabel}</button>
    :<button disabled={props.isDisabled} type="submit" className="btn btn-primary btn-round btn-block" >{label}</button>
    return btn;
}
