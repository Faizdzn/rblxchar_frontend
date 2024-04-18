import axios from 'axios';
import config from './web.json';
import Swal from "sweetalert2";

export const swalToast = ((icon, message) => {
  const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1550,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });
  
  if(icon == 'success') {
    Toast.fire({
              icon: 'success',
              iconColor: 'white',
              title: message,
              color: "white",
              background: "#07ab02",
            });
  } else if (icon == 'error') {
    Toast.fire({
              icon: 'error',
              iconColor: 'white',
              title: message,
              color: "white",
              background: "#ab0502",
            });
  } else {
    Toast.fire({
          timer: 10000,
          timerProgressBar: true,
          icon: "warning",
          iconColor: "white",
          title: message,
          color: "white",
          background: "#4287f5",
        });
  }
})

export const ax = axios.create({
  baseURL: config.apiUrl
})

export const downloadFile = (async (url, filename) => {
  try {
    const response = await ax.get(url, {
          responseType: 'blob', // Fetch as a Blob object
        });

        // Create a URL for the Blob object
        const fileBlobUrl = URL.createObjectURL(response.data);

        // Create a temporary link element
        const downloadLink = document.createElement('a');

        // Set the href attribute to the data URL
        downloadLink.href = fileBlobUrl;

        // Set the download attribute to the filename
        // downloadLink.download = fileName;
        downloadLink.download = filename;
        
        // Append the link element to the document body
        document.body.appendChild(downloadLink);

        // Trigger a click event on the link element to start the download
        downloadLink.click();

        // Remove the link element from the document body
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(fileBlobUrl)
  } catch(err) {
    throw err;
  }
})