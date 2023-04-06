import { Component } from "react";
import css from './Dropdown.module.css';

class Dropdown extends Component {
    state = {
        visible: false,
    }
    show= () => {
        this.setState({ visible: true });
    }

    hide = () => {
        this.setState({ visible: false });
    }
    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible
        }));
    }
    render() {
        return (

            <div className={css.dropdown}>
                <button type="button" className={css.dropdown__toggle} onClick={this.toggle}>
                    {this.state.visible ? 'Hide' : 'Show'}
                </button>
                {this.state.visible && (
                    <div className={css.dropdownList}>Dropdown menu</div>
                )}
            </div>
        )
    }
}
export default Dropdown; 