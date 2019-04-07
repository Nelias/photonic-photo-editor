import React, { Component } from 'react';
import { EditorState } from '../interfaces/interfaces';
import { inject, observer } from 'mobx-react';

import '../styles/buttons.css';
import '../styles/options-section.css';

@inject('store')
@observer
class OptionsSection extends Component<any, EditorState> {
 
    render() {
        return (
            <div className="options-section">
                <div className="options-panel">
                    <input 
                        className="main-button rotation-input" 
                        value={this.props.store.rotation} 
                        type="number" 
                        placeholder="rotation angle" 
                        onChange={event => this.props.store.handleRotationInput(event)}
                    />
                    <button className="main-button" onClick={this.props.store.turnImageLeft}>Turn Left &#8630;</button>
                    <button className="main-button" onClick={this.props.store.turnImageRight}>Turn Right &#8631;</button>
                </div>
                <div>
                    <button className={`main-button ${this.props.store.buttonColor}`} onClick={this.props.store.turnGrey}>
                        Black &amp; White
                    </button>
                </div>
                <div>
                    <button className="main-button" onClick={this.props.store.countPixels} disabled={!this.props.store.file}>
                        Count Pixels: {this.props.store.pixelCount}
                    </button>
                </div>
                <div className="filter-panel">
                    <label className="filter-panel__label">Brightness</label>
                    <input 
                        className="filter-panel__range" 
                        type="range" min="0" max="200" 
                        onChange={this.props.store.handleFilterInput('brightness')} 
                        value={this.props.store.brightness}
                    />
                    <label className="filter-panel__label">Contrast</label>
                    <input 
                        className="filter-panel__range" 
                        type="range" min="0" max="200" 
                        onChange={this.props.store.handleFilterInput('contrast')} 
                        value={this.props.store.contrast}
                    />
                    <label className="filter-panel__label">Saturation</label>
                    <input 
                        className="filter-panel__range" 
                        type="range" min="0" max="200" 
                        onChange={this.props.store.handleFilterInput('saturate')} 
                        value={this.props.store.saturate}
                    />
                    <label className="filter-panel__label">Hue</label>
                    <input 
                        className="filter-panel__range" 
                        type="range" min="0" max="360" 
                        onChange={this.props.store.handleFilterInput('hue')} 
                        value={this.props.store.hue}
                    />
                    <label className="filter-panel__label">Invert</label>
                    <input 
                        className="filter-panel__range" 
                        type="range" min="0" max="100" 
                        onChange={this.props.store.handleFilterInput('invert')} 
                        value={this.props.store.invert}
                    />
                    <label className="filter-panel__label">Opacity</label>
                    <input 
                        className="filter-panel__range" 
                        type="range" min="0" max="100" 
                        onChange={this.props.store.handleFilterInput('opacity')} 
                        value={this.props.store.opacity}
                    />
                    <label className="filter-panel__label">Sepia</label>
                    <input 
                        className="filter-panel__range" 
                        type="range" min="0" max="100" 
                        onChange={this.props.store.handleFilterInput('sepia')} 
                        value={this.props.store.sepia}
                    />
                    <label className="filter-panel__label">Blur</label>
                    <input 
                        className="filter-panel__range" 
                        type="range" min="0" max="100" 
                        onChange={this.props.store.handleFilterInput('blur')} 
                        value={this.props.store.blur}
                    />
                </div>
                <div>
                    <button className="main-button reset-button" onClick={this.props.store.reset}>RESET</button>
                </div>
            </div>
        );
    }
}
 
export default OptionsSection;

