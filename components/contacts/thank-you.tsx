type ThankYouProps = {
  onReset: () => void;
};

function ThankYou({ onReset }: ThankYouProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-[30px] text-center text-heading-foreground font-medium mb-2">
        Thank you! 🤘
      </h1>
      <p className="text-[18px] text-center font-medium mb-8">
        Your message has been accepted. You will receive answer soon!
      </p>
      <button
        className="px-3 py-2.5 text-sm rounded-lg bg-primary text-slate-950"
        onClick={onReset}
      >
        send-new-message
      </button>
    </div>
  );
}
export default ThankYou;
