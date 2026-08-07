import logo from '../assets/brand/logo.png';

export default function Logo({ size = 34 }) {
  return (
    <img
      src={logo}
      alt="AppsTech Soft"
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  );
}
