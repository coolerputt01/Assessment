import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Modal from "../components/Modal";
import RedeemCard from "../components/RedeemCard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  Zap,
  Menu,
  X
} from "lucide-react";

const rewards = [
  { icon: "money", title: "$5 Gift Card", desc: "Instant cash reward.", points: "5000 pts", status: "locked" },
  { icon: "gift", title: "Avatar Pack", desc: "Exclusive custom avatars.", points: "2500 pts", status: "locked" },
  { icon: "books", title: "Productivity eBook", desc: "Boost your focus.", points: "1500 pts", status: "locked" },
  { icon: "money", title: "$10 Gift Card", desc: "Bigger reward.", points: "10000 pts", status: "locked" },
  { icon: "books", title: "Udemy Productivity Course", desc: "Full premium course.", points: "—", status: "soon" },
];

const showUnavailableToast = () =>
  toast.info("🚧 Feature is disabled in this demo", {
    autoClose: 3500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

export default function Rewards() {
  const [activeTab, setActiveTab] = useState("earn");
  const [showSuccess, setShowSuccess] = useState(false);
  const [redeemFilter, setRedeemFilter] = useState("all");
  const [claimed, setClaimed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleClick = () => {
    if (claimed) return;
    setClaimed(true);
    setShowSuccess(true);
  };

  const filteredRewards = rewards.filter((reward) => {
    if (redeemFilter === "all") return true;
    if (redeemFilter === "locked") return reward.status === "locked";
    if (redeemFilter === "soon") return reward.status === "soon";
    if (redeemFilter === "unlocked") return reward.status === "unlocked";
    return true;
  });

  return (
    <main className="flex flex-col md:flex-row text-black bg-gray-100 min-h-screen">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
        aria-label="Toggle menu"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block fixed md:relative z-40`}>
        <SideBar />
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <section className="flex-1 p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8 md:ml-64 pt-20 md:pt-28">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 md:left-64 z-40 flex items-center justify-between bg-white md:bg-gray-100 px-4 md:px-8 py-3 md:py-4 shadow-sm md:shadow-xs border-b border-gray-200">
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold">Rewards Hub</h1>
            <p className="text-sm md:text-sm text-zinc-500 mt-1 hidden sm:block">
              Earn points, unlock rewards, and celebrate your progress!
            </p>
            <p className="text-sm text-zinc-500 mt-1 sm:hidden">
              Earn points & unlock rewards
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button 
              className="relative p-2 rounded-full hover:bg-zinc-100 cursor-pointer transition-colors" 
              onClick={showUnavailableToast}
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 h-2 w-2 bg-emerald-500 rounded-full" />
            </button>
          </div>
        </header>

        {/* Section Nav */}
        <nav className="flex gap-2 md:gap-6 pt-16 md:pt-0 md:mt-20">
          {["earn", "redeem"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 md:pb-3 font-medium capitalize transition-colors text-sm md:text-base ${
                activeTab === tab
                  ? "border-b-2 border-purple-600 text-purple-600 cursor-pointer"
                  : "text-zinc-500 cursor-pointer hover:text-purple-500"
              }`}
            >
              {tab === "earn" ? "Earn Points" : "Redeem"}
            </button>
          ))}
        </nav>

        {/* ================= EARN POINTS ================= */}
        {activeTab === "earn" && (
          <>
            {/* Journey Header */}
            <div className="border-l-4 border-purple-600 pl-3 md:pl-4">
              <h2 className="text-base md:text-lg font-semibold">
                Your Rewards Journey
              </h2>
            </div>

            {/* Top Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
              {/* Points Balance */}
              <Card>
                <CardHeader icon={<BadgeCheck className="w-4 h-4 md:w-5 md:h-5" />} title="Points Balance" />
                <div className="flex items-center justify-between md:justify-start md:gap-60 text-2xl md:text-3xl font-bold mt-2">
                  5 <Coins className="text-yellow-500 w-6 h-6 md:w-7 md:h-7" />
                </div>

                <div className="flex items-center justify-between mt-6 md:mt-8">
                  <p className="text-xs md:text-sm text-zinc-500">
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
                <CardHeader icon={<Calendar className="w-1 h-1 md:w-3 md:h-3" size={48} />} title="Daily Streak" />

                <p className="text-2xl md:text-3xl font-bold mt-2 text-purple-600 p-2 md:p-3">1 day</p>

                <div className="grid grid-cols-7 gap-1 md:flex md:justify-between mt-3 text-xs md:text-sm">
                  {["M", "T", "W", "T", "F", "S", "S"].map((d, index) => {
                    const isToday = index === new Date().getDay() - 1;
                    return (
                      <span
                        key={d}
                        className={`px-1 md:px-3 py-1 md:py-1 rounded-full text-zinc-700 text-center transition-colors ${
                          isToday 
                            ? "border border-purple-600 md:border-2 bg-zinc-200 font-semibold" 
                            : "bg-zinc-200"
                        }`}
                      >
                        {d}
                      </span>
                    );
                  })}
                </div>

                <p className="text-xs md:text-sm text-zinc-500 mt-4">
                  Check in daily to earn +5 points
                </p>

                <button 
                  onClick={handleClick}
                  disabled={claimed}
                  className={`mt-4 w-full py-2 md:py-2 rounded-full font-bold flex items-center justify-center gap-2 transition-colors text-sm md:text-base ${
                    claimed 
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                      : "bg-purple-600 text-zinc-200 hover:bg-purple-700 cursor-pointer"
                  }`}
                  aria-label={claimed ? "Points already claimed" : "Claim today's points"}
                >             
                  <Zap className="w-4 h-4 md:w-5 md:h-5" />
                  {claimed ? "Claimed Today" : "Claim Points"}
                </button>
              </Card>

              {/* Featured Tool */}
              <Card className="relative overflow-hidden lg:col-span-1">
                <img
                  src="/images/gradient.png"
                  alt="Reclaim.ai"
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />              
                {/* Featured Badge */}
                <span className="absolute top-3 right-3 md:top-4 md:right-4 bg-purple-100 text-purple-700 text-xs font-semibold px-2 md:px-3 py-0.5 md:py-1 rounded-full shadow">
                  Featured
                </span>

                {/* Title */}
                <h3 className="font-bold text-base md:text-lg text-gray-900 mb-3 md:mb-4 relative z-10">
                  Top Tool Spotlight
                </h3>

                {/* Content Section */}
                <div className="flex gap-3 md:gap-4 items-start relative z-10">
                  <Calendar className="text-purple-600 flex-shrink-0 w-8 h-8 md:w-12 md:h-12" />

                  <div>
                    <p className="font-medium text-xs md:text-sm text-gray-800">
                      Automate and Optimize Your Schedule
                    </p>
                    <p className="text-xs md:text-sm text-zinc-500 mt-1">
                      Reclaim.ai is an AI-powered calendar assistant that automatically schedules your tasks, meetings, and breaks to boost productivity. Free to try — earn Flowva Points when you sign up!
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 md:gap-3 mt-4 md:mt-6 relative z-10">
                  <button
                    onClick={showUnavailableToast}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-full text-xs md:text-sm bg-purple-600 text-white font-bold hover:opacity-90 transition-colors cursor-pointer"
                  >
                    <User size={14} /> Sign up
                  </button>
                  <button
                    onClick={showUnavailableToast}
                    className="flex-1 flex items-center justify-center gap-2 px-1 py-2 rounded-full text-xs md:text-sm text-purple-100 bg-purple-700 font-bold hover:opacity-90 transition-colors cursor-pointer"
                  >
                    <Gift size={14} /> Claim 50 pts
                  </button>
                </div>
              </Card>
            </div>

            {/* Earn More Points */}
            <Section title="Earn More Points">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                <Card>
                  <CardHeader
                    icon={<Star className="text-purple-600 w-4 h-4 md:w-5 md:h-5" />}
                    title="Refer and win 10,000 points!"
                  />
                  <p className="text-xs md:text-sm text-zinc-500 mt-2 md:mt-3">
                    Invite 3 friends by Nov 20 and earn a chance to be one
                    of 5 winners of 10,000 points.
                  </p>
                </Card>

                <Card>
                  <CardHeader
                    icon={<Share2 className="w-4 h-4 md:w-5 md:h-5" />}
                    title="Share Your Stack"
                    subtitle="Earn +25 pts"
                  />
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-3 md:mt-4">
                    <p className="text-xs md:text-sm">Share your tool stack</p>
                    <button 
                      onClick={showUnavailableToast}
                      className="w-full sm:w-auto bg-zinc-200 cursor-pointer text-purple-700 px-3 py-2 md:px-4 md:py-2 rounded-full font-bold flex items-center justify-center gap-2 text-xs md:text-sm hover:bg-zinc-300 transition-colors"
                    >
                      <Share2 size={14} /> Share
                    </button>
                  </div>
                </Card>
              </div>
            </Section>

            {/* Refer & Earn */}
            <Section title="Refer & Earn">
              <div className="flex gap-3 items-start bg-blue-100 p-3 md:p-4 rounded-lg">
                <Users className="text-purple-700 mt-0.5 md:mt-1 flex-shrink-0 w-5 h-5 md:w-6 md:h-6" />
                <div>
                  <p className="font-medium text-sm md:text-base text-zinc-900">Share Your Link</p>
                  <p className="text-xs md:text-sm text-zinc-500">
                    Invite friends and earn 25 points when they join!
                  </p>
                </div>
              </div>
              
              <Card>
                <div className="grid grid-cols-2 gap-4 md:flex md:gap-10 mt-4 md:mt-6">
                  <Stat label="Referrals" value="0" />
                  <Stat label="Points Earned" value="0" />
                </div>

                <label className="text-xs mt-4 md:mt-6 block text-zinc-500">
                  Your personal referral link
                </label>

                <div className="flex items-center mt-2 border border-gray-300 rounded-lg overflow-hidden">
                  <input
                    readOnly
                    value="https://app.flowvahub.com/signup/?ref=coole1721"
                    className="flex-1 px-3 py-2 text-xs md:text-sm bg-gray-50 truncate"
                  />
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText("https://app.flowvahub.com/signup/?ref=coole1721");
                      toast.success("Copied to clipboard!");
                    }}
                    className="px-3 md:px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer flex-shrink-0"
                    aria-label="Copy referral link"
                  >
                    <Copy size={14} className="md:size-4" />
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
            <div className="border-l-4 border-purple-600 pl-3 md:pl-4">
              <h2 className="text-base md:text-lg font-semibold">
                Redeem Rewards
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 md:gap-3 mb-4 md:mb-6 flex-wrap">
              {[
                { label: "All", key: "all", count: rewards.length },
                { label: "Unlocked", key: "unlocked", count: rewards.filter(r => r.status === "unlocked").length },
                { label: "Locked", key: "locked", count: rewards.filter(r => r.status === "locked").length },
                { label: "Soon", key: "soon", count: rewards.filter(r => r.status === "soon").length },
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
      
      <ToastContainer
        position="top-right"
        theme="colored"
        toastClassName="!rounded-xl !shadow-lg !text-sm !bg-purple-600 mx-4"
        style={{ zIndex: 10000 }}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </main>
  );
}

/* ================= Reusable Components ================= */

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl p-4 md:p-5 shadow-md ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ icon, title, subtitle }) => (
  <div className="-mx-4 -mt-4 mb-2 md:-mx-5 md:-mt-5 md:mb-3 px-4 py-3 md:px-5 md:py-4 flex items-center gap-2 bg-blue-100 text-purple-500 rounded-t-xl">
    <span className="p-1 rounded-md bg-zinc-200 flex items-center justify-center text-purple-700">
      {icon}
    </span>
    <div>
      <p className="font-medium text-sm md:text-base text-zinc-700">{title}</p>
      {subtitle && (
        <p className="text-xs text-zinc-500">{subtitle}</p>
      )}
    </div>
  </div>
);

const Section = ({ title, children }) => (
  <div className="space-y-3 md:space-y-4">
    <div className="border-l-4 border-purple-600 pl-3 md:pl-4">
      <h2 className="text-base md:text-lg font-semibold">
        {title}
      </h2>
    </div>
    {children}
  </div>
);

const RedeemTab = ({ label, count, active, onClick }) => (
  <button
    onClick={onClick}
    className={
      "flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-md text-xs md:text-sm font-medium transition-colors whitespace-nowrap " +
      (active
        ? "bg-zinc-200 text-purple-600 border-b-2 border-purple-600"
        : "text-zinc-500 hover:bg-zinc-100 cursor-pointer")
    }
  >
    {label}
    <span className="text-xs bg-zinc-300 px-1.5 md:px-2 py-0.5 rounded-full">
      {count}
    </span>
  </button>
);

const Stat = ({ label, value }) => (
  <div>
    <p className="text-xl md:text-2xl font-bold">{value}</p>
    <p className="text-xs text-zinc-500">{label}</p>
  </div>
);