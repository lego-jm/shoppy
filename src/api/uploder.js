export async function productImageUpload(file) {
  const cloudName = process.env.REACT_APP_CLOUD_NAME;
  const uploadPreset = process.env.REACT_APP_UPLOAD_PRESET;
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  const data = new FormData();

  data.append("file", file);
  data.append("upload_preset", uploadPreset);

  return fetch(url, {
    method: "post",
    body: data,
  }) //
    .then((res) => res.json());
}
