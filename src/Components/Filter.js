import React from 'react';
import { setFilter } from '../redux/actions/todoActions';

const Filter = () => {

    const onHandleChange=(e)=>{
        setFilter(e.target.value)

    }
    return (
        <div>
            <input type="text" onChange={onHandleChange}/>
        </div>
    );
}

const mstp = (state)=>{
    return {filter: state.filter}
}

export default Filter;