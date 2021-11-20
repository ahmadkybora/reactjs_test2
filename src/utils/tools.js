import React from 'react';

export const input = ( type, name, placeholder, className, style, value = '') => {
    return (
        <div className="form-group" className={className}>
            <input 
                className={style}
                type={type}
                name={name}
                id={name}
                defaultValue={value}
                placeholder={placeholder}
            />
        </div>
    )
}

export const textArea = ( name, placeholder ) => {
    return (
        <div className="form-group col-md-8">
            <textarea 
                className="form-control m-2"
                name={name}
                id={name}
                placeholder={placeholder}
                rows="5"
            ></textarea>
        </div>
    )
}

export const file = ( name ) => {
    return (
        <div className="form-group col-md-4">
            <input 
                className="form-control" 
                name={name}
                id={name} 
                type="file" 
            />
        </div>
    )
}

export const button = ( name = '', font = '', Style ) => {
    return (
        <button 
            className={Style}>
            <i className={font} />
            {name}
        </button>
    )
}

export const select = ( name, value ) => {
    return (
        <div className="form-group">
            <select className="form-select" name={name}>
                <option selected>Open this select menu</option>
                <option value="0">Please Select your Gender</option>
                <option value="1">{value}</option>
                <option value="2">{value}</option>
            </select>
        </div>
    )
}

export const table = ( style ) => {}

export const thead = ( style ) => {}
export const tbody = ( style ) => {}

export const tr = ( style ) => {
    return (
        <th>#</th>
    )
}

export const th = ( style ) => {
    return (
        <th>#</th>
    )
}

export const td = ( style ) => {
    return (
        <th>#</th>
    )
}