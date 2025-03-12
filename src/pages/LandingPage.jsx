import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";
import companies from "../data/companies";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import faqs from "../data/faqs";

function LandingPage() {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find Your Dream Job
          <span className="flex items-center gap-2 sm:gap-6">
            At CareerHub
            {/* <img
              src="/CareerHub logo.png"
              className="h-14 sm:h-24 lg:h-32"
              alt="CareerHub Logo"
            />  */}
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
      <div className="flex gap-6 justify-center">
        {/* buttons */}
        <Link to={"/jobs"}>
          <Button variant="blue" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to={"/post-job"}>
          <Button variant="destructive" size="xl">
            Post a Job
          </Button>
        </Link>
      </div>
      {/* carousel */}
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* banner   // here if you wish you can customise your own image or video for landing page*/}  
      {/* <img src="/CareersHub banner.jpeg" className="w-full" /> */}

      {/* <img src="#" className="w-full" /> */}
      {/* <video className="w-full" autoPlay loop muted>
        <source src = "/CareersHub banner.mp4" type="video/mp4" />
      </video> */}

<section className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {/* card */}  
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </section>

      {/* Accordion */}
      <Accordion type="multiple" className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
}

export default LandingPage;


//Modern design 

// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// import faqs from "@/data/faqs";

// function LandingPage() {
//   return (
//     <div className="min-h-screen bg-background">
//       {/* Hero Section */}
//       <section className="container flex min-h-[70vh] flex-col items-center justify-center gap-8 pt-24 text-center">
//         <div className="max-w-4xl">
//           <h1 className="text-5xl font-bold text-primary md:text-7xl">
//             Find Your Dream Job
//           </h1>
//           <p className="mt-6 text-lg text-secondary md:text-xl">
//             Connect with top companies and land your next role in tech.
//           </p>
//         </div>

//         <div className="flex gap-4">
//           <Button className="button-primary px-8 text-lg" asChild>
//             <Link to="/jobs">Browse Jobs</Link>
//           </Button>
//           <Button className="button-secondary px-8 text-lg" asChild>
//             <Link to="/post-job">Post a Job</Link>
//           </Button>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="container grid grid-cols-1 gap-8 py-16 md:grid-cols-2">
//         <Card>
//           <CardHeader>
//             <CardTitle className="font-bold text-primary">For Job Seekers</CardTitle>
//           </CardHeader>
//           <CardContent>
//             Search and apply for jobs, track applications, and more.
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle className="font-bold text-primary">For Employers</CardTitle>
//           </CardHeader>
//           <CardContent>
//             Post jobs, manage applications, and find the best candidates.
//           </CardContent>
//         </Card>
//       </section>

//       {/* FAQ Section */}
//       <section className="container py-16">
//         <h2 className="mb-8 text-3xl font-bold text-primary">FAQs</h2>
//         <Accordion type="multiple" className="w-full">
//           {faqs.map((faq, index) => (
//             <AccordionItem key={index} value={`item-${index + 1}`}>
//               <AccordionTrigger className="text-secondary">
//                 {faq.question}
//               </AccordionTrigger>
//               <AccordionContent className="text-secondary">
//                 {faq.answer}
//               </AccordionContent>
//             </AccordionItem>
//           ))}
//         </Accordion>
//       </section>
//     </div>
//   );
// }

// export default LandingPage;

// import React from "react";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// import faqs from "@/data/faqs";
// import { motion } from "framer-motion";

// function LandingPage() {
//   return (
//     <div className="min-h-screen bg-background">
//       {/* Hero Section */}
//       <section className="container flex min-h-[70vh] flex-col items-center justify-center gap-8 pt-24 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-4xl"
//         >
//           <h1 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
//             Find Your Dream Job
//           </h1>
//           <p className="mt-6 text-lg text-secondary md:text-xl">
//             Connect with top companies and land your next role in tech.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.5 }}
//           className="flex gap-4"
//         >
//           <Button className="button-primary px-8 text-lg" asChild>
//             <Link to="/jobs">Browse Jobs</Link>
//           </Button>
//           <Button className="button-secondary px-8 text-lg" asChild>
//             <Link to="/post-job">Post a Job</Link>
//           </Button>
//         </motion.div>
//       </section>

//       {/* Features Section */}
//       <section className="container grid grid-cols-1 gap-8 py-16 md:grid-cols-2">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Card>
//             <CardHeader>
//               <CardTitle className="font-bold text-primary">For Job Seekers</CardTitle>
//             </CardHeader>
//             <CardContent>
//               Search and apply for jobs, track applications, and more.
//             </CardContent>
//           </Card>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <Card>
//             <CardHeader>
//               <CardTitle className="font-bold text-primary">For Employers</CardTitle>
//             </CardHeader>
//             <CardContent>
//               Post jobs, manage applications, and find the best candidates.
//             </CardContent>
//           </Card>
//         </motion.div>
//       </section>

//       {/* FAQ Section */}
//       <section className="container py-16">
//         <h2 className="mb-8 text-3xl font-bold text-primary">FAQs</h2>
//         <Accordion type="multiple" className="w-full">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <AccordionItem value={`item-${index + 1}`}>
//                 <AccordionTrigger className="text-secondary">
//                   {faq.question}
//                 </AccordionTrigger>
//                 <AccordionContent className="text-secondary">
//                   {faq.answer}
//                 </AccordionContent>
//               </AccordionItem>
//             </motion.div>
//           ))}
//         </Accordion>
//       </section>
//     </div>
//   );
// }

// export default LandingPage;