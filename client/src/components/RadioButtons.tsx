
import {useState} from 'react';
import { Form } from 'react-bootstrap';
const RadioButtons = ({names}:{names:string[]}) => {
    const radios = names.map((name,index)=> {return {name: name, value: index.toString()}})
    const [radioValue, setRadioValue] = useState('1'); 
    return <div>
        {radios.map((radio, index) => (
            <Form.Check 
            type='radio'
            label={radio.name}
            key={index}
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          />
    ))}
  </div>
}

export default RadioButtons;