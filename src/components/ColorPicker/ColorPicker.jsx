import { Component} from 'react';
import css from './ColorPicker.module.css';

class ColorPicker extends Component {
    state = {
        activeOptionIdx:0
    }

    handleActiveOptionClick = (index) => { 
        this.setState({ activeOptionIdx: index })
    }
    makeOptionClassName = (index) => {
         const optionClasses = [css.ColorPickerOption];
            if (index === this.state.activeOptionIdx)
                optionClasses.push(css.ColorPickerOption__active)
        return optionClasses.join(' ');
    }

    render() {
        const { activeOptionIdx } = this.state;
        const {options} = this.props;
        const {label} = options[activeOptionIdx];
            return (
        <div className={css.ColorPicker}>
                    <h2 className={css.ColorPickerTitle}>Color Picker</h2>
                    <p>Selected color is: { label}</p>
            <div>
                {options.map(({ label, color }, index) =>  (
                        <button key={label}
                            className={this.makeOptionClassName(index)}
                            // style={{
                            //     backgroundColor: color,
                            //     border: index === this.state.activeOptionIdx
                            //         ? '2px solid #000'
                            //         : 'none'
                            // }}
                                style={{
                            backgroundColor: color,
                        }}
                        onClick={() => this.handleActiveOptionClick(index)}
                        ></button>
                    ))}
            </div>
        </div>
    )
    }
}


export default ColorPicker;