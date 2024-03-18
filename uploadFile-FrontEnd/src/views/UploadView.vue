<template>
  <div>
    <input type="file" @change="handleFileUpload" class="file-input">
    <button @click="uploadFile" class="upload-button">Upload</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const file = ref(null);

    const handleFileUpload = (event) => {
      file.value = event.target.files[0];
    };

    const uploadFile = async () => {
      if (!file.value) {
        alert('Please select a file');
        return;
      }

      const formData = new FormData();
      formData.append('fileUpload', file.value);
     
      try {
        const response = await axios.post('http://localhost:8080/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'X-API-Key': 'N6RJJuPaOMI1hAwUHeSw'
          }
        });
        console.log('File uploaded successfully:', response.data);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    };

    return {
      handleFileUpload,
      uploadFile
    };
  }
};
</script>


<style>
/* สไตล์ของ input file */
.file-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 16px;
}

/* สไตล์ของปุ่ม upload */
.upload-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.upload-button:hover {
  background-color: #0056b3;
}
</style>