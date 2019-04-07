import React, { Component } from 'react';
import ImageSection from './image-section';
import OptionsSection from './options-section';
 
class PhotoEditor extends Component<{}, {}> {

    render() {
        return (
            <div className="photo-editor">
                <ImageSection />
                <OptionsSection />
            </div>
        );
    }

}
 
export default PhotoEditor;

