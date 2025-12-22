import React, { useState } from "react"
import SideBar from "../components/SideBar"
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
  Copy
} from "lucide-react"

export default function Rewards() {
  const [activeTab, setActiveTab] = useState("earn")

  return (
    <main className="flex flex-1 text-black bg-gray-100">
      <SideBar />

      <section className="flex-1 p-8 space-y-8 ml-64">
        {/* Header */}
        <header className="flex items-center justify-between">
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

                <button className="mt-4 w-full bg-purple-600 text-zinc-200 py-2 rounded-full font-bold cursor-pointer">
                  Claim Today’s Points
                </button>
              </Card>


              {/* Featured Tool */}
              <Card className="relative overflow-hidden">
                <span className="absolute top-4 right-4 bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
                  Featured
                </span>

                <h3 className="font-semibold mb-2">
                  Top Tool Spotlight
                </h3>

                <div className="mt-4 flex gap-3">
                  <Calendar className="text-purple-600" size={64} />
                  <div>
                    <p className="font-medium text-sm">
                      Automate and Optimize Your Schedule
                    </p>
                    <p className="text-sm text-zinc-500 mt-1">
                      Reclaim.ai automatically schedules your tasks,
                      meetings, and breaks to boost productivity.
                      Free to try — earn Flowva Points when you sign up!
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <ActionBtn icon={<User />} label="Sign up" />
                  <ActionBtn icon={<Gift />} label="Claim 50 pts" />
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
                  />
                  <div className="flex justify-between items-center mt-4">
                    <p>Share your tool stack</p>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                      <Share2 size={16} /> Share
                    </button>
                  </div>
                </Card>
              </div>
            </Section>

            {/* Refer & Earn */}
            <Section title="Refer & Earn">
              <Card>
                <div className="flex gap-3 items-start">
                  <Users />
                  <div>
                    <p className="font-medium">Share Your Link</p>
                    <p className="text-sm text-zinc-500">
                      Invite friends and earn 25 points when they join!
                    </p>
                  </div>
                </div>

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
          <div className="text-center text-zinc-500 py-20">
            Redeem Rewards section coming next 🚧
          </div>
        )}
      </section>
    </main>
  )
}

/* ================= Reusable Components ================= */

const Card = ({ children, className = "" }) => (
  <div className={`bg-white border rounded-xl p-5 border-none shadow-md ${className}`}>
    {children}
  </div>
)

const CardHeader = ({ icon, title, subtitle }) => (
  <div className="-mx-5 mb-3 px-5 py-4 flex items-center gap-2 bg-blue-100 text-purple-500">
    {icon}
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
    <h2 className="font-semibold text-lg">{title}</h2>
    {children}
  </div>
)

const ActionBtn = ({ icon, label }) => (
  <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm cursor-pointer bg-purple-600 text-white">
    {icon} {label}
  </button>
)

const Stat = ({ label, value }) => (
  <div>
    <p className="text-2xl font-bold">{value}</p>
    <p className="text-xs text-zinc-500">{label}</p>
  </div>
)
