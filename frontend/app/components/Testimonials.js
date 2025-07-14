'use client';
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Guy Hawkins",
    handle: "@guyhawkins",
    text: "Impressed by the professionalism and attention to detail.",
    avatar: "/AV1.svg",
  },
  {
    name: "Karla Lynn",
    handle: "@karlalynn98",
    text: "A seamless experience from start to finish. Highly recommend!",
    avatar: "/AV2.svg",
  },
  {
    name: "Jane Cooper",
    handle: "@janecooper",
    text: "Reliable and trustworthy. Made my life so much easier!",
    avatar: "/AV3.svg",
  },
  {
    name: "Robert Fox",
    handle: "@robertf",
    text: "Top-notch service and support. Exceeded all expectations!",
    avatar: "/AV4.svg",
  },
  {
    name: "Jenny Wilson",
    handle: "@jennywilson",
    text: "They truly understand our needs and deliver every time.",
    avatar: "/AV5.svg",
  },
  {
    name: "Darlene Robertson",
    handle: "@darlener",
    text: "Outstanding experience, great results and timely delivery.",
    avatar: "/AV6.svg",
  },
];

export default function Testimonials() {
  return (
    <div className="overflow-hidden py-10 bg-white">
      <h2 className="text-center text-gray-500 text-sm font-medium">Testimonial</h2>
      <h3 className="text-center text-3xl font-bold mb-8">Transformative Client Experiences</h3>
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="flex-none max-w-132 bg-gray-100 rounded-2xl p-6 shadow-md"
          >
            <div className="text-4xl text-gray-400 mb-4">“</div>
            <p className="text-lg font-medium text-gray-800 mb-4 line-clamp-2">{testimonial.text}</p>
            <div className="flex items-center gap-3">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.handle}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
