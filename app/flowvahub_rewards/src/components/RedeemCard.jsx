import { Coins, Gift, Book, Star } from "lucide-react"

const iconMap = {
  money: Coins,
  gift: Gift,
  books: Book,
}

const RedeemCard = ({ icon, title, desc, points, status }) => {
  const Icon = iconMap[icon]

  const isDisabled = status === "locked" || status === "soon"

  return (
    <div
      className={
        "w-xs rounded-2xl p-8 flex flex-col items-center justify-between min-h-[360px] transition " +
        (isDisabled
          ? "bg-zinc-100 border border-zinc-300 text-zinc-400 cursor-not-allowed shadow-md contrast-80"
          : "bg-white border border-zinc-200 shadow-md")
      }
    >
      {/* Icon */}
      <div
        className={
          "p-4 rounded-full mb-6 " +
          (isDisabled ? "bg-zinc-300" : "bg-purple-100")
        }
      >
        <Icon
          className={
            "w-12 h-12 " + (isDisabled ? "text-black" : "text-purple-600")
          }
        />
      </div>

      {/* Content */}
      <div className="text-center">
        <h3 className="font-bold text-xl text-black">{title}</h3>
        <p className="text-sm mt-2 text-zinc-800">{desc}</p>
      </div>

      {/* Points */}
      {points !== "—" && (
        <div className="flex items-center gap-2 mt-6 text-base text-black font-semibold">
          <Star className="w-5 h-5 text-purple-600" />
          {points}
        </div>
      )}

      {/* Status Button */}
      <button
        disabled
        className={
          "mt-6 w-full py-3 rounded-lg font-bold text-sm contrast-40" +
          (status === "soon"
            ? "text-zinc-200 bg-purple-600"
            : "text-zinc-200 bg-purple-700")
        }
      >
        {status === "soon" ? "Coming Soon" : "Locked"}
      </button>
    </div>
  )
}

export default RedeemCard
