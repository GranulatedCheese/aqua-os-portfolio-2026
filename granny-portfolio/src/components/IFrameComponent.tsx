interface IFrameProps {
  src: string;
  title: string;
  width?: string;
  height?: string;
}

const IFrameComponent: React.FC<IFrameProps> = ({
  src,
  title,
  width = "100%",
  height = "100%",
}) => {
  return (
    <iframe
      src={src}
      title={title}
      width={width}
      height={height}
      loading="lazy"
    />
  );
};

export default IFrameComponent;
