import React from 'react';


function Categories(props) {
    const {categoryOfArt} = props;
    

    return (
        <>
            <ul style={{listStyleType: "none"}}>
                <li>
                    <input className='me-2' type="checkbox"/>
                    {categoryOfArt}
                </li>
            </ul>
        </>
    )
}

export default Categories;
