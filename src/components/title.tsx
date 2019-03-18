import React, { Component } from 'react';

interface TitleProps {
    name: string
}

class Title extends Component<TitleProps, string> {

    constructor(props: TitleProps) {
        super(props);
    }
    
    render() {
        return(
            <h1 className="title">{this.props.name}</h1>
        )
    }
}

export default Title;

