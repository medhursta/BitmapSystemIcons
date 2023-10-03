import { useRef, useState } from "react";
import { useIntersection } from "./intersection-observer";

const Image : React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = props => {
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);
    useIntersection(imgRef, () => {
      setIsInView(true);
    });

    return (
        <div ref={imgRef}>
            {isInView && <img {...props} /> }
        </div>
    );
}

export default Image;