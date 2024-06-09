import { imagesToPDF } from "@coderosh/images-to-pdf";

const toPDF = async (urls: string[]) => {
  const images = await Promise.all(
    urls.map((url) => fetch(url).then((res) => res.arrayBuffer()))
  );
  const pdf = await imagesToPDF(images);
  const dataUrl = pdf.dataUrl();
  return dataUrl;
};

export default toPDF;
