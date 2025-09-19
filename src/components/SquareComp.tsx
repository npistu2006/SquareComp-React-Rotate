import './SquareComp.css'

interface SquareProps {
    bgColor : string;
    SquareCount : number;
    incFn : () => void;
}

const SquareComp = ({bgColor, SquareCount, incFn}: SquareProps) => {
  return (
    <section>
        <article 
        style={{background: bgColor}}
        onClick={incFn}
        className={SquareCount !== 0 && SquareCount % 10 === 0 ? 'milestone' : ''}
        >
            {SquareCount}
        </article>
    </section>
  )
}

export default SquareComp