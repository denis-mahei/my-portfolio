type ScrewProps = {
  position: string;
};

function Screw({ position }: ScrewProps) {
  return (
    <div
      className={`w-4 h-4 flex items-center justify-center rounded-full bg-[radial-gradient(circle_at_center,#217D7A_15%,#114B4A_100%)] shadow-[2px_2px_4px_0_#092D32] inset-shadow-[0_1px_2px_0_#16645C] ${position}`}
    >
      <svg
        width="7"
        height="6"
        viewBox="0 0 7 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-teal-900"
      >
        <path d="M0.318848 4.9744L5.85742 0.38501M0.318848 0.38501L5.85742 4.9744" stroke="currentColor" />
      </svg>
    </div>
  );
}
export default Screw;
