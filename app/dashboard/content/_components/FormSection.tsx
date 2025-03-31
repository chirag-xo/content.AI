"use client";
import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput:any
  loading:boolean
}
function FormSection({ selectedTemplate,userFormInput,loading }: PROPS) {
  const [formData, setFormData] = useState<any>({});

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    userFormInput(formData)
  };
  return (
    <div className="p-5 shadow-md border rounded-lg bg-white">
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
      <form className=" mt-6 " onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div className=" my-2 flex flex-col gap-2 mb-7" key={index}>
            <label className=" font-bold text-l" htmlFor={`field-${index}`}>
              {item.label}
            </label>
            {item.field === "input" ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
                id={`field-${index}`} // Added id here
              />
            ) : item.field === "textarea" ? (
              <Textarea
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
                id={`field-${index}`} // Added id here
              />
            ) : null}
          </div>
        ))}
        <Button type="submit" className="w-full py-6" disabled={loading}>
            {loading&&<Loader2Icon className="animate-spin"/>}
          Generate Content
        </Button>
      </form>
    </div>
  );
}
export default FormSection;