"use client";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, School } from "lucide-react";
const educationInitiatives = [
  {
    id: "education-1",
    title: "Smart Classroom Program",
    description: "Introducing digital learning tools and interactive whiteboards in 50 pilot schools to enhance the learning experience.",
    points: [
      "Teacher training on digital pedagogy.",
      "Access to online educational resources.",
      "Improved student engagement and outcomes."
    ]
  },
  {
    id: "education-2",
    title: "Scholarship for Meritorious Students",
    description: "A comprehensive scholarship program to support talented students from underprivileged backgrounds in pursuing higher education.",
    points: [
      "Financial aid for tuition and expenses.",
      "Mentorship from academic professionals.",
      "Supporting over 1,000 students annually."
    ]
  },
  {
    id: "education-3",
    title: "School Infrastructure Upgrade",
    description: "A massive drive to renovate and build new school facilities, ensuring a safe and conducive learning environment for all.",
    points: [
      "Construction of 30 new school buildings.",
      "Renovation of over 150 classrooms.",
      "Provision of clean sanitation and drinking water."
    ]
  }
];
export default function ClientEducationPage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      {/* ...rest of your education content... */}
    </div>
  );
}
