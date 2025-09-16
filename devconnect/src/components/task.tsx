import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type TaskProps = {
  id: number;
  title: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export function Task({ id, title, completed, onToggle, onDelete }: TaskProps) {
  return (
    <Card className="items-center justify-between p-3 mb-2 w-full">
      <div
        onClick={() => onToggle(id)}
        className={`cursor-pointer ${
          completed ? "line-through text-gray-400" : ""
        }`}
      >
        {title}
      </div>
      <div>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => onDelete(id)}
          className="text-red-500 hover:text-red-700"
        >
          ✕
        </Button>
      </div>
    </Card>
  );
}
