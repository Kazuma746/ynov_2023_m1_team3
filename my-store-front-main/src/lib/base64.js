export const getBase64 = async (src) => {
  try {
    const response = await fetch(src);
    const blob = await response.blob();

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result;
        const base64 = dataUrl;
        resolve(base64);
      }
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (err) {
    throw err;
  }
}