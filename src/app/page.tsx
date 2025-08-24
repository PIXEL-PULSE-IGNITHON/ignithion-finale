"use client";

import type React from "react";
import Link from "next/link";
import { useState } from "react";
import {
  Home,
  UtensilsCrossed,
  HeartPulse,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  Menu,
  X,
} from "lucide-react";

const Navbar = ({
  onNavigate,
  activeSection,
}: {
  onNavigate: (section: string) => void;
  activeSection: string;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", section: "home", icon: Home },
    { name: "Zero Hunger", section: "zero-hunger", icon: UtensilsCrossed },
    {
      name: "Health & Well-being",
      section: "health-wellbeing",
      icon: HeartPulse,
    },
    { name: "Quality Education", section: "quality-education", icon: BookOpen },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#D9DD92]/30 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center text-2xl font-bold"
            >
              <span className="bg-[#FA8334] bg-clip-text font-bold text-transparent">
                IGNITHON
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => onNavigate(item.section)}
                  className={`inline-flex cursor-pointer items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.section
                      ? "bg-[#FA8334] text-white shadow-lg scale-105"
                      : "text-[#080F0F] hover:bg-[#D9DD92]/20 hover:text-[#FA8334]"
                  }`}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-[#080F0F] hover:bg-[#D9DD92]/20"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    onNavigate(item.section);
                    setIsMenuOpen(false);
                  }}
                  className={`flex w-full items-center rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                    activeSection === item.section
                      ? "bg-[#FA8334] text-white"
                      : "text-[#080F0F] hover:bg-[#D9DD92]/20"
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const SdgDetail = ({
  title,
  icon,
  color,
  onNavigate,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  color: string;
  onNavigate: (section: string) => void;
  children: React.ReactNode;
}) => (
  <div className="min-h-screen pt-20 bg-[#FCEFF9]">
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <button
        onClick={() => onNavigate("home")}
        className="mb-8 inline-flex items-center font-semibold text-[#FA8334] transition-all hover:text-[#FA8334]/80 hover:translate-x-1"
      >
        <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
      </button>

      <div className="mb-8 overflow-hidden rounded-3xl bg-white shadow-xl">
        <div className={`${color} p-8`}>
          <div className="flex items-center space-x-4">
            <div className="rounded-2xl bg-white/20 p-4 backdrop-blur-sm">
              {icon}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#080F0F] sm:text-4xl">
                {title}
              </h1>
              <p className="mt-2 text-lg text-[#080F0F]/70">
                Harnessing technology to make a tangible impact on this
                Sustainable Development Goal.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="prose prose-lg max-w-none text-[#080F0F]">
            {children}
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default function HomeApp() {
  const [activeSection, setActiveSection] = useState("home");

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return (
          <div className="min-h-screen pt-16 bg-[#FCEFF9]">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FCEFF9] via-[#D9DD92]/10 to-[#B6DC76]/20"></div>
              <div className="relative px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-4xl">
                  <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
                    <span className="bg-gradient-to-r from-[#FA8334] via-[#B6DC76] to-[#D9DD92] bg-clip-text text-transparent">
                      IGNITHON
                    </span>
                    <br />
                    <span className="text-[#080F0F]">2025</span>
                  </h1>
                  <p className="mx-auto mt-8 max-w-2xl text-xl text-[#080F0F]/70 leading-relaxed">
                    Harnessing Technology for a Better World. Our mission is to
                    provide innovative{" "}
                    <span className="font-semibold text-[#FA8334]">
                      E-Help solutions
                    </span>{" "}
                    to achieve the UN&apos;s Sustainable Development Goals.
                  </p>
                  <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <button
                      onClick={() => setActiveSection("zero-hunger")}
                      className="group rounded-full bg-[#FA8334] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#FA8334]/90 hover:shadow-xl hover:scale-105"
                    >
                      Explore Our Goals
                      <ArrowRight className="ml-2 inline h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </button>
                    <button className="rounded-full border-2 border-[#080F0F]/20 px-8 py-4 text-lg font-semibold text-[#080F0F] transition-all hover:border-[#FA8334] hover:text-[#FA8334]">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="px-4 py-20 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-7xl">
                <div className="text-center">
                  <h2 className="text-4xl font-bold tracking-tight text-[#080F0F] sm:text-5xl">
                    Our Core Focus Areas
                  </h2>
                  <p className="mx-auto mt-6 max-w-3xl text-xl text-[#080F0F]/70">
                    We are committed to making a tangible impact on these three
                    critical Sustainable Development Goals through innovative
                    technology solutions.
                  </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      sdg: "SDG 2",
                      title: "Zero Hunger",
                      description:
                        "Leveraging technology to create sustainable food systems, improve distribution, and eliminate hunger worldwide.",
                      icon: <UtensilsCrossed className="h-8 w-8 text-white" />,
                      section: "zero-hunger",
                      bgColor: "bg-[#B6DC76]",
                      hoverColor: "hover:bg-[#B6DC76]/90",
                    },
                    {
                      sdg: "SDG 3",
                      title: "Good Health & Well-being",
                      description:
                        "Providing accessible e-health solutions, promoting wellness, and ensuring healthy lives for all age groups.",
                      icon: <HeartPulse className="h-8 w-8 text-white" />,
                      section: "health-wellbeing",
                      bgColor: "bg-[#FA8334]",
                      hoverColor: "hover:bg-[#FA8334]/90",
                    },
                    {
                      sdg: "SDG 4",
                      title: "Quality Education",
                      description:
                        "Enhancing learning outcomes with digital tools, ensuring inclusive and equitable education for everyone.",
                      icon: <BookOpen className="h-8 w-8 text-[#080F0F]" />,
                      section: "quality-education",
                      bgColor: "bg-[#D9DD92]",
                      hoverColor: "hover:bg-[#D9DD92]/90",
                    },
                  ].map((module, index) => (
                    <div
                      key={module.title}
                      className="group relative cursor-pointer overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                      onClick={() => setActiveSection(module.section)}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div
                        className={`${module.bgColor} ${module.hoverColor} p-8 transition-colors`}
                      >
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                          {module.icon}
                        </div>
                        <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-[#080F0F]/60">
                          {module.sdg}
                        </h3>
                        <h4 className="mb-4 text-2xl font-bold text-[#080F0F]">
                          {module.title}
                        </h4>
                      </div>

                      <div className="p-8">
                        <p className="mb-6 text-[#080F0F]/70 leading-relaxed">
                          {module.description}
                        </p>
                        <button className="inline-flex items-center font-semibold text-[#FA8334] transition-all group-hover:text-[#FA8334]/80">
                          Explore Module
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        );
      case "zero-hunger":
        return (
          <SdgDetail
            title="SDG 2: Zero Hunger"
            icon={<UtensilsCrossed className="h-12 w-12 text-[#080F0F]" />}
            color="bg-[#B6DC76]"
            onNavigate={setActiveSection}
          >
            <h3 className="mb-6 text-3xl font-bold text-[#080F0F]">
              Our Approach
            </h3>
            <p className="mb-8 text-lg leading-relaxed">
              The Zero Hunger module focuses on leveraging technology to combat
              food insecurity and promote sustainable agriculture. We develop
              E-help tools that assist in optimizing food supply chains,
              reducing waste, and providing accessible information to farmers.
            </p>
            <h4 className="mb-4 text-2xl font-bold text-[#FA8334]">
              Key Initiatives:
            </h4>
            <div className="space-y-4">
              <div className="rounded-xl bg-[#FCEFF9] p-6">
                <h5 className="mb-2 text-xl font-bold text-[#080F0F]">
                  E-Farming Platforms
                </h5>
                <p className="text-[#080F0F]/70">
                  Digital tools that provide real-time weather data, soil
                  analysis, and planting recommendations to farmers.
                </p>
              </div>
              <div className="rounded-xl bg-[#FCEFF9] p-6">
                <h5 className="mb-2 text-xl font-bold text-[#080F0F]">
                  Food Waste Reduction
                </h5>
                <p className="text-[#080F0F]/70">
                  Apps and dashboards that connect food surplus to communities
                  in need, minimizing waste and addressing hunger.
                </p>
              </div>
              <div className="rounded-xl bg-[#FCEFF9] p-6">
                <h5 className="mb-2 text-xl font-bold text-[#080F0F]">
                  Nutrition Tracking
                </h5>
                <p className="text-[#080F0F]/70">
                  Solutions for tracking nutritional intake and providing
                  personalized dietary advice to communities.
                </p>
              </div>
            </div>
            <p className="mt-8 text-lg font-medium text-[#FA8334]">
              By connecting technology with agriculture, we aim to build a world
              where everyone has access to sufficient, nutritious food.
            </p>
            <div className="my-5 grid place-content-center">
              <div className="flex gap-2">
                <Link href={"https://hungerhelp.ignithon.dashutosh.tech/"}>
                  <button
                    className="px-6 py-3 bg-[#FA8334] text-white font-semibold rounded-2xl shadow-md 
                 hover:bg-[#d86c29] hover:scale-105 transition-transform duration-300 flex cursor-pointer"
                  >
                    GO TO SOLUTION 1{" "}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
                              <Link href={"https://donate.ignithon.dashutosh.tech/"}>
                <button
                  className="px-6 py-3 bg-[#FA8334] text-white font-semibold rounded-2xl shadow-md 
                 hover:bg-[#d86c29] hover:scale-105 transition-transform duration-300 flex cursor-pointer"
                >
                  GO TO SOLUTION 2{" "}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
              </div>
            </div>
          </SdgDetail>
        );
      case "health-wellbeing":
        return (
          <SdgDetail
            title="SDG 3: Good Health & Well-being"
            icon={<HeartPulse className="h-12 w-12 text-white" />}
            color="bg-[#FA8334]"
            onNavigate={setActiveSection}
          >
            <h3 className="mb-6 text-3xl font-bold text-[#080F0F]">
              Our Approach
            </h3>
            <p className="mb-8 text-lg leading-relaxed">
              This module is dedicated to creating accessible digital health
              solutions that improve quality of life. We believe technology can
              bridge the gap in healthcare access, from remote consultations to
              public health data analysis.
            </p>
            <h4 className="mb-4 text-2xl font-bold text-[#FA8334]">
              Key Initiatives:
            </h4>
            <div className="space-y-4">
              <div className="rounded-xl bg-[#FCEFF9] p-6">
                <h5 className="mb-2 text-xl font-bold text-[#080F0F]">
                  Telemedicine Services
                </h5>
                <p className="text-[#080F0F]/70">
                  Platforms for remote doctor consultations, making healthcare
                  available to rural and underserved populations.
                </p>
              </div>
              <div className="rounded-xl bg-[#FCEFF9] p-6">
                <h5 className="mb-2 text-xl font-bold text-[#080F0F]">
                  Mental Health Apps
                </h5>
                <p className="text-[#080F0F]/70">
                  Digital tools that provide confidential support, resources,
                  and wellness exercises.
                </p>
              </div>
              <div className="rounded-xl bg-[#FCEFF9] p-6">
                <h5 className="mb-2 text-xl font-bold text-[#080F0F]">
                  Public Health Dashboards
                </h5>
                <p className="text-[#080F0F]/70">
                  Data visualization tools to track disease outbreaks and public
                  health trends, aiding policy makers.
                </p>
              </div>
            </div>
            <p className="mt-8 text-lg font-medium text-[#FA8334]">
              Our e-health solutions are designed to empower individuals and
              communities to take control of their health and well-being.
            </p>
            <div className="my-5 grid place-content-center">
              <Link href={"https://mindpulse.ignithon.dashutosh.tech/"}>
                <button
                  className="px-6 py-3 bg-[#FA8334] text-white font-semibold rounded-2xl shadow-md 
                 hover:bg-[#d86c29] hover:scale-105 transition-transform duration-300 flex cursor-pointer"
                >
                  GO TO SOLUTION{" "}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </SdgDetail>
        );
      case "quality-education":
        return (
          <SdgDetail
            title="SDG 4: Quality Education"
            icon={<BookOpen className="h-12 w-12 text-[#080F0F]" />}
            color="bg-[#D9DD92]"
            onNavigate={setActiveSection}
          >
            <h3 className="mb-6 text-3xl font-bold text-[#080F0F]">
              Our Approach
            </h3>
            <p className="mb-8 text-lg leading-relaxed">
              We are focused on ensuring inclusive and equitable education for
              all through the power of digital tools. This module develops
              platforms that make learning more engaging, personalized, and
              accessible to everyone, regardless of their location or
              background.
            </p>
            <h4 className="mb-4 text-2xl font-bold text-[#FA8334]">
              Key Initiatives:
            </h4>
            <div className="space-y-4">
              <div className="rounded-xl bg-[#FCEFF9] p-6">
                <h5 className="mb-2 text-xl font-bold text-[#080F0F]">
                  E-Learning Platforms
                </h5>
                <p className="text-[#080F0F]/70">
                  Interactive portals with a wide range of courses and modules
                  for different age groups and skill levels.
                </p>
              </div>
              <div className="rounded-xl bg-[#FCEFF9] p-6">
                <h5 className="mb-2 text-xl font-bold text-[#080F0F]">
                  Digital Literacy Programs
                </h5>
                <p className="text-[#080F0F]/70">
                  Curriculums designed to teach essential digital skills to
                  communities, fostering a tech-savvy generation.
                </p>
              </div>
              <div className="rounded-xl bg-[#D9DD92]/30 p-6">
                <h5 className="mb-2 text-xl font-bold text-[#080F0F]">
                  Personalized Learning Paths
                </h5>
                <p className="text-[#080F0F]/70">
                  AI-driven tools that adapt to a student&apos;s pace and style,
                  offering a customized learning experience.
                </p>
              </div>
            </div>
            <p className="mt-8 text-lg font-medium text-[#FA8334]">
              By bridging the digital divide, we empower individuals to acquire
              the knowledge and skills they need to thrive.
            </p>
            <div className="my-5 grid place-content-center">
              <Link href={"/SDG4"}>
                <button
                  className="px-6 py-3 bg-[#FA8334] text-white font-semibold rounded-2xl shadow-md 
                 hover:bg-[#d86c29] hover:scale-105 transition-transform duration-300 flex cursor-pointer"
                >
                  GO TO SOLUTION{" "}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </SdgDetail>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#D9DD92]/30">
      <Navbar onNavigate={setActiveSection} activeSection={activeSection} />
      {renderContent()}
      <footer className="border-t border-[#D9DD92]/30 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center">
          <p className="text-[#080F0F]/60">
            &copy; {new Date().getFullYear()} IGNITHON Project by Pixel Pulse
            All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
