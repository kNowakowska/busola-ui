export default function HamburgerIcon({ size }: { size: number }) {
  return (
    <svg
      fill="var(--dark-blue)"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className="bg-white"
      width={size}
      height={size}
    >
      <path
        d="M2 3h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"
        id="a"
      ></path>
    </svg>
  );
}
