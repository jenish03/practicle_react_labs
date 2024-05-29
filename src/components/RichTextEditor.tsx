import { useState, useRef } from "react";
import { Button } from "./ui/button";
import clsx from "clsx";

const RichTextEditor = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);

  const toggleBold = () => {
    document.execCommand("bold", false);
    setBold(!bold);
  };

  const toggleItalic = () => {
    document.execCommand("italic", false);
    setItalic(!italic);
  };

  const toggleUnderline = () => {
    document.execCommand("underline", false);
    setUnderline(!underline);
  };

  return (
    <div className="flex flex-col">
      <div className="my-6">This is just a simple demo.</div>
      <div className="flex space-x-2 mb-2 col-span-1">
        <div>
          <Button
            onClick={toggleBold}
            className={clsx(
              "shrink-0 px-4 py-2 rounded-md mr-2",
              !bold && "bg-white text-black"
            )}
          >
            Bold
          </Button>
          <Button
            onClick={toggleItalic}
            className={clsx(
              "shrink-0 px-4 py-2 rounded-md mr-2",
              !italic && "bg-white text-black"
            )}
          >
            Italic
          </Button>
          <Button
            onClick={toggleUnderline}
            className={clsx(
              "shrink-0 px-4 py-2 rounded-md mr-2",
              !underline && "bg-white text-black"
            )}
          >
            Underline
          </Button>
        </div>
      </div>
      <div
        ref={editorRef}
        className="p-2 border border-gray-300 rounded-md"
        contentEditable
        suppressContentEditableWarning
      />
      <div className="mt-6">We can use CK Editor for rich features.</div>
    </div>
  );
};

export default RichTextEditor;
