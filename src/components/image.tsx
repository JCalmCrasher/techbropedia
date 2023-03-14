import NextImage, { ImageProps } from "next/image";
import { SyntheticEvent, useEffect, useState } from "react";

interface Props extends ImageProps {
  fallback?: ImageProps["src"];
}

export default function Image({
  fallback = "/profile-fallback.png",
  alt,
  src,
  width = 100,
  height = 100,
  ...props
}: Props) {
  const [error, setError] = useState<SyntheticEvent<
    HTMLImageElement,
    Event
  > | null>(null);

  useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <NextImage
      alt={alt}
      onError={setError}
      src={error ? fallback : src}
      width={width}
      height={height}
      {...props}
    />
  );
}
