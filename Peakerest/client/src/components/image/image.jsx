import { IKImage } from "imagekitio-react";

export const Image = ({ h, w, className, alt, path }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_URL_ENDPOINT}
      path={path}
      transformation={[{ height: h, width: w }]}
      loading="lazy"
      alt={alt}
      className={className}
      lqip={{ active: true, quality: 20 }}
    ></IKImage>
  );
};
