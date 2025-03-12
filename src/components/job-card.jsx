/* eslint-disable react/prop-types */
import { Heart, MapPinIcon, Trash2Icon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Link } from "react-router-dom";
import useFetch from "@/hooks/use-fetch";
import { deleteJob, saveJob } from "@/api/apiJobs";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";

const JobCard = ({
  job,
  isMyJob = false,
  savedInit = false,
  onJobAction = () => {},
}) => {
  const [saved, setSaved] = useState(savedInit);

  const {
    fn: fnSavedJob,
    data: savedJob,
    loading: loadingSavedJob,
  } = useFetch(saveJob,{
    alreadySaved: saved,
  });

  const { user } = useUser();

  const { loading: loadingDeleteJob, fn: fnDeleteJob } = useFetch(deleteJob, {
    job_id: job.id,
  });

  // const {
  //   loading: loadingSavedJob,
  //   data: savedJob,
  //   fn: fnSavedJob,
  // } = useFetch(saveJob);

  const handleSaveJob = async () => {
    await fnSavedJob({
      user_id: user.id,
      job_id: job.id,
    });
    onJobAction();
  };

  const handleDeleteJob = async () => {
    await fnDeleteJob();
    onJobAction();
  };

  useEffect(() => {
    if (savedJob !== undefined) setSaved(savedJob?.length > 0);
  }, [savedJob]);

  return (
    <Card className="flex flex-col">
      {loadingDeleteJob && (
        <BarLoader className="mt-4" width={"100%"} color="#36d7b7" />
      )}
      <CardHeader className="flex">
        <CardTitle className="flex justify-between font-bold">
          {job.title}
          {isMyJob && (
            <Trash2Icon
              fill="red"
              size={18}
              className="text-red-300 cursor-pointer"
              onClick={handleDeleteJob}
            />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 flex-1">
        <div className="flex justify-between">
          {job.company && <img src={job.company.logo_url} className="h-6" />}
          <div className="flex gap-2 items-center">
            <MapPinIcon size={15} /> {job.location}
          </div>
        </div>
        <hr />
        {job.description.substring(0, job.description.indexOf("."))}.
      </CardContent>
      <CardFooter className="flex gap-2">
        <Link to={`/job/${job.id}`} className="flex-1">
          <Button variant="secondary" className="w-full">
            More Details
          </Button>
        </Link>
        {!isMyJob && (
          <Button
            variant="outline"
            className="w-15"
            onClick={handleSaveJob}
            disabled={loadingSavedJob}
          >
            {saved ? (
              <Heart size={20} fill="red" stroke="red" />
            ) : (
              <Heart size={20} />
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default JobCard;



// Modern design 

// import { Heart, MapPin, Briefcase, Clock, Trash2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
// import { useUser } from "@clerk/clerk-react";
// import useFetch from "@/hooks/use-fetch";
// import { BarLoader } from "react-spinners";

// const JobCard = ({ job, isMyJob = false, savedInit = false, onJobAction = () => {} }) => {
//   const { user } = useUser();
//   const [saved, setSaved] = useState(savedInit);

//   const { fn: fnSavedJob, loading: loadingSavedJob } = useFetch(saveJob, {
//     alreadySaved: saved,
//   });

//   const handleSaveJob = async () => {
//     await fnSavedJob({ user_id: user.id, job_id: job.id });
//     onJobAction();
//   };

//   return (
//     <Card className="card">
//       <CardHeader className="flex-row items-center justify-between p-4">
//         <div className="flex items-center gap-2">
//           {job.company?.logo_url && (
//             <img src={job.company.logo_url} className="h-8 w-8 rounded-lg" />
//           )}
//           <h3 className="text-lg font-semibold text-primary">{job.title}</h3>
//         </div>
//         {isMyJob ? (
//           <Trash2
//             className="h-5 w-5 cursor-pointer text-red-400 transition hover:text-red-300"
//             onClick={handleDeleteJob}
//           />
//         ) : (
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={handleSaveJob}
//             disabled={loadingSavedJob}
//           >
//             <Heart
//               className={`h-5 w-5 ${saved ? "fill-red-500 stroke-red-500" : "text-secondary"}`}
//             />
//           </Button>
//         )}
//       </CardHeader>

//       <CardContent className="flex flex-col gap-3 p-4 pt-0">
//         <div className="flex flex-wrap items-center gap-3 text-sm text-secondary">
//           <div className="flex items-center gap-1">
//             <Briefcase className="h-4 w-4" /> {job.company?.name}
//           </div>
//           <div className="flex items-center gap-1">
//             <MapPin className="h-4 w-4" /> {job.location}
//           </div>
//           <div className="flex items-center gap-1">
//             <Clock className="h-4 w-4" />{" "}
//             {new Date(job.created_at).toLocaleDateString()}
//           </div>
//         </div>
//         <p className="line-clamp-2 text-secondary">{job.description}</p>
//       </CardContent>

//       <CardFooter className="p-4 pt-0">
//         <Button className="button-primary w-full" asChild>
//           <Link to={`/job/${job.id}`}>View Details</Link>
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// };

// export default JobCard;


// import React, { useState } from "react";
// import { Heart, MapPin, Briefcase, Clock, Trash2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
// import { useUser } from "@clerk/clerk-react";
// import useFetch from "@/hooks/use-fetch";
// import { BarLoader } from "react-spinners";
// import { motion } from "framer-motion";

// const JobCard = ({ job, isMyJob = false, savedInit = false, onJobAction = () => {} }) => {
//   const { user } = useUser();
//   const [saved, setSaved] = useState(savedInit);

//   const { fn: fnSavedJob, loading: loadingSavedJob } = useFetch(saveJob, {
//     alreadySaved: saved,
//   });

//   const handleSaveJob = async () => {
//     await fnSavedJob({ user_id: user.id, job_id: job.id });
//     onJobAction();
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 0, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Card className="card">
//         <CardHeader className="flex-row items-center justify-between p-4">
//           <div className="flex items-center gap-2">
//             {job.company?.logo_url && (
//               <img src={job.company.logo_url} className="h-8 w-8 rounded-lg" />
//             )}
//             <h3 className="text-lg font-semibold text-primary">{job.title}</h3>
//           </div>
//           {isMyJob ? (
//             <Trash2
//               className="h-5 w-5 cursor-pointer text-red-400 transition hover:text-red-300"
//               onClick={handleDeleteJob}
//             />
//           ) : (
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={handleSaveJob}
//               disabled={loadingSavedJob}
//             >
//               <Heart
//                 className={`h-5 w-5 ${saved ? "fill-red-500 stroke-red-500" : "text-secondary"}`}
//               />
//             </Button>
//           )}
//         </CardHeader>

//         <CardContent className="flex flex-col gap-3 p-4 pt-0">
//           <div className="flex flex-wrap items-center gap-3 text-sm text-secondary">
//             <div className="flex items-center gap-1">
//               <Briefcase className="h-4 w-4" /> {job.company?.name}
//             </div>
//             <div className="flex items-center gap-1">
//               <MapPin className="h-4 w-4" /> {job.location}
//             </div>
//             <div className="flex items-center gap-1">
//               <Clock className="h-4 w-4" />{" "}
//               {new Date(job.created_at).toLocaleDateString()}
//             </div>
//           </div>
//           <p className="line-clamp-2 text-secondary">{job.description}</p>
//         </CardContent>

//         <CardFooter className="p-4 pt-0">
//           <Button className="button-primary w-full" asChild>
//             <Link to={`/job/${job.id}`}>View Details</Link>
//           </Button>
//         </CardFooter>
//       </Card>
//     </motion.div>
//   );
// };

// export default JobCard;