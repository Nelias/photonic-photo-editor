import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import '../styles/image-section.css';
 
@inject('store')
@observer
class ImageSection extends Component<any, any> {
 
    render() {
        return (
            <div className="upload-image-section">
                   
                <input
                className="image-input"
                type="file"
                onChange={this.props.store.handleImageInput} />

                <div className="image-container">
                    <img
                        src={this.props.store.file}
                        className="uploaded-image"
                        style={{
                            transform: `rotate(${this.props.store.liveRotation}deg)`, 
                            filter: `blur(${this.props.store.blur}px) 
                            brightness(${this.props.store.brightness}%) 
                            contrast(${this.props.store.contrast}%) 
                            grayscale(${this.props.store.grayscale}%) 
                            hue-rotate(${this.props.store.hue}deg) 
                            invert(${this.props.store.invert}%) 
                            opacity(${this.props.store.opacity}%) 
                            saturate(${this.props.store.saturate}%) 
                            sepia(${this.props.store.sepia}%)`
                        }}
                    />
                </div>
                
            </div>
        );
    }

}
 
export default ImageSection;

