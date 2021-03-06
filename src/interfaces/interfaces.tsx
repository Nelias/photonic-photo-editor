import { ButtonColor } from '../enums/enums';

export interface FilterInput {
    blur: number,
    brightness: number,
    contrast: number,
    grayscale: number,
    hue: number,
    invert: number,
    opacity: number,
    saturate: number,
    sepia: number,
}
 
export interface EditorState extends FilterInput {
    file: null | string,
    pixelCount: null | number,
    rotation: number | string,
    liveRotation: number | string,
    buttonColor: ButtonColor
}

