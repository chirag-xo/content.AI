export default [
    {
        name : 'Blog Title',
        desc : 'An AI tool that generates blog title depends on your blog information',
        category : 'Blog',
        icon : 'https://cdn-icons-png.flaticon.com/128/4693/4693265.png',
        aiprompt : 'Give me 5 blog topic ideas in bullet wise only based on given niche & outline',
        slug : 'generate-blog-title',
        form : [
            {
                label : 'Enter your Blog Niche',
                field : 'input',
                name : 'niche',
                required : true

            },
            {
                label :'Enter Blog Outline',
                field : 'textarea',
                name : 'outline',

            }

        ]
    },
    
        {
            name: 'Instagram Caption',
            desc: 'Craft engaging Instagram captions based on your photo or topic.',
            category: 'Instagram',
            icon: 'https://cdn-icons-png.flaticon.com/128/5721/5721461.png',
            aiprompt: 'Generate 5 short , creative and engaging Instagram captions for the following content: [Content]. Include relevant hashtags .',
            slug: 'instagram-caption-generator',
            form: [
                {
                    label: 'Enter Photo/Topic Description',
                    field: 'textarea',
                    name: 'content',
                    required: true
                }
            ]
        },
        {
            name: 'LinkedIn Post Writer',
            desc: 'Generate professional LinkedIn posts for your network.',
            category: 'LinkedIn',
            icon: 'https://cdn-icons-png.flaticon.com/128/3991/3991775.png',
            aiprompt: 'Write a professional LinkedIn post about [Topic]. Focus on [Goal: e.g., networking, thought leadership, job search]. Give me result in Rich text editor format',
            slug: 'linkedin-post-writer',
            form: [
                {
                    label: 'Enter Post Topic',
                    field: 'input',
                    name: 'topic',
                    required: true
                },
                {
                    label: 'Enter Post Goal',
                    field: 'input',
                    name: 'goal',
                    required: false
                }
            ]
        },
        {
            name: 'Twitter Thread Creator',
            desc: 'Create compelling Twitter threads to engage your audience.',
            category: 'Twitter',
            icon: 'https://cdn-icons-png.flaticon.com/128/2504/2504947.png',
            aiprompt: 'Create a Twitter thread about [Topic]. Use concise sentences and include relevant hashtags.Give me result in Rich text editor format',
            slug: 'twitter-thread-creator',
            form: [
                {
                    label: 'Enter Thread Topic',
                    field: 'input',
                    name: 'topic',
                    required: true
                }
            ]
        },
        {
            name: 'YouTube Video Title',
            desc: 'Generate catchy YouTube video titles to increase views.',
            category: 'YouTube',
            icon: 'https://cdn-icons-png.flaticon.com/128/15047/15047410.png',
            aiprompt: 'Generate 5 catchy YouTube video titles for a video about [Topic].',
            slug: 'youtube-title-generator',
            form: [
                {
                    label: 'Enter Video Topic',
                    field: 'input',
                    name: 'topic',
                    required: true
                }
            ]
        },
        {
            name: 'Blog Post Outline',
            desc: 'Generate a structured outline for your blog posts.',
            category: 'Blog',
            icon: 'https://cdn-icons-png.flaticon.com/128/6114/6114045.png',
            aiprompt: 'Create a detailed blog post outline for the topic: [Topic]. Include main points and subpoints.Give me result in Rich text editor format',
            slug: 'blog-outline-generator',
            form: [
                {
                    label: 'Enter Blog Post Topic',
                    field: 'input',
                    name: 'topic',
                    required: true
                }
            ]
        },
        {
            name: 'Nutrient Information',
            desc: 'Get information about specific nutrients and their benefits.',
            category: 'Nutrition',
            icon: 'https://cdn-icons-png.flaticon.com/128/12042/12042028.png',
            aiprompt: 'Provide information about [Nutrient] including its benefits, food sources, and recommended daily intake.',
            slug: 'nutrient-information',
            form: [
                { label: 'Enter Nutrient (e.g., Vitamin C, Protein)', field: 'input', name: 'nutrient', required: true }
            ]
        },
        {
            name: 'Product Description',
            desc: 'Create persuasive product descriptions for your online store.',
            category: 'E-commerce',
            icon: 'https://cdn-icons-png.flaticon.com/128/15605/15605288.png',
            aiprompt: 'Write a short persuasive product description for [Product Name]. Highlight its key features and benefits.Give me result in Rich text editor format',
            slug: 'product-description-writer',
            form: [
                {
                    label: 'Enter Product Name',
                    field: 'input',
                    name: 'product',
                    required: true
                }
            ]
        },
        {
            name: 'Ad Headline Generator',
            desc: 'Generate attention-grabbing ad headlines for your campaigns.',
            category: 'Ads',
            icon: 'https://cdn-icons-png.flaticon.com/128/2282/2282171.png',
            aiprompt: 'Generate 5 short & to the point attention-grabbing ad headlines for an ad promoting [Product/Service].Give me result in Rich text editor format',
            slug: 'ad-headline-generator',
            form: [
                {
                    label: 'Enter Product/Service',
                    field: 'input',
                    name: 'product',
                    required: true
                }
            ]
        },
        {
            name: 'FAQ Generator',
            desc: 'Generate a list of frequently asked questions and answers.',
            category: 'Help',
            icon: 'https://cdn-icons-png.flaticon.com/128/4403/4403555.png',
            aiprompt: 'Generate a list of frequently asked one liner questions and answers about [Topic/Product].Give me result in Rich text editor format',
            slug: 'faq-generator',
            form: [
                {
                    label: 'Enter Topic/Product',
                    field: 'input',
                    name: 'topic',
                    required: true
                }
            ]
        },
        {
            name: 'Story Idea Generator',
            desc: 'Generate creative story ideas for your writing.',
            category: 'Writing',
            icon: 'https://cdn-icons-png.flaticon.com/128/10221/10221707.png',
            aiprompt: 'Generate 5 creative story ideas based on the following theme: [Theme].Give me result in Rich text editor format',
            slug: 'story-idea-generator',
            form: [
                {
                    label: 'Enter Story Theme',
                    field: 'input',
                    name: 'theme',
                    required: true
                }
            ]
        },
        {
            name: 'Travel Itinerary Planner',
            desc: 'Plan a detailed travel itinerary for your next trip.',
            category: 'Travel',
            icon: 'https://cdn-icons-png.flaticon.com/128/2028/2028376.png',
            aiprompt: 'Create a travel itinerary for [Destination] for [Number] days, focusing on what are the best places to visit in a bullet point format in less than 1000 words.Give me result in Rich text editor format.',
            slug: 'travel-itinerary-planner',
            form: [
                { label: 'Enter Destination', field: 'input', name: 'destination', required: true },
                { label: 'Enter Number of Days', field: 'input', name: 'days', type: 'number', required: true },
            ]
        },
        {
            name: 'Workout Routine',
            desc: 'Generate a personalized workout routine based on your goals.',
            category: 'Fitness',
            icon: 'https://cdn-icons-png.flaticon.com/128/7922/7922188.png',
            aiprompt: 'Create a [Duration] workout routine focusing on [Muscle Groups] for beginner , intermediate and advanced category within 1000 word limit in bullet point format.Give me result in Rich text editor format.',
            slug: 'workout-routine-generator',
            form: [
                { label: 'Enter Duration (e.g., 30 minutes)', field: 'input', name: 'duration', required: true },
                { label: 'Enter Muscle Groups (comma-separated)', field: 'textarea', name: 'muscleGroups', required: true },
            ]
        },
        {
            name: 'First Aid Guide',
            desc: 'Get step-by-step first aid instructions for common emergencies.',
            category: 'Medical',
            icon: 'https://cdn-icons-png.flaticon.com/128/2760/2760491.png',
            aiprompt: 'Provide first aid instructions for [Emergency Situation].',
            slug: 'first-aid-guide',
            form: [
                { label: 'Enter Emergency Situation (e.g., "burn", "choking")', field: 'input', name: 'emergencySituation', required: true }
            ]
        },
        {
            name: 'Grocery List Generator',
            desc: 'Generate a grocery list based on your meal plan.',
            category: 'Food',
            icon: 'https://cdn-icons-png.flaticon.com/128/1261/1261163.png',
            aiprompt: 'Create a grocery list based on this meal plan: [Meal Plan].',
            slug: 'grocery-list-generator',
            form: [
                { label: 'Enter Meal Plan (e.g., "pasta, salad, sandwiches")', field: 'textarea', name: 'mealPlan', required: true }
            ]
        },
        {
            name: 'Nutritional Analysis',
            desc: 'Analyze the nutritional content of a recipe.',
            category: 'Nutrition',
            icon: 'https://cdn-icons-png.flaticon.com/128/10303/10303388.png',
            aiprompt: 'Analyze the nutritional content of the following recipe: [Recipe] or item:[Item].Give results in rich text editor format',
            slug: 'recipe-analysis',
            form: [
                { label: 'Enter Recipe/item', field: 'textarea', name: 'recipe', required: true }
            ]
        },
        {
            name: 'Gift Idea Generator',
            desc: 'Generate gift ideas for special occasions.',
            category: 'Lifestyle',
            icon: 'https://cdn-icons-png.flaticon.com/128/3656/3656962.png',
            aiprompt: 'Generate gift ideas for [Person] on [Occasion] with a budget of [Budget].Give me result in Rich text editor format',
            slug: 'gift-idea-generator',
            form: [
                { label: 'Enter Person (e.g., friend, family member)', field: 'input', name: 'person', required: true },
                { label: 'Enter Occasion', field: 'input', name: 'occasion', required: true },
                { label: 'Enter Budget', field: 'input', name: 'budget', required: true }
            ]
        },
        {
            name: 'Symptom Checker',
            desc: 'Get potential health conditions based on symptoms.',
            category: 'Medical',
            icon: 'https://cdn-icons-png.flaticon.com/128/6283/6283228.png',
            aiprompt: 'Based on the following symptoms: [Symptoms], what are the potential medical conditions? Provide a brief overview of each condition.',
            slug: 'symptom-checker',
            form: [
                { label: 'Enter Symptoms (comma-separated)', field: 'textarea', name: 'symptoms', required: true }
            ]
        },
        {
            name: 'Medication Information',
            desc: 'Get information about specific medications.',
            category: 'Medical',
            icon: 'https://cdn-icons-png.flaticon.com/128/883/883356.png',
            aiprompt: 'Provide information about the medication [Medication Name], including its uses, dosage, side effects, and precautions.',
            slug: 'medication-info',
            form: [
                { label: 'Enter Medication Name', field: 'input', name: 'medicationName', required: true }
            ]
        },
        {
            name: 'Grammarly',
            desc: 'Corrects grammatical errors and improves vocabulary in sentences.',
            category: 'Writing',
            icon: 'https://cdn-icons-png.flaticon.com/128/6749/6749514.png',
            aiprompt: 'Correct the grammar and improve the vocabulary in the following sentence: [Sentence].',
            slug: 'grammar-vocabulary-corrector',
            form: [
                { label: 'Enter Sentence', field: 'textarea', name: 'sentence', required: true }
            ]
        }
        
        
        
            
    ]

    

