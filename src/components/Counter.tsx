import {useState} from 'react';

interface CounterProps extends React.ComponentPropsWithoutRef<'button'> {
    initialValue: number;
    min?: number;
    max?: number;
    step?: number;
    // onClick?: () => void;
}

const Counter = ({ initialValue, min = 0, max = 10, step = 1 }: CounterProps) => {
    let [count, setCount] = useState(initialValue);

    const decrement = (): void => {
        if (count > min) {
            count = count - step;
            setCount(count);
        }
    }

    const increment = (): void => {
        if (count < max) {
            count = count + step;
            setCount(count);
        }
    }

    return ( 
        <div className='inline-grid grid-cols-3 gap-4'>
          <button onClick={decrement}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
        </div>
    );
}

export default Counter;