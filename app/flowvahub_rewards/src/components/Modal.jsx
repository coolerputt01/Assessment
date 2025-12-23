import { CheckCircle, PartyPopper, X } from "lucide-react"

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 animate-fadeIn"
        onClick={onClose}
      />

      {/* Card */}
      <div className="relative bg-white rounded-2xl shadow-xl w-[90%] max-w-sm p-6 text-center animate-scaleIn">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-zinc-400 hover:text-zinc-700"
        >
          <X />
        </button>

        {/* Icon */}
        <CheckCircle className="mx-auto text-emerald-500 w-14 h-14" />

        {/* Header */}
        <p className="mt-3 font-semibold text-zinc-800 flex items-center justify-center gap-2">
          Level up <PartyPopper className="text-yellow-500 w-5 h-5" />
        </p>

        {/* Main text */}
        <p className="text-4xl font-bold text-purple-600 mt-3">
          +5 Points
        </p>

        {/* Celebration icons */}
        <div className="flex justify-center gap-3 mt-4">
          <PartyPopper className="text-purple-500 animate-bounce" />
          <PartyPopper className="text-pink-500 animate-bounce delay-100" />
          <PartyPopper className="text-yellow-500 animate-bounce delay-200" />
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-500 mt-4">
          You&apos;ve claimed your daily points!  
          Come back tomorrow for more!
        </p>
      </div>
    </div>
  )
}


export default Modal;