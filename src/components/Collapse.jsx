import React from "react";
import cn from 'classnames';

class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
            opened: this.props.opened
        }
    }

    toggleVisibility = () => {
        this.setState(({opened}) => ({opened: !opened}))
    }

    render() {
        const showCollapse = cn('collapse',
            {
                'show': this.state.opened
            }
        )

        return (
            <div>
                <p>
                    <a className='btn btn-primary m-5'
                       data-bs-toggle='collapse'
                       href='#'
                       role='button'
                       aria-expanded={this.state.opened}
                       onClick={this.toggleVisibility}>
                        Link with href
                    </a>
                </p>
                <div className={showCollapse}>
                    <div className='card card-body'>
                        {this.state.text}
                    </div>
                </div>
            </div>
        )
    }
}

export default Collapse;