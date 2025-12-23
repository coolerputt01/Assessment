import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Modal from "../components/Modal";
import RedeemCard from "../components/RedeemCard";
import {
  Bell,
  BadgeCheck,
  Coins,
  Calendar,
  Gift,
  User,
  Star,
  Share2,
  Users,
  Copy,
  Zap
} from "lucide-react";
const rewards = [
  { icon: "money", title: "$5 Gift Card", desc: "Instant cash reward.", points: "5000 pts", status: "locked" },
  { icon: "gift", title: "Avatar Pack", desc: "Exclusive custom avatars.", points: "2500 pts", status: "locked" },
  { icon: "books", title: "Productivity eBook", desc: "Boost your focus.", points: "1500 pts", status: "locked" },
  { icon: "money", title: "$10 Gift Card", desc: "Bigger reward.", points: "10000 pts", status: "locked" },
  { icon: "books", title: "Udemy Productivity Course", desc: "Full premium course.", points: "—", status: "soon" },
]



export default function Rewards() {
  const [activeTab, setActiveTab] = useState("earn");
  const [showSuccess, setShowSuccess] = useState(false);
  const [redeemFilter, setRedeemFilter] = useState("all");

  const filteredRewards = rewards.filter((reward) => {
    if (redeemFilter === "all") return true
    if (redeemFilter === "locked") return reward.status === "locked"
    if (redeemFilter === "soon") return reward.status === "soon"
    if (redeemFilter === "unlocked") return reward.status === "unlocked"
    return true
  })

  return (
    <main className="flex flex-1 text-black bg-gray-100">
      <SideBar />

      <section className="flex-1 p-8 space-y-8 ml-64 pt-28">
        {/* Header */}
        <header className="fixed top-0 left-64 right-0 z-50 flex items-center justify-between bg-gray-100 px-8 py-4 shadow-xs">
          <div>
            <h1 className="text-3xl font-bold">Rewards Hub</h1>
            <p className="text-1xl text-zinc-500 mt-1">
              Earn points, unlock rewards, and celebrate your progress!
            </p>
          </div>

          <button className="relative p-2 rounded-full hover:bg-zinc-100">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 h-2 w-2 bg-emerald-500 rounded-full" />
          </button>
        </header>

        {/* Section Nav */}
        <div className="flex gap-6">
          {["earn", "redeem"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 font-medium ${
                activeTab === tab
                  ? "border-b-2 border-purple-600 text-purple-600 cursor-pointer"
                  : "text-zinc-500 cursor-pointer hover:bg-gray-100 hover:p-2 hover:rounded-md transition-all duration-300"
              }`}
            >
              {tab === "earn" ? "Earn Points" : "Redeem Rewards"}
            </button>
          ))}
        </div>

        {/* ================= EARN POINTS ================= */}
        {activeTab === "earn" && (
          <>
            {/* Journey Header */}
            <div className="border-l-4 border-purple-600 pl-4">
              <h2 className="text-lg font-semibold">
                Your Rewards Journey
              </h2>
            </div>

            {/* Top Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Points Balance */}
              <Card>
                <CardHeader icon={<BadgeCheck />} title="Points Balance" />
                <div className="flex items-center gap-60 text-3xl font-bold">
                  5 <Coins className="text-yellow-500" />
                </div>

              <div className="flex items-center justify-between mt-8">
                <p className="text-sm text-zinc-500">
                  Progress to <b>$5 Gift Card</b>
                </p>
                <p className="text-xs text-zinc-500">
                  <b>5 / 5000</b>
                </p>
              </div>

                <div className="w-full h-2 bg-zinc-200 rounded mt-2">
                  <div className="h-full w-[1%] bg-purple-600 rounded" />
                </div>

                <p className="mt-3 text-xs text-zinc-500">
                  🚀 Just getting started — keep earning points!
                </p>
              </Card>

              {/* Daily Streak */}
              <Card>
                <CardHeader icon={<Calendar />} title="Daily Streak" />

                <p className="text-3xl font-bold mt-2 text-purple-600 p-3">1 day</p>

                <div className="flex justify-between mt-3 text-sm">
                  {["M", "T", "W", "T", "F", "S", "S"].map((d, index) => {
                    const isToday = index === new Date().getDay() - 1; // JS getDay: 0=Sun, 1=Mon...
                    return (
                      <span
                        key={d}
                        className={`px-3 py-1 rounded-full text-zinc-700 text-sm 
                          ${isToday ? "border-2 border-purple-600 bg-zinc-200 font-semibold" : "bg-zinc-200"}
                        `}
                      >
                        {d}
                      </span>
                    );
                  })}
                </div>

                <p className="text-sm text-zinc-500 mt-4 ">
                  Check in daily to earn +5 points
                </p>

                <button onClick={() => setShowSuccess(true)} className="mt-4 w-full bg-purple-600 text-zinc-200 py-2 rounded-full font-bold cursor-pointer flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" />
                  Claim Today’s Points
                </button>
              </Card>


              {/* Featured Tool */}
              <Card className="relative overflow-hidden rounded-xl shadow-lg bg-white p-6 max-w-md mx-auto">
  {/* Background Image */}
  <img
    src="/images/gradient.png"
    alt="Reclaim.ai"
    className="absolute inset-0 w-full h-full object-cover opacity-20"
  />

  {/* Featured Badge */}
  <span className="absolute top-4 right-4 bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full shadow">
    Featured
  </span>

  {/* Title */}
  <h3 className="font-bold text-lg text-gray-900 mb-4">
    Top Tool Spotlight
  </h3>

  {/* Content Section */}
  <div className="flex gap-4 items-start">
    <Calendar className="text-purple-600 flex-shrink-0" size={48} />

    <div>
      <p className="font-medium text-sm text-gray-800">
        Automate and Optimize Your Schedule
      </p>
      <p className="text-sm text-zinc-500 mt-1">
        Reclaim.ai automatically schedules your tasks, meetings, and breaks to boost productivity.
        Free to try — earn Flowva Points when you sign up!
      </p>
    </div>
  </div>

  {/* Action Buttons */}
  <div className="flex gap-3 mt-6">
    <ActionBtn
      icon={<User />}
      label="Sign up"
      className="bg-purple-600 text-white hover:bg-purple-700 transition-colors"
    />
    <ActionBtn
      icon={<Gift />}
      label="Claim 50 pts"
      className="bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors"
    />
  </div>
</Card>

            </div>

            {/* Earn More Points */}
            <Section title="Earn More Points">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader
                    icon={<Star className="text-purple-600" />}
                    title="Refer and win 10,000 points!"
                    className="bg-white border-b border-zinc-300"
                  />
                  <p className="text-sm text-zinc-500">
                    Invite 3 friends by Nov 20 and earn a chance to be one
                    of 5 winners of 10,000 points.
                  </p>
                </Card>

                <Card>
                  <CardHeader
                    icon={<Share2 />}
                    title="Share Your Stack"
                    subtitle="Earn +25 pts"
                    className="bg-white border-b border-zinc-300"
                  />
                  <div className="flex justify-between items-center mt-4">
                    <p>Share your tool stack</p>
                    <button className="bg-zinc-200 cursor-pointer text-purple-700 px-4 py-2 rounded-full font-bold flex items-center gap-2">
                      <Share2 size={16} /> Share
                    </button>
                  </div>
                </Card>
              </div>
            </Section>

            {/* Refer & Earn */}
            <Section title="Refer & Earn">
              <div className="flex gap-3 items-start bg-blue-100 p-3 rounded-lg">
                  <Users className="text-purple-700" />
                  <div>
                    <p className="font-medium text-zinc-900">Share Your Link</p>
                    <p className="text-sm text-zinc-500">
                      Invite friends and earn 25 points when they join!
                    </p>
                  </div>
                </div>
              <Card>

                <div className="flex gap-10 mt-6">
                  <Stat label="Referrals" value="0" />
                  <Stat label="Points Earned" value="0" />
                </div>

                <label className="text-xs mt-6 block text-zinc-500">
                  Your personal referral link
                </label>

                <div className="flex items-center mt-2 border rounded-lg overflow-hidden">
                  <input
                    readOnly
                    value="https://app.flowvahub.com/signup/?ref=coole1721"
                    className="flex-1 px-3 py-2 text-sm"
                  />
                  <button className="px-3">
                    <Copy size={16} />
                  </button>
                </div>
              </Card>
            </Section>
          </>
        )}

        {/* ================= REDEEM ================= */}
        {activeTab === "redeem" && (
        <>
          {/* Redeem Header */}
          <div className="border-l-4 border-purple-600 pl-4">
            <h2 className="text-lg font-semibold">
              Redeem Rewards
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-3 mb-6 flex-wrap">
            {[
              { label: "All Rewards", key: "all", count: rewards.length },
              { label: "Unlocked", key: "unlocked", count: rewards.filter(r => r.status === "unlocked").length },
              { label: "Locked", key: "locked", count: rewards.filter(r => r.status === "locked").length },
              { label: "Coming Soon", key: "soon", count: rewards.filter(r => r.status === "soon").length },
            ].map((tab) => (
              <RedeemTab
                key={tab.key}
                label={tab.label}
                count={tab.count}
                active={redeemFilter === tab.key}
                onClick={() => setRedeemFilter(tab.key)}
              />
            ))}
          </div>

          {/* Rewards Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-8 justify-center">
          {filteredRewards.map((reward, index) => (
            <RedeemCard key={index} {...reward} />
          ))}
        </div>
        </>
      )}

      </section>
      {showSuccess && (
        <Modal onClose={() => setShowSuccess(false)} />
      )}
    </main>
  )
}

/* ================= Reusable Components ================= */

const Card = ({ children, className = "" }) => (
  <div className={`bg-white border rounded-xl p-5 border-none shadow-md ${className}`}>
    {children}
  </div>
)

const CardHeader = ({ icon, title, subtitle ,className}) => (
  <div className={
      "-mx-5 -mt-5 mb-3 px-5 py-4 flex items-center gap-2 " +
      "bg-blue-100 text-purple-500 " +
      className
    }>
    <span className="p-1 rounded-md bg-zinc-200 flex items-center justify-center text-purple-700">
      {icon}
    </span>
    <div>
      <p className="font-medium text-zinc-700">{title}</p>
      {subtitle && (
        <p className="text-xs text-zinc-500">{subtitle}</p>
      )}
    </div>
  </div>
)

const Section = ({ title, children }) => (
  <div className="space-y-4">
    <div className="border-l-4 border-purple-600 pl-4">
      <h2 className="text-lg font-semibold">
        {title}
      </h2>
    </div>
    {children}
  </div>
)

const ActionBtn = ({ icon, label }) => (
  <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm cursor-pointer bg-purple-600 text-white font-bold">
    {icon} {label}
  </button>
)

const RedeemTab = ({ label, count, active, onClick }) => (
  <button
    onClick={onClick}
    className={
      "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition " +
      (active
        ? "bg-zinc-200 text-purple-600 border-b-2 border-purple-600"
        : "text-zinc-500 hover:bg-zinc-100")
    }
  >
    {label}
    <span className="text-xs bg-zinc-300 px-2 py-0.5 rounded-full">
      {count}
    </span>
  </button>
)


const Stat = ({ label, value }) => (
  <div>
    <p className="text-2xl font-bold">{value}</p>
    <p className="text-xs text-zinc-500">{label}</p>
  </div>
)
