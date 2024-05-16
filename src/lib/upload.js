import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase';

const upload = async (file) => {
  const date = new Date();
  const storageRef = ref(storage, `avatars/${date.getTime()}-${file?.name}`);
  if (file === undefined) throw new Error('File is not provided');
  const uploadTask = uploadBytesResumable(storageRef, file);
  return (
    new Promise() <
    string >
    ((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        },
        (error) => {
          reject('Something is wrong, please try again');
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    })
  );
};

export default upload;
