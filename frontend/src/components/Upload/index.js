import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
// import { Container } from './styles';

import {DropContainer, UploadMessage} from './styles'

export default class Upload extends Component {

  renderDragMessage = (isDragActive, isDragReject) => {
    if(!isDragActive){
      return <UploadMessage> Arraste arquivos aqui ... </UploadMessage>
    }

    if(isDragReject){
      return <UploadMessage type="error" > Arquivo não suportado </UploadMessage>
    }

    return <UploadMessage type="success" > Solte os arquivos aqui </UploadMessage>

  }








  render() {
    const {onUpload} = this.props

    return (
      < Dropzone accept = "image/*" onDropAccepted={onUpload}>
        { ({getInputProps,getRootProps,isDragActive,isDragReject}) => (
          <DropContainer 
            {...getRootProps()}
            isDragActive = {isDragActive} 
            isDragReject = {isDragReject}  
          >
            <input {...getInputProps()}></input>

          {this.renderDragMessage(isDragActive,isDragReject)}

          </DropContainer>
        )}
      </Dropzone>
    )
  }
}
