import { SkpImageType } from '../assets/images';
import Image, { ImageProps } from "next/legacy/image";

interface Props extends Omit<ImageProps, 'src'>{
  img: SkpImageType;
}

export const SkpResponsiveImage = ({ img, ...rest }: Props) => {
  return <SkpImage {...rest} img={img} layout="responsive" />
};

const SkpImage = ({ img, ...rest }: Props) => {
  rest.width ??= img.width;
  rest.height ??= img.height;
  return <Image {...rest} src={img.url} alt={img.alt} />
};

export default SkpImage;
