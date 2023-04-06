import css from './Counter.module.css';
export const Controls = ({ onIncrement, onDecrement }) =>( 
     <div className={css.CounterControll}> 
        <button type='button' className='button primary' onClick={onIncrement }>Increase number on 1</button>
        <button type='button' className='button primary' onClick={onDecrement}>Decrease number on 1</button>
    </div>
);