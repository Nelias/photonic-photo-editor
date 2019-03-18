import React, { Component } from 'react';
import '../styles/image-section.css';
 
class ImageSection extends Component<any, any> {

    constructor(props: any) {
        super(props);
    }
 
    render() {
        return (
            <div className="upload-image-section">
                   
                <input
                className="image-input"
                type="file"
                onChange={this.props.handleImageInput}/>

                <div className="image-container">
                    <img
                        src={this.props.editorState.file}
                        className="uploaded-image"
                        style={{
                            transform: `rotate(${this.props.editorState.liveRotation}deg)`, 
                            filter: `blur(${this.props.editorState.blur}px) 
                            brightness(${this.props.editorState.brightness}%) 
                            contrast(${this.props.editorState.contrast}%) 
                            grayscale(${this.props.editorState.grayscale}%) 
                            hue-rotate(${this.props.editorState.hue}deg) 
                            invert(${this.props.editorState.invert}%) 
                            opacity(${this.props.editorState.opacity}%) 
                            saturate(${this.props.editorState.saturate}%) 
                            sepia(${this.props.editorState.sepia}%)`
                        }}
                    />
                </div>
                
            </div>
        );
    }

}
 
export default ImageSection;

