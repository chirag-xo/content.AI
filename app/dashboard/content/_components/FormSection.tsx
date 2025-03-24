import React from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface PROPS {
  selectedTemplate?: TEMPLATE;
}
function FormSection({ selectedTemplate }: PROPS) {
  return (
    <div className="p-5 shadow-md border rounded-lg">
      <Image
        src={selectedTemplate?.icon || "/default-icon.png"}
        width={80}
        height={80}
        alt={selectedTemplate?.name || "Default alt text"}
      />
      <h2 className="text-2xl font-bold mb-2 text-primary">
        {selectedTemplate?.name}
      </h2>
      <p className="text-sm text-gray-500">{selectedTemplate?.desc}</p>
      <form>
        {selectedTemplate?.form?.map((item, index) => (
          <div>
            <label>{item.label}</label>
            {item.field == "input" ? 
              <Input />
            : item.field == "textarea" ? 
              <Textarea />
             : null}
          </div>
        ))}
      </form>
    </div>
  );
}
export default FormSection;
