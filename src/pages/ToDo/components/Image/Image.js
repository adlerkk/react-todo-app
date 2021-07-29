import './styles.scss';

const Image = ({ img }) => {
  return (
    <img
      className={'Image'}
      alt={"DecorationIMG"}
      src={img}
    />
  );
}

export default Image;
