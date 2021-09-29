import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
const MathPreview = ({text}:{text:string}) => {
    
    const convertStringtoMathBlock = (s:string) => {
        if(!s || s.length < 1 ){
            return "";
        }
        let regex = new RegExp("\\$\\$(.*?)\\$\\$", "g"); 
        //return  <TeX>{String.raw`\begin{equation*} x=\frac{-b\pm\sqrt{b ^ 2 - 4ac}}{2a} \end{equation*}`}</TeX>
         return <div>{s.split(regex).map((item, i) => {
             console.log(i, item)
            return i % 2 === 1 ? (
                <TeX>{item}</TeX>
            ) : <>{item}</>;
        })}</div> 
    }
    return <>{convertStringtoMathBlock(text)}</>
}
export default MathPreview;