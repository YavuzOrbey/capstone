import React, { useRef, useState } from 'react';
import MathView, { MathViewProps, MathViewRef } from 'react-math-view';
import MathPreview from './MathPreview';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

const MathWithKeyboardButton = React.memo((props: MathViewProps) => {
  const ref = useRef<MathViewRef>(null);
  const copyToClipboard = (event:any):string => {
    event.preventDefault();
    let value = `$$${ref.current?.getValue('latex')}$$`;
    return value;

}
  return (
    <div className="inline">
      <MathView
        onChange={()=>{
          console.log("$$dasdasdsa$$")
        }}
        onChangeCapture={e => console.log('change', e.target)}
        className="f1"
        ref={ref}
        onBlur={() => {
          console.log('value', ref.current?.getValue('spoken'), ref.current?.getValue('latex'));
        }}
        {...props}
        style={{border: '2px solid black'}}
      />
      <span onClick={() => ref.current?.executeCommand('toggleVirtualKeyboard')} style={{ width: '21px', marginTop: '4px' }}>
        <button>Toggle Keyboard</button>
      </span>
      <button onClick={(e) => {navigator.clipboard.writeText(copyToClipboard(e))}}>Copy to Clipboard</button>

        
    </div>
  );
})

const MyComponent = () => {
  return (

        <div>
        <h3>Math View</h3>
      <MathWithKeyboardButton>{"x=\\frac{-b\\pm\\sqrt{b ^ 2 - 4ac}}{2a}"}</MathWithKeyboardButton>
      </div>
  )
}

export default MyComponent;