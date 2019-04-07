import { observable, action } from 'mobx';
import { ButtonColor } from '../enums/enums';
import { FilterInput } from '../interfaces/interfaces';

class Store {
    @observable file: null | string = null;
    @observable pixelCount: null | number = null;
    @observable rotation: number | string = "";
    @observable liveRotation: number | string = 0;
    @observable brightness: number = 100;
    @observable contrast: number = 100;
    @observable saturate: number = 100;
    @observable hue: number = 0;
    @observable invert: number = 0;
    @observable opacity: number = 100;
    @observable grayscale: number = 0;
    @observable sepia: number = 0;
    @observable blur: number = 0;
    @observable buttonColor: string = ButtonColor.Black;

    @action
    reset = () => {
        this.pixelCount = null;
        this.rotation = "";
        this.liveRotation = 0;
        this.brightness = 100;
        this.contrast = 100;
        this.saturate = 100;
        this.hue = 0;
        this.invert = 0;
        this.opacity = 100;
        this.grayscale = 0;
        this.sepia = 0;
        this.blur = 0;
        this.buttonColor = ButtonColor.Black;
    };
 
    @action
    handleImageInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (this.file !== null) {
            URL.revokeObjectURL(this.file);
        }
 
        // prevents app from crashing when file upload is canceled
        const hasFiles = event.target.files && event.target.files[0] !== undefined;
        
        if (hasFiles) {
            const file = event.target.files && event.target.files[0];
            this.file = URL.createObjectURL(file);
            this.reset();
        }
    };

    @action
    handleFilterInput(name: keyof FilterInput): (event: React.ChangeEvent<HTMLInputElement>) => void {

        return (event: React.ChangeEvent<HTMLInputElement>): void => {

            const value = Number(event.currentTarget.value);
 
            if (name === 'brightness') {
                this.brightness = value;
            }
            if (name === 'contrast') {
                this.contrast = value;
            }
            if (name === 'saturate') {
                this.saturate = value;
            }
            if (name === 'hue') {
                this.hue = value;
            }
            if (name === 'invert') {
                this.invert = value;
            }
            if (name === 'opacity') {
                this.opacity = value;
            }
            if (name === 'sepia') {
                this.sepia = value;
            }
            if (name === 'blur') {
                this.blur = value;
            }
        }

    };

    @action
    handleRotationInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.rotation = event.target.value;
    };

     
    @action
    turnGrey = () => {
        if (this.grayscale === 0) {
            this.grayscale = 100;
            this.buttonColor = ButtonColor.White;
        } else {
            this.grayscale = 0;
            this.buttonColor = ButtonColor.Black;
        }
    };
 
    @action
    turnImageRight = () => {
        if (this.rotation === "") {
            this.liveRotation = `90`;
        } else {
            this.liveRotation = this.rotation;
        }
    };
 
    @action
    turnImageLeft = () => {
        if (this.rotation === "") {
            this.liveRotation = `-90`;
        } else {
            this.liveRotation = `-${this.rotation}`;
        }
    };
 
    @action
    countPixels = () => {
        if (this.file !== null) {
            let image =  document.querySelector(".uploaded-image") as HTMLImageElement;
            this.pixelCount = image.naturalWidth * image.naturalHeight;
        }
    };
}

export default Store;

