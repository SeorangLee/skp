import { SkpImageType } from '../assets/images';
import Image from "next/dist/client/image";

interface Props {
  img: SkpImageType;
  width?: number;
  height?: number;
}

const SkpImage = ({ img, width, height }: Props) => {
  return <Image
    src={img.url}
    alt={img.alt}
    width={img.width ?? width}
    height={img.height ?? height}
    layout="responsive"
  />
}

export default SkpImage;
