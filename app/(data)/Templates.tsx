export default [
    {
        name : 'Blog Title',
        desc : 'An AI tool that generates blog title depends on your blog information',
        category : 'Blog',
        icon : 'https://cdn-icons-png.flaticon.com/128/4693/4693265.png',
        aiprompt : 'Give me 5 blog topic ideas in bullet wise only based on given niche & outline and give me result in Rich text editor format',
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
            name: 'Instagram Caption Generator',
            desc: 'Craft engaging Instagram captions based on your photo or topic.',
            category: 'Instagram',
            icon: 'https://cdn-icons-png.flaticon.com/128/5721/5721461.png',
            aiprompt: 'Generate a creative and engaging Instagram caption for the following content: [Content]. Include relevant hashtags.',
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
            aiprompt: 'Write a professional LinkedIn post about [Topic]. Focus on [Goal: e.g., networking, thought leadership, job search].',
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
            aiprompt: 'Create a Twitter thread about [Topic]. Use concise sentences and include relevant hashtags.',
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
            name: 'YouTube Video Title Generator',
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
            name: 'Blog Post Outline Generator',
            desc: 'Generate a structured outline for your blog posts.',
            category: 'Blog',
            icon: 'https://cdn-icons-png.flaticon.com/128/6114/6114045.png',
            aiprompt: 'Create a detailed blog post outline for the topic: [Topic]. Include main points and subpoints.',
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
            name: 'Email Subject Line Generator',
            desc: 'Generate compelling email subject lines to increase open rates.',
            category: 'Email',
            icon: 'https://cdn-icons-png.flaticon.com/128/893/893292.png',
            aiprompt: 'Generate 5 compelling email subject lines for an email about [Topic].',
            slug: 'email-subject-generator',
            form: [
                {
                    label: 'Enter Email Topic',
                    field: 'input',
                    name: 'topic',
                    required: true
                }
            ]
        },
        {
            name: 'Product Description Writer',
            desc: 'Create persuasive product descriptions for your online store.',
            category: 'E-commerce',
            icon: 'https://cdn-icons-png.flaticon.com/128/15605/15605288.png',
            aiprompt: 'Write a persuasive product description for [Product Name]. Highlight its key features and benefits.',
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
            aiprompt: 'Generate 5 attention-grabbing ad headlines for an ad promoting [Product/Service].',
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
            aiprompt: 'Generate a list of frequently asked questions and answers about [Topic/Product].',
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
            aiprompt: 'Generate 5 creative story ideas based on the following theme: [Theme].',
            slug: 'story-idea-generator',
            form: [
                {
                    label: 'Enter Story Theme',
                    field: 'input',
                    name: 'theme',
                    required: true
                }
            ]
        }
    ]
    

