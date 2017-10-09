import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import cssModules from 'react-css-modules';
import './main.less';

@observer
export default class App extends React.Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
    };

    render() {
        return (
            <div className="container">
                { this.props.store.listOfRenders.map(el => (
                        <span key={ el }>{ el }</span>
                    )
                )}
            </div>
        )
    }
}
