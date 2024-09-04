import { useState } from 'react';
import './DropDown.css';

function DropDown({items, value, changeValue}){
    const [showContent, SetShowContent] = useState(false);
    
    function handleChange(item) {
        changeValue(item.value);
        SetShowContent(!showContent);
    }
    
    const renderItems = items.map((item)=>{
        return item.value !== value ? 
            <div className='item' key={item.key} onClick={()=>handleChange(item)}>
                {item.value}
            </div> : null;
    })
    
    return(
        <div className="dropdown">
            <div className='dropdown-header' onClick={() => SetShowContent(!showContent)}>
                {value || "Selected...."}
                
                <div className='action'>{showContent ? <>X</> : <></>}</div>
            </div>
            {showContent && <div className='dropdown-content'><input />{renderItems}</div>}
        </div>	
    );
}
export default DropDown;
