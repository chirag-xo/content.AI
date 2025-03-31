"use client"
import React, { useContext, useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Link } from 'lucide-react'
import { chatSession } from '@/utils/AiModel'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useRouter } from 'next/navigation'
import { UpdateCreditUsageContext } from '@/app/(context)/UpadteCreditUsageContext'


interface PROPS{
    params:{
        'template-slug':string
    }
}
function CreateNewContent(props:PROPS) {

    const selectedTemplate:TEMPLATE|undefined = Templates?.find((item) => item.slug == props.params['template-slug']);
    const [loading,setLoading]=useState(false);
    const [aiOutput,setAiOutput]=useState<string>('');
    const {user}=useUser();
    const {totalUsage,setTotalUsage}=useContext(TotalUsageContext)
    const router=useRouter();
    const {UpadteCreditUsageContext,setUpdateCreditUsageContext}=useContext(UpdateCreditUsageContext)

    


    const GenerateAIContent= async(formData:any)=>{
        if(totalUsage>=10000){
            alert("You have reached your limit of 10,000 credits. Please upgrade your plan to continue using the service.")
            router.push('/dashboard/billing'); 
            return;
        }

        setLoading(true);
        const SelectedPrompt=selectedTemplate?.aiprompt;

        const FinalAIprompt=JSON.stringify(formData)+","+SelectedPrompt;

        const result = await chatSession.sendMessage(FinalAIprompt);

        console.log(result.response.text());
        setAiOutput(result?.response.text());
        await SaveInDb(formData,selectedTemplate?.slug,result?.response.text());
        setLoading(false);

        setUpdateCreditUsageContext(Date.now());

    }

    const SaveInDb=async(formData:any,slug:any,aiResp:string)=>{
        const result =await db.insert(AIOutput).values({
            formData:formData,
            templateSlug:slug,
            aiResponse:aiResp,
            createdBy:user?.primaryEmailAddress?.emailAddress,
            createdAt:moment().format('DD/MM/YYYY,h:mm')

        });

        
    }

  return (
    <div className='p-10'>
        <a href="/dashboard">
            <Button>
                <ArrowLeft />
                 Back
            </Button>
        </a> 
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 py-5'>
            {/* Form Section */}
                <FormSection 
                selectedTemplate = {selectedTemplate}
                userFormInput= {(v:any)=>GenerateAIContent(v)}
                loading = {loading}
                />

            {/* Output Section */}
            <div className='col-span-2'>
                <OutputSection aiOutput={aiOutput}/>

            </div>
        </div>
    </div>
  )
}

export default CreateNewContent