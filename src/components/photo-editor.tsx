import React, { Component } from 'react';
import ImageSection from './image-section';
import { ButtonColor } from '../enums/enums';
import { FilterInput, EditorState } from '../interfaces/interfaces';

import '../styles/buttons.css';
import '../styles/options-section.css';
 
class PhotoEditor extends Component<{}, EditorState> {
 
    constructor(props: {}) {
        super(props);
        this.state = {
            file: null,
            pixelCount: null,
            rotation: "",
            liveRotation: 0,
            blur: 0,
            brightness: 100,
            contrast: 100,
            grayscale: 0,
            hue: 0,
            invert: 0,
            opacity: 100,
            saturate: 100,
            sepia: 0,
            buttonColor: ButtonColor.Black
        };
    }
 
    reset = () => {
        this.setState({
            pixelCount: null,
            rotation: "",
            liveRotation: 0,
            blur: 0,
            brightness: 100,
            contrast: 100,
            grayscale: 0,
            hue: 0,
            invert: 0,
            opacity: 100,
            saturate: 100,
            sepia: 0,
            buttonColor: ButtonColor.Black
        })
    };
 
    handleImageInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (this.state.file !== null) {
            URL.revokeObjectURL(this.state.file);
        }
 
        // prevents app from crashing when file upload is canceled
        const hasFiles = event.target.files && event.target.files[0] !== undefined;
        
        if (hasFiles) {
            const file = event.target.files && event.target.files[0];
            this.setState({
                file: URL.createObjectURL(file),
            });
            this.countPixels();
            this.reset();
        }
    };
 
    handleFilterInput(name: keyof FilterInput): (event: React.ChangeEvent<HTMLInputElement>) => void {
        return (event: React.ChangeEvent<HTMLInputElement>): void => {
            const value = Number(event.currentTarget.value);
 
            const state = {
                [name]: value
            } as {[name in keyof FilterInput]: typeof value};
 
            this.setState(state);
        }
    };
 
    handleRotationInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            rotation: event.target.value
        })
    };
 
    turnGrey = () => {
        if (this.state.grayscale === 0) {
            this.setState({
                grayscale: 100,
                buttonColor: ButtonColor.White,
            })
        } else {
            this.setState({
                grayscale: 0,
                buttonColor: ButtonColor.Black,
            })
        }
    };
 
    turnImageRight = () => {
        if (this.state.rotation === "") {
            this.setState({
                liveRotation: `90`
            })
        } else {
            this.setState({
                liveRotation: this.state.rotation
            })
        }
    };
 
    turnImageLeft = () => {
        if (this.state.rotation === "") {
            this.setState({
                liveRotation: `-90`
            })
        } else {
            this.setState({
                liveRotation: `-${this.state.rotation}`
            })
        }
    };
 
    countPixels = () => {
        if (this.state.file !== null) {
            let image =  document.querySelector(".uploaded-image") as HTMLImageElement;
            this.setState({
                pixelCount: image.naturalWidth * image.naturalHeight
            })
        }
    };
 
    render() {
        return (
            <div className="photo-editor">
                <ImageSection editorState={this.state} handleImageInput={this.handleImageInput} />

                <div className="options-section">
                    <div className="options-panel">
                        <input 
                            className="main-button rotation-input" 
                            value={this.state.rotation} 
                            type="number" 
                            placeholder="rotation angle" 
                            onChange={event => this.handleRotationInput(event)}
                        />
                        <button className="main-button" onClick={this.turnImageLeft}>Turn Left &#8630;</button>
                        <button className="main-button" onClick={this.turnImageRight}>Turn Right &#8631;</button>
                    </div>
                    <div>
                        <button className={`main-button ${this.state.buttonColor}`} onClick={this.turnGrey}>
                            Black &amp; White
                        </button>
                    </div>
                    <div>
                        <button className="main-button" onClick={this.countPixels} disabled={!this.state.file}>
                            Count Pixels: {this.state.pixelCount}
                        </button>
                    </div>
                    <div className="filter-panel">
                        <label className="filter-panel__label">Brightness</label>
                        <input 
                            className="filter-panel__range" 
                            type="range" min="0" max="200" 
                            onChange={this.handleFilterInput('brightness')} 
                            value={this.state.brightness}
                        />
                        <label className="filter-panel__label">Contrast</label>
                        <input 
                            className="filter-panel__range" 
                            type="range" min="0" max="200" 
                            onChange={this.handleFilterInput('contrast')} 
                            value={this.state.contrast}
                        />
                        <label className="filter-panel__label">Saturation</label>
                        <input 
                            className="filter-panel__range" 
                            type="range" min="0" max="200" 
                            onChange={this.handleFilterInput('saturate')} 
                            value={this.state.saturate}
                        />
                        <label className="filter-panel__label">Hue</label>
                        <input 
                            className="filter-panel__range" 
                            type="range" min="0" max="360" 
                            onChange={this.handleFilterInput('hue')} 
                            value={this.state.hue}
                        />
                        <label className="filter-panel__label">Invert</label>
                        <input 
                            className="filter-panel__range" 
                            type="range" min="0" max="100" 
                            onChange={this.handleFilterInput('invert')} 
                            value={this.state.invert}
                        />
                        <label className="filter-panel__label">Opacity</label>
                        <input 
                            className="filter-panel__range" 
                            type="range" min="0" max="100" 
                            onChange={this.handleFilterInput('opacity')} 
                            value={this.state.opacity}
                        />
                        <label className="filter-panel__label">Sepia</label>
                        <input 
                            className="filter-panel__range" 
                            type="range" min="0" max="100" 
                            onChange={this.handleFilterInput('sepia')} 
                            value={this.state.sepia}
                        />
                        <label className="filter-panel__label">Blur</label>
                        <input 
                            className="filter-panel__range" 
                            type="range" min="0" max="100" 
                            onChange={this.handleFilterInput('blur')} 
                            value={this.state.blur}
                        />
                    </div>
                    <div>
                        <button className="main-button reset-button" onClick={this.reset}>RESET</button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default PhotoEditor;

