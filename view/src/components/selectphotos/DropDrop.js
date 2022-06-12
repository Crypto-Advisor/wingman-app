import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { FileUploader } from "react-drag-drop-files";
import selectphoto from '../../images/select-photo.svg'
import {firebase, storage, authentication} from '../../utils/firebase'
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { uploadImage } from "./SelectPhotosSlice";

const fileTypes = ["JPG", "PNG", "JPEG"];

function DragDrop() {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleChange = async(file) => {
    let uuid = crypto.randomUUID();
    const storageRef = ref(storage, `images/${uuid}`);
    uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(storageRef).then((url) =>{
            console.log(url)
            const data = {uuid, url}
            dispatch(uploadImage(data))
        }).catch(err => console.log(err))
        console.log(snapshot)
        console.log('Uploaded a blob or file!');

      });
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