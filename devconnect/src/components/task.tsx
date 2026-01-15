// import { useState } from "react";
// import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


type TaskProps = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export function Task({ id, title, description, completed, onToggle, onDelete }: TaskProps) {
  // const [showDescription, setShowDescription] = useState(false);

  return (
    <Accordion type="single" collapsible className="mb-2.5 bg-gray-200">
  <AccordionItem value="item-1">
    <AccordionTrigger onClick={() => onToggle(id)} className={`px-3 text-xl flex justify-between cursor-pointer ${completed ? "line-through text-gray-400" : ""}`}>
      {title}
    </AccordionTrigger>
      <Button variant="destructive" size="sm" onClick={() => onDelete(id)} className="text-black border">
         ✕
      </Button>
    <AccordionContent className="text-lg py-2 px-3 border-r border-b border-l border-gray-100 bg-gray-100">
      {description}
    </AccordionContent>
  </AccordionItem>
</Accordion>
    // <Card className="items-center justify-between p-3 mb-2 w-full">
    //   <div onClick={() => onToggle(id)} className={`cursor-pointer ${completed ? "line-through text-gray-400" : ""}`}>
    //     {title}
    //   </div>
    //   <Button onClick={() => setShowDescription(!showDescription)}>
    //     {showDescription ? "Hide Description" : "Show Description"}
    //   </Button>
    //   {showDescription && <p>{description}</p>}
    //   <Button variant="destructive" size="sm" onClick={() => onDelete(id)}>
    //     ✕
    //   </Button>
    // </Card>
  );
}


// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// type TaskProps = {
//   id: number;
//   title: string;
//   completed: boolean;
//   onToggle: (id: number) => void;
//   onDelete: (id: number) => void;
// };

// export function Task({ id, title, completed, onToggle, onDelete }: TaskProps) {
//   return (
//     <Card className="items-center justify-between p-3 mb-2 w-full">
//       <div
//         onClick={() => onToggle(id)}
//         className={`cursor-pointer ${
//           completed ? "line-through text-gray-400" : ""
//         }`}
//       >
//         {title}
//       </div>
//       <div>
//         <Button
//           variant="destructive"
//           size="sm"
//           onClick={() => onDelete(id)}
//           className="text-red-500 hover:text-red-700"
//         >
//           ✕
//         </Button>
//       </div>
//     </Card>
//   );
// }
