"use client"

import { motion } from "framer-motion"

const mockProfiles = [
  {
    name: "Sarah Chen",
    photo: "SC",
    badges: ["🏆", "⭐", "🔥"],
    rank: 1,
  },
  {
    name: "Alex Rivera",
    photo: "AR",
    badges: ["⭐", "🚀"],
    rank: 2,
  },
  {
    name: "Jordan Kim",
    photo: "JK",
    badges: ["🔥", "💎"],
    rank: 3,
  },
  {
    name: "Morgan Lee",
    photo: "ML",
    badges: ["🚀", "⭐"],
    rank: 4,
  },
  {
    name: "Taylor Swift",
    photo: "TS",
    badges: ["💎", "🔥"],
    rank: 5,
  },
  {
    name: "Casey Jones",
    photo: "CJ",
    badges: ["🏆", "🚀"],
    rank: 6,
  },
]

export default function ShowcaseGallery() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-serif text-[#37322F] mb-4">Featured Builders</h2>
          <p className="text-lg text-[#605A57] max-w-xl mx-auto">
            Discover profiles of talented creators in our community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProfiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-[#F7F5F3] rounded-lg border border-[#E0DEDB] p-6 text-center cursor-pointer transition"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#37322F] flex items-center justify-center text-white text-2xl font-semibold">
                {profile.photo}
              </div>
              <h3 className="text-lg font-semibold text-[#37322F] mb-2">{profile.name}</h3>
              <div className="flex gap-1 justify-center mb-3">
                {profile.badges.map((badge, i) => (
                  <span key={i} className="text-xl">
                    {badge}
                  </span>
                ))}
              </div>
              <p className="text-sm text-[#605A57]">Rank #{profile.rank}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
