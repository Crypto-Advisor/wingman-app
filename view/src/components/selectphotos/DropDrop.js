import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import selectphoto from '../../images/select-photo.svg'

const fileTypes = ["JPG", "PNG", "JPEG"];

function DragDrop() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(URL.createObjectURL(file));
  };
  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} >
            <div className='select-photo-box' id='photo-box'>
                <img className='select-photo-image' src={selectphoto} ></img>
                <p className='description-text-popup'>Select an image to upload.</p>
            </div>
    </FileUploader>
  );
}

export default DragDrop;