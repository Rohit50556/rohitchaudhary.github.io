import { useState } from "react";
import DropDown from "./DropDown"

function DropDownContainer(){
    const [value, setValue] = useState(null);

    const items = [
        { 
            key:'red',
            value:'Red'
        },{
            key:'blue',
            value:'Blue'
        },{
            key:'green',
            value:'Green'
        },{
            key:'yellow',
            value:'Yellow'
        }
    ]

    return(<>
            <DropDown items={items} value={value} changeValue={setValue}/>
        </>
    );
}
export default DropDownContainer;
