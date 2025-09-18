// questions/AI-102.js
export const questions = [
  {
    id: 1,
    question:
      "You are building an app that will extract insights from video files. You need to identify which service to use. The solution must ensure that you can customize the language model used. What should you use?",
    options: [{ id: 0, text: "Azure AI Video Indexer" }],
    answer: 0,
    explanation:
      [cite_start]"The only service that can customize the language model for a solution based on gaining insights from videos in Azure AI Video Indexer. [cite: 11]",
    type: "single",
  },
  {
    id: 2,
    question:
      "Your company plans to develop an app with an AI model using proprietary data. You need to select an Azure platform to ensure the model is connected and operationalized effectively. Which Azure platform should you recommend?",
    options: [
      { id: 0, text: "Azure AI Foundry" },
      { id: 1, text: "Azure AI Content Understanding" },
      { id: 2, text: "Azure AI Speech" },
      { id: 3, text: "Azure AI Vision" },
    ],
    answer: 0,
    explanation:
      [cite_start]"Azure AI Foundry is the most appropriate platform because it offers specialized tools for deploying models, connecting data, and managing AI resources. [cite: 22]",
    type: "single",
  },
  {
    id: 3,
    question:
      "Your company is deploying a generative AI model using Microsoft Azure AI Foundry Service to assist customer support agents by providing suggested responses to user queries. You need to ensure the model generates outputs that are safe and free from harmful content. Each correct answer presents part of the solution. Which three actions should you take?",
    options: [
      { id: 0, text: "Enable users to provide feedback on responses." },
      { id: 1, text: "Integrate Azure AI Foundry Content Safety APIs." },
      { id: 2, text: "Train the model exclusively on synthetic data." },
      { id: 3, text: "Conduct red team exercises to test vulnerabilities." },
      { id: 4, text: "Document the model's decision-making logic." },
    ],
    answers: [1, 3, 4],
    explanation:
      [cite_start]"Conducting red team exercises helps identify vulnerabilities and improve the model's robustness against manipulation. [cite: 45] [cite_start]Documenting the model's decision-making logic provides transparency and supports explainability requirements. [cite: 47] [cite_start]Integrating Azure AI Foundry Content Safety APIs helps identify and filter harmful content in real-time. [cite: 50]",
    type: "multiple",
  },
  {
    id: 4,
    question:
      "You are building an app that will use an Azure AI Foundry Service resource. You need to identify the endpoint for the resource. From the Azure CLI, which command should you run?",
    options: [
      { id: 0, text: "az cognitiveservices account show --name myresource" },
      {
        id: 1,
        text: "az cognitiveservices account show --name myresource --resource-group cognitive-services-resource-group",
      },
    ],
    answer: 1,
    explanation:
      [cite_start]"As you need to provide the name and the resource group for your Cognitive Service account to retrieve the endpoint amongst other information for the resource, 'az cognitiveservices account show --name myresource --resource-group cognitive-services-resource-group' is the only valid command. [cite: 61]",
    type: "single",
  },
  {
    id: 5,
    question:
      "You are building an app that will identify the core concepts of a document by using Azure AI Foundry Service. Which endpoint should you use as part of the solution?",
    options: [
      { id: 0, text: "key phrase extraction" },
      { id: 1, text: "custom NER" },
      { id: 2, text: "Azure AI Vision API" },
    ],
    answer: 0,
    explanation:
      [cite_start]"You should use the key phrase extraction endpoint. [cite: 71] [cite_start]The custom NER endpoint will not do key phrase extraction and the Azure AI Vision API can be used to process PDF files but not to extract key phrase detection. [cite: 72]",
    type: "single",
  },
  {
    id: 6,
    question:
      "You plan to build an app that will use Azure AI Foundry Service. You need to identify the methods that can be used to authenticate to Azure AI Services. Which two methods can you use? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "a subscription key" },
      { id: 1, text: "Microsoft Entra ID" },
      { id: 2, text: "SAML tokens" },
      { id: 3, text: "Kerberos" },
    ],
    answers: [0, 1],
    explanation:
      [cite_start]"You can use a single or multi-service subscription keys to authenticate to Azure AI Services. [cite: 89] [cite_start]You can also authenticate to Azure AI Services by using a Microsoft Entra ID service principal and role-based access control (RBAC). [cite: 90]",
    type: "multiple",
  },
  {
    id: 7,
    question:
      "You have an Azure AI Foundry Service resource. You need to enable diagnostic logging. What are two prerequisites for diagnostic logging? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "a Log Analytics workspace" },
      { id: 1, text: "an Azure Storage account" },
    ],
    answers: [0, 1],
    explanation:
      [cite_start]"The prerequisites to enable diagnostic logging are to have an Azure Storage resource that retains diagnostic logs for policy audit, static analysis, or backup. [cite: 108] [cite_start]A Log Analytics resource provides a flexible log search and analytics tool that allows for analysis of raw logs generated by an Azure resource. [cite: 109]",
    type: "multiple",
  },
  {
    id: 8,
    question:
      'You are developing a containerized optical character recognition (OCR)-capable application by using Azure AI Services containers. While developing the solution, you retrieve a status message of “Mismatch”, and the connection to the AI Services resource fails. You need to ensure that the solution can connect to the AI Services resource. What should you do?',
    options: [
      { id: 0, text: "Confirm that the API key is for the correct resource type." },
      { id: 1, text: "Confirm that the API key is for the correct region." },
      { id: 2, text: "Upgrade your pricing tier." },
    ],
    answer: 0,
    explanation:
      [cite_start]"Mismatch means that the wrong API key has been used. [cite: 121] [cite_start]If you have provided an API key or endpoint for a different kind of Azure AI Services resource, you find your API key and service region in the Azure portal, in the Keys and Endpoint section for your Azure AI Services resource. [cite: 122]",
    type: "single",
  },
  {
    id: 9,
    question:
      "You create an Azure AI Foundry Content Safety solution to monitor the text input of a chat forum. You discover that the solution returns a severity level of 0 for various instances of harmful text. Which type of accuracy error is returned by the solution?",
    options: [{ id: 0, text: "a false negative" }],
    answer: 0,
    explanation:
      [cite_start]"A false negative arises when the model fails to identify harmful content and returns a severity level of 0. There are four accuracy error types, and a false negative indicates incorrectly accepted content in the text. [cite: 137]",
    type: "single",
  },
  {
    id: 10,
    question:
      "You are building an image moderation solution based on Azure AI Foundry Content Safety. You migrate images to an Azure Blob Storage location. You need to configure an access solution to enable the Foundry Content Safety solution to analyze the images. Which two actions should you perform? Each correct answer presents part of the solution.",
    options: [
      {
        id: 0,
        text: "Assign the Storage Blob Data Contributor/Owner/Reader role to the user-assigned managed identity.",
      },
      {
        id: 1,
        text: "Enable a system-assigned managed identity for the Content Safety instance.",
      },
      {
        id: 2,
        text: "Assign the Storage Blob Data Contributor/Owner/Reader role to the system-assigned managed identity.",
      },
    ],
    answers: [1, 2],
    explanation:
      [cite_start]"The only way to provide a Content Safety resource with access to images in Azure Blog Storage, is to enable a system-assigned managed identity and to assign the role Storage Blob Data Contributor/Owner/Reader to that managed identity. [cite: 154] [cite_start]User-assigned managed identities are not permitted in that scenario. [cite: 155]",
    type: "multiple",
  },
  {
    id: 11,
    question:
      "Your organization is developing an AI-powered e-learning platform that generates personalized educational content based on user inputs and reference documents. Concerns exist about generating inappropriate or misleading educational materials. You need to ensure AI-generated educational content complies with academic standards and avoids inappropriate material. What should you implement to address these concerns?",
    options: [
      { id: 0, text: "Implement Azure AI Foundry Content Safety." },
      { id: 1, text: "Use Azure AI Services Text Analytics." },
      { id: 2, text: "Train a custom model." },
      { id: 3, text: "Use Azure Translator." },
    ],
    answer: 0,
    explanation:
      [cite_start]"Azure Content Safety is the most suitable solution because it analyzes user inputs and reference documents to detect and block harmful or policy-violating content, ensuring generated educational materials are safe and compliant. [cite: 166]",
    type: "single",
  },
  {
    id: 12,
    question:
      "You are provisioning an Azure OpenAI in Foundry Models service resource. You need to ensure that the resource is only available to applications that are hosted in your Azure subscription. Which network security setting should you configure?",
    options: [
      {
        id: 0,
        text: "Disabled, and allow a private endpoint connection to establish access",
      },
      { id: 1, text: "All networks" },
      { id: 2, text: "Selected networks" },
    ],
    answer: 0,
    explanation:
      [cite_start]"Because the requirements state that access to the resource should only be for applications hosted in the Azure subscription, setting the network option to Disabled and configuring a private endpoint meets this requirement. [cite: 179]",
    type: "single",
  },
  {
    id: 13,
    question:
      "You are creating an application that references the Azure OpenAI REST API for a DALL-E model. You plan to use thumbnails of the images that DALL-E generates and display them in a table on a webpage. You need to find the image URLs in the JSON response. Which element should you review?",
    options: [
      { id: 0, text: "the imageURL array element" },
      { id: 1, text: "the result element" },
      { id: 2, text: "the operation-location header" },
    ],
    answer: 1,
    explanation:
      [cite_start]"The result from the initial request does not immediately return the results of the image generation process. [cite: 192] [cite_start]Instead, the response includes an operation-location header with a URL for a callback service that your application code can poll until the results of the image generation are ready. [cite: 193] [cite_start]The result element includes a collection of url elements, each of which references a PNG image file generated from the prompt. [cite: 194]",
    type: "single",
  },
  {
    id: 14,
    question:
      "You are building a web app that will generate images based on user prompts. The app will use the DALL-E 3 Azure OpenAI model. You need to ensure that HTTP requests against the Azure OpenAI API successfully generate images. Which three HTTP header properties should you include? Each correct answer presents part of the solution.",
    options: [
      { id: 0, text: "the API version used in this operation" },
      { id: 1, text: "the name of the Azure OpenAI service resource" },
      { id: 2, text: "the name of the DALL-E 3 model deployment" },
    ],
    answers: [0, 1, 2],
    explanation:
      [cite_start]"The name of the Azure OpenAI resource, the name of the DALL-E 3 model deployment, and the API version to be used are the three required header properties for HTTP requests. [cite: 215] [cite_start]The other answers are valid for use in the HTTP body but not the header. [cite: 216]",
    type: "multiple",
  },
  {
    id: 15,
    question:
      "You are building a GPT-based chat application that will answer questions about your company. You plan to use the Using your data feature in Azure OpenAI to ground the model with your company data. While testing, you discover that some responses are not accurate enough. You need to configure the Azure OpenAI resource to filter out less-relevant documents for responses. Which parameter should you configure?",
    options: [
      { id: 0, text: "Retrieved documents" },
      { id: 1, text: "Strictness" },
      { id: 2, text: "Content data" },
      { id: 3, text: "File name" },
    ],
    answer: 1,
    explanation:
      [cite_start]"The Strictness parameter sets the threshold to categorize documents as relevant to your queries. [cite: 228] [cite_start]Raising the Strictness parameter value means a higher threshold for relevance and filters out more less-relevant documents for responses. [cite: 229]",
    type: "single",
  },
  {
    id: 16,
    question:
      "Your organization is developing an AI-powered application using Azure OpenAI in Foundry Models. You need to choose a model for text generation. What should you recommend?",
    options: [
      { id: 0, text: "GPT-4" },
      { id: 1, text: "Azure AI Vision" },
      { id: 2, text: "Code-Davinci-003" },
      { id: 3, text: "DALL-E" },
    ],
    answer: 0,
    explanation:
      [cite_start]"GPT-4 is specifically designed for generating detailed and contextually accurate text responses, making it the most appropriate choice for the given requirement. [cite: 245]",
    type: "single",
  },
  {
    id: 17,
    question:
      "Your company is integrating Azure OpenAI in Foundry Models into its internal knowledge base system to provide intelligent query responses. You need to ensure that the most relevant documents are prioritized during data retrieval. What should you do?",
    options: [
      { id: 0, text: "Set strictness to a higher value." },
      { id: 1, text: "Enable hybrid search mode." },
      { id: 2, text: "Increase the number of retrieved documents." },
      { id: 3, text: "Reduce chunk size." },
    ],
    answer: 0,
    explanation:
      [cite_start]"Setting strictness to a higher value ensures that only the most relevant documents are retrieved, effectively prioritizing relevance during data retrieval. [cite: 256]",
    type: "single",
  },
  {
    id: 18,
    question:
      "Your organization plans to deploy a generative AI solution using Azure OpenAI in Foundry Models with GPT-4 for natural language responses. You need to ensure GPT-4 is available for inferencing via an endpoint. Which three actions should you perform to achieve this goal? Each correct answer presents part of the solution.",
    options: [
      { id: 0, text: "Deploy a GPT-4 model" },
      { id: 1, text: "Provision a Azure AI Foundry resource." },
      { id: 2, text: "Select GPT-4 from the catalog." },
      { id: 3, text: "Set up a virtual machine." },
      { id: 4, text: "Create a new Azure subscription." },
      { id: 5, text: "Use DALL-E." },
    ],
    answers: [0, 1, 2],
    explanation:
      [cite_start]"To deploy GPT-4 for inferencing, provisioning Azure AI Foundry resource is essential to establish the infrastructure. [cite: 279] [cite_start]Selecting GPT-4 from the catalog ensures the correct model is chosen for the intended use case. [cite: 280] [cite_start]Deploying GPT-4 to an endpoint makes it accessible for inferencing, completing the deployment process. [cite: 281]",
    type: "multiple",
  },
  {
    id: 19,
    question:
      "Your company uses an Azure OpenAI Foundry Models service to generate code snippets for software development. You need to ensure the generated code adheres to your organization's coding standards. What action should you take to achieve this?",
    options: [
      { id: 0, text: "Provide standard-compliant examples in prompts." },
      { id: 1, text: "Enable multi-region deployment." },
      { id: 2, text: "Increase compute resources." },
      { id: 3, text: "Use models optimized for chat-based interactions." },
    ],
    answer: 0,
    explanation:
      [cite_start]"Providing examples of code adhering to standards in the input prompts ensures the AI model generates code that aligns with those standards, addressing the issue effectively. [cite: 294]",
    type: "single",
  },
  {
    id: 20,
    question:
      "Your organization is using an Azure OpenAI in Foundry Models service for document summarization across various document types. You need to ensure the AI generates summaries that meet organizational requirements. What action should you take to achieve this?",
    options: [
      { id: 0, text: "Refine prompts to specify key details." },
      { id: 1, text: "Enable diagnostic logging." },
      { id: 2, text: "Increase the token limit." },
      { id: 3, text: "Switch to a higher-cost model." },
    ],
    answer: 0,
    explanation:
      [cite_start]"Refining prompts to specify key details ensures the AI model generates concise and relevant summaries, directly addressing the optimization requirement. [cite: 307]",
    type: "single",
  },
  {
    id: 21,
    question:
      "Your team is deploying an AI agent to perform actions based on user requests, such as scheduling meetings and sending notifications. You need to integrate the AI agent with tools that enable it to perform these actions programmatically. What should you do?",
    options: [
      { id: 0, text: "Use a pre-trained chatbot framework." },
      { id: 1, text: "Add custom functions." },
      { id: 2, text: "Configure static templates." },
      { id: 3, text: "Use default model capabilities." },
    ],
    answer: 1,
    explanation:
      [cite_start]"Adding custom functions enables the AI agent to dynamically execute specific actions such as scheduling meetings and sending notifications, making it the most suitable choice for the scenario. [cite: 320]",
    type: "single",
  },
  {
    id: 22,
    question:
      "Your company plans to deploy an AI agent to analyze customer feedback and generate insights from text. You need to select the most suitable Azure AI Foundry Service for text analysis. What should you recommend?",
    options: [
      { id: 0, text: "Azure AI Language." },
      { id: 1, text: "Azure AI Speech." },
      { id: 2, text: "Azure AI Translator." },
      { id: 3, text: "Azure AI Vision." },
    ],
    answer: 0,
    explanation:
      [cite_start]"Azure AI Language is the most appropriate service for this scenario as it specializes in analyzing and deriving insights from natural language text, directly addressing the requirements for text analysis. [cite: 333]",
    type: "single",
  },
  {
    id: 23,
    question:
      "Your organization is developing an AI agent for customer support inquiries that must integrate with Azure resources. You need to select a framework that supports AI orchestration and multi-agent workflows. What should you recommend?",
    options: [
      { id: 0, text: "Semantic Kernel framework" },
      { id: 1, text: "Azure Bot Framework" },
      { id: 2, text: "Azure Machine Learning Studio" },
      { id: 3, text: "Cognitive Services API" },
    ],
    answer: 0,
    explanation:
      [cite_start]"Semantic Kernel framework is the most suitable choice as it supports generative AI orchestration and multi-agent workflows, aligning perfectly with the requirements of the scenario. [cite: 350]",
    type: "single",
  },
  {
    id: 24,
    question:
      "You are developing a custom AI agent using Azure AI Foundry Agent Service. The agent needs to interact with an Azure AI Foundry resource that has the GPT-35-Turbo model deployed. You need to configure the agent to effectively use the GPT-35-Turbo model for generating responses. What should you do?",
    options: [
      { id: 0, text: "Specify the GPT-35-Turbo deployment name." },
      { id: 1, text: "Use the Completion endpoint." },
      { id: 2, text: "Deploy a GPT-4 model." },
      { id: 3, text: "Use the Embeddings endpoint." },
    ],
    answer: 0,
    explanation:
      [cite_start]"To configure the agent to effectively use the GPT-35-Turbo model, specifying the deployment name ensures the agent interacts with the correct model deployed in a Microsoft Azure OpenAI resource. [cite: 361]",
    type: "single",
  },
  {
    id: 25,
    question:
      "Your organization is using Azure AI Foundry Agent Service to automate customer support workflows. You need to configure an agent to interact with external APIs and use real-time data for responses. Each correct answer presents part of the solution. Which three actions should you perform?",
    options: [
      { id: 0, text: "Define tools for API access." },
      { id: 1, text: "Deploy the agent using Azure SDK." },
      { id: 2, text: "Use Blob Storage for conversation state." },
      { id: 3, text: "Configure the Bing Search tool." },
      { id: 4, text: "Set up an Azure AI Search resource." },
    ],
    answers: [0, 1, 3],
    explanation:
      [cite_start]"Defining tools for API access ensures the agent can interact with external APIs effectively. [cite: 384] [cite_start]Deploying the agent using Azure SDK makes it operational within the Azure environment, enabling API interactions. [cite: 385] [cite_start]Configuring the Bing Search tool enables the agent to access real-time data. [cite: 386]",
    type: "multiple",
  },
  {
    id: 26,
    question:
      "You are building an app named App1 that uses the Image Analysis API. You are evaluating analyzing images by using the following request. https://*.cognitiveservices.azure.com/computervision/imageanalysis:analyze?features=read,description. Which results will the request return?",
    options: [
      {
        id: 0,
        text: "the visible text in the image and a description of the image content",
      },
      {
        id: 1,
        text: "the objects that are in the image and their approximate location",
      },
      { id: 2, text: "a description of the image content only" },
    ],
    answer: 0,
    explanation:
      [cite_start]"The features used in the call are 'read' and 'description', which will return the visible text in the image, as well as a description of the image content. [cite: 400]",
    type: "single",
  },
  {
    id: 27,
    question:
      "You build an app named App1 that uses the Azure AI Face service. You need to optimize the app for images that contain blurry faces. What should you do?",
    options: [
      { id: 0, text: "Change the recognition model to recognition_02." },
      { id: 1, text: "Set the detection model to detection_03." },
    ],
    answer: 1,
    explanation:
      [cite_start]"Model_3 Improves accuracy on small, side-view, and blurry faces. [cite: 413] [cite_start]Changing the recognition model to recognition_02 will improve facial recognition and faceIdTimeToLive is used for the number of seconds that the face ID is cached, which has no impact on blurry faces. [cite: 414]",
    type: "single",
  },
  {
    id: 28,
    question:
      "Your organization has trained a custom vision model using Microsoft Azure Custom Vision to classify product images. The model has satisfactory performance metrics. You need to make the model available for predictions in a production environment. What should you do next?",
    options: [
      { id: 0, text: "Re-train the model with additional data." },
      {
        id: 1,
        text: "Publish the model and retrieve its Prediction URL and key.",
      },
      { id: 2, text: "Export the model for local use." },
      { id: 3, text: "Create a new Azure resource." },
    ],
    answer: 1,
    explanation:
      [cite_start]"Publishing the trained iteration and retrieving its Prediction URL and key is the appropriate action to make the model accessible for programmatic predictions in a production environment. [cite: 426]",
    type: "single",
  },
  {
    id: 29,
    question:
      "You are developing a custom vision model using Microsoft Custom Vision to classify images of various plant species. A subset of the dataset has already been labeled, and an initial iteration of the model has been trained. You need to efficiently improve the model's accuracy by optimizing the labeling process for the remaining untagged images. Each correct answer presents part of the solution. Which three actions should you perform?",
    options: [
      { id: 0, text: "Prioritize reviewing tags with high prediction uncertainty." },
      { id: 1, text: "Review and confirm suggested tags for each image." },
      { id: 2, text: "Use Smart Labeler to suggest tags for untagged images." },
      { id: 3, text: "Delete previously tagged images." },
      { id: 4, text: "Train the model without reviewing tags." },
    ],
    answers: [0, 1, 2],
    explanation:
      [cite_start]"To optimize the labeling process and improve the model's accuracy, it is essential to review and confirm suggested tags to ensure data reliability. [cite: 451] [cite_start]Prioritizing tags with high prediction uncertainty helps address ambiguous cases effectively, while using the Smart Labeler streamlines the process by leveraging the model's existing capabilities. [cite: 452]",
    type: "multiple",
  },
  {
    id: 30,
    question:
      "You are building an app that will use Azure AI Vision to analyze and classify images to build an image library of animals. You need to configure the classification type for the Azure AI Vision project. The solution must ensure that the images selected only include a single animal. Which type of classification should you use?",
    options: [
      { id: 0, text: "multiclass" },
      { id: 1, text: "multilabel" },
    ],
    answer: 0,
    explanation:
      [cite_start]"Multilabel classification applies any number of tags to an image (zero or more), while multiclass classification sorts images into single categories (every image you submit will be sorted into the most likely tag). [cite: 465]",
    type: "single",
  },
  {
    id: 31,
    question:
      "You are developing a custom vision model using Microsoft Azure Custom Vision to classify images of various food items. The dataset includes images labeled as 'vegetable-fruit', 'dessert', and 'soup'. You need to optimize the training process to improve the model's performance metrics. Each correct answer presents part of the solution. Which two actions should you perform?",
    options: [
      { id: 0, text: "Select the 'Food' domain." },
      { id: 1, text: "Use consistent tags to label images." },
      { id: 2, text: "Set a high probability threshold during training." },
      { id: 3, text: "Select the 'General' domain." },
    ],
    answers: [0, 1],
    explanation:
      [cite_start]"Using consistent tags to label images ensures that the model can accurately associate visual features with their respective categories, which is essential for effective training. [cite: 484] [cite_start]Selecting the 'Food' domain optimizes the model for food-related image classification tasks, leveraging domain-specific features to enhance performance. [cite: 485]",
    type: "multiple",
  },
  {
    id: 32,
    question:
      "You are building an app that uses Azure AI Video Indexer. You need to extract keyframes from uploaded video and store them on a disk by using the API. How should you implement the solution?",
    options: [
      { id: 0, text: "Upload the video and download the ZIP file of the thumbnails." },
      {
        id: 1,
        text: "Upload the video, get the video index, and get the thumbnail for each keyframe.",
      },
    ],
    answer: 1,
    explanation:
      [cite_start]"You need to upload the video, get the video index, and get the thumbnail for each keyframe. [cite: 498] [cite_start]Three API calls need to be done. [cite: 499] [cite_start]Uploading the video and then downloading the ZIP file of the thumbnails is the path through the Azure portal. [cite: 500]",
    type: "single",
  },
  {
    id: 33,
    question:
      "You are building a video processing app that will use Azure AI Video Indexer. You need to configure the training and learning phases for the app. The solution must train the model based on the probability of specific word combinations by using a custom Language model. Which three practices should be followed for the training data? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "Include multiple examples of spoken sentences." },
      { id: 1, text: "Provide multiple adaptation options." },
      { id: 2, text: "Repeat the identical sentence multiple times." },
      { id: 3, text: "Put only one sentence per line." },
      { id: 4, text: "Include uncommon symbols." },
    ],
    answers: [0, 1, 3],
    explanation:
      [cite_start]"When training the model, you should avoid repeating an identical sentence multiple times, as it may create bias against the rest of the input. [cite: 522] [cite_start]You should avoid including uncommon symbols (~, # @ % &), as they will be discarded. [cite: 523]",
    type: "multiple",
  },
  {
    id: 34,
    question:
      "You are building an app that will flag documents that contain the names of staff members by using the Azure AI Language Personally Identifiable Information (PII) detection feature. You need to configure the PII detection feature. Which category should you use?",
    options: [
      { id: 0, text: "Person" },
      { id: 1, text: "PhoneNumber" },
      { id: 2, text: "Age" },
      { id: 3, text: "DateTime" },
    ],
    answer: 0,
    explanation:
      [cite_start]"The Person category detects names of people in the PII detection feature. [cite: 536]",
    type: "single",
  },
  {
    id: 35,
    question:
      "You have an app that sends audio recordings from a call center to the speech-to-text feature of Azure AI Foundry Service. During testing, you notice that the Word Error Rate (WER) is high and there are a lot of substitution errors. You need to improve the model and reduce the WER. What should you add to the training data?",
    options: [
      { id: 0, text: "overlapping speakers" },
      { id: 1, text: "custom product and people names" },
      { id: 2, text: "people talking in the background" },
    ],
    answer: 1,
    explanation:
      [cite_start]"Substitution errors are due to the model needing more training on custom product names and people names. [cite: 550] Overlapping speakers define when there are more deletion errors. [cite_start]People talking in the background are detected when there are more insertion errors. [cite: 551]",
    type: "single",
  },
  {
    id: 36,
    question:
      "You are building an app that will enable users to create notes by using speech. You need to recommend the Azure AI Speech service model to use. The solution must support noisy environments. Which model should you recommend?",
    options: [
      { id: 0, text: "base with customizations" },
      { id: 1, text: "custom speech-to-text" },
    ],
    answer: 1,
    explanation:
      [cite_start]"The custom speech-to-text model is correct, as you need to adapt the model because a factory floor might have ambient noise, which the model should be trained on. [cite: 562]",
    type: "single",
  },
  {
    id: 37,
    question:
      "You are building a custom translation model. You need to use bilingual training documents to teach the model your terminology and style. Which rule should you follow?",
    options: [
      { id: 0, text: "Be liberal." },
      { id: 1, text: "Be strict." },
      { id: 2, text: "Be restrictive." },
    ],
    answer: 0,
    explanation:
      "Be liberal is correct. [cite_start]Any in-domain human translation is better than machine translation. [cite: 573] [cite_start]Add and remove documents as you go and try to improve the Bilingual Evaluation Understudy (BLEU) score. [cite: 574]",
    type: "single",
  },
  {
    id: 38,
    question:
      "You are creating an orchestration workflow for Language Understanding. You need to configure workflows for multiple languages. The solution must minimize administrative effort. What should you create for each language?",
    options: [
      { id: 0, text: "separate training jobs" },
      { id: 1, text: "separate workflow projects" },
    ],
    answer: 1,
    explanation:
      [cite_start]"Orchestration workflow projects do not support the multilingual option, so you need to create a separate workflow project for each language. [cite: 588]",
    type: "single",
  },
  {
    id: 39,
    question:
      "You are building a model that uses Conversational Language Understanding (CLU). You need to measure how accurate the model is by using the ratio between the correctly identified positives (true positives) and all identified positives. Which metric should you use?",
    options: [
      { id: 0, text: "recall" },
      { id: 1, text: "precision" },
      { id: 2, text: "F1 score" },
      { id: 3, text: "BLEU" },
    ],
    answer: 1,
    explanation:
      "Precision measures how precise/accurate a model is. [cite_start]It is the ratio between the correctly identified positives (true positives) and all identified positives. [cite: 599] [cite_start]The precision metric reveals how many of the predicted classes are correctly labeled. [cite: 600]",
    type: "single",
  },
  {
    id: 40,
    question:
      "You are building a multilingual conversational app by using Conversational Language Understanding (CLU), part of Azure AI Language service. You create a CLU model that will serve multiple languages. You need to optimize the performance of the model. The solution must minimize development effort. What should you do?",
    options: [
      {
        id: 0,
        text: "Train the model by using utterances in multiple languages and only query the model by using the project language.",
      },
      {
        id: 1,
        text: "Add utterances for languages that are performing poorly in the model.",
      },
    ],
    answer: 1,
    explanation:
      [cite_start]"With CLU, there is no need to use multiple projects for a model. [cite: 614] [cite_start]For example, you can train a model in English and query it in German. [cite: 615] [cite_start]There is no project language, therefore, adding utterances for languages in the model that are performing poorly is the appropriate solution to increase performance. [cite: 616]",
    type: "single",
  },
  {
    id: 41,
    question:
      "You plan to build a chatbot that will help users answer FAQs. You need to identify which scenarios are suitable for use with the Azure AI Language question answering service. Which three scenarios should you identify? Each correct answer presents a complete solution.",
    options: [
      {
        id: 0,
        text: "when you have a bot conversation that includes static information",
      },
      {
        id: 1,
        text: "when you have static information in a knowledge base of answers",
      },
      {
        id: 2,
        text: "when you need to provide unique answers to each request, question, or command",
      },
      {
        id: 3,
        text: "when you need to provide the same answer to a request, question, or command",
      },
    ],
    answers: [0, 1, 3],
    explanation:
      [cite_start]"Question answering only works with static information, not with dynamic information. [cite: 637] [cite_start]In addition, it will always provide the same answer to the same question. [cite: 638]",
    type: "multiple",
  },
  {
    id: 42,
    question:
      "You are building a solution that uses Azure AI Search. You need to execute the initial run of the indexer. Which stages will be included during the initial run?",
    options: [
      {
        id: 0,
        text: "connecting to an Azure data source, creating an index schema, and running the wizard to create objects and load data",
      },
      {
        id: 1,
        text: "document cracking, field mapping, skillset execution, and output field mapping",
      },
      {
        id: 2,
        text: "creating a data source, creating an index, and creating and running the indexer",
      },
    ],
    answer: 1,
    explanation:
      [cite_start]"Document cracking, field mapping, skillset execution, and output field mapping are the stages of indexing. [cite: 649]",
    type: "single",
  },
  {
    id: 43,
    question:
      "You are building an app will use Azure AI Search. You need to index a collection of documents. What is the first stage of the indexing process?",
    options: [
      { id: 0, text: "document cracking" },
      { id: 1, text: "text-based content extraction" },
      { id: 2, text: "image extraction" },
    ],
    answer: 0,
    explanation:
      "Document cracking is the process of opening files and extracting content. [cite_start]It is the first stage of the indexing process. [cite: 662]",
    type: "single",
  },
  {
    id: 44,
    question:
      "You are building a knowledge mining solution that will use AI enrichment and Azure AI Search. You need to create a data structure that will be used to store the enriched and indexed output for downstream apps. What should you create?",
    options: [{ id: 0, text: "a knowledge store" }],
    answer: 0,
    explanation:
      [cite_start]"A knowledge store is used for downstream apps, such as knowledge mining and data science. [cite: 675] A knowledge store is defined within a skillset. [cite_start]Its definition determines whether your enriched documents are projected as tables or objects (files or blobs) in Azure Storage. [cite: 676]",
    type: "single",
  },
  {
    id: 45,
    question:
      "You are building a knowledge mining solution that uses Azure AI Search. You need to extract content from a file within the enrichment pipeline by using AI enrichment. Which built-in skill should you use?",
    options: [
      { id: 0, text: "Microsoft.Skills.Text.KeyPhraseExtractionSkill" },
      { id: 1, text: "Microsoft.Skills.Util.DocumentExtractionSkill" },
    ],
    answer: 1,
    explanation:
      [cite_start]"Microsoft.Skills.Util.DocumentExtractionSkill is the built-in skill used to extract content from a file within the enrichment pipeline. [cite: 687]",
    type: "single",
  },
  {
    id: 46,
    question:
      "Your company processes various forms, including health insurance cards and identity documents, and requires accurate extraction of specific fields. You need to recommend a solution for extracting structured data from these forms. What should you do?",
    options: [
      {
        id: 0,
        text: "Use prebuilt models for Health Insurance Card and ID Document.",
      },
      { id: 1, text: "Train a composed model." },
      { id: 2, text: "Use Azure OCR." },
      { id: 3, text: "Use the Layout model." },
    ],
    answer: 0,
    explanation:
      [cite_start]"Prebuilt models for Health Insurance Card and ID Document in Microsoft Azure AI Document Intelligence are the optimal choice for extracting structured data from these forms because they are specifically designed for this purpose, ensuring accuracy and efficiency. [cite: 698]",
    type: "single",
  },
  {
    id: 47,
    question:
      "Your company collects cards during networking events and needs to automate processing to store contact information in a database. You need to extract contact details such as names, email addresses, and phone numbers from the business cards. What should you use to achieve this goal?",
    options: [
      {
        id: 0,
        text: "Train a custom model in Azure AI Document Intelligence Studio.",
      },
      { id: 1, text: "Use the Business Card model in Azure AI Document Intelligence." },
      { id: 2, text: "Use Azure AI Vision OCR." },
      { id: 3, text: "Use the ID Document model." },
    ],
    answer: 1,
    explanation:
      [cite_start]"The Business Card model in Azure AI Document Intelligence is the optimal choice for processing business cards due to its specialized capabilities for extracting structured data such as names, email addresses, and phone numbers. [cite: 711]",
    type: "single",
  },
  {
    id: 48,
    question:
      "Your organization processes a large volume of scanned vendor documents, some of which are poorly scanned or contain creases. You need to extract structured data such as vendor details, totals, and line items from these invoices. What should you use to achieve this goal?",
    options: [
      { id: 0, text: "Use the Invoice model in Azure AI Document Intelligence." },
      { id: 1, text: "Train a custom model." },
      { id: 2, text: "Use Azure AI Vision OCR." },
      { id: 3, text: "Use the Business Card model." },
    ],
    answer: 0,
    explanation:
      [cite_start]"The Invoice model in Azure AI Document Intelligence is the optimal choice for processing invoices due to its specialized capabilities for extracting structured data, even from poorly scanned documents. [cite: 725]",
    type: "single",
  },
  {
    id: 49,
    question:
      "Your company receives customer feedback in audio format, including conversations between agents and customers. You need to perform transcription, sentiment analysis, and generate summaries from these recordings. What service should you recommend?",
    options: [
      { id: 0, text: "Azure AI Content Understanding" },
      { id: 1, text: "Azure AI Document Intelligence" },
      { id: 2, text: "Azure AI Language" },
      { id: 3, text: "Azure AI Speech" },
    ],
    answer: 0,
    explanation:
      [cite_start]"Azure AI Content Understanding is the most suitable solution as it offers transcription, sentiment classification, and summary generation capabilities for audio recordings, addressing all requirements of the scenario. [cite: 738]",
    type: "single",
  },
  {
    id: 50,
    question:
      "Your company needs to analyze images of retail shelves to identify product placement and stock levels. You need to implement a Microsoft Azure AI solution to analyze these images. What should you use?",
    options: [
      { id: 0, text: "Use an Azure AI Vision prebuilt model." },
      { id: 1, text: "Use Azure AI Content Understanding." },
      { id: 2, text: "Train a Custom Vision model." },
      { id: 3, text: "Use an Azure AI Foundry GPT model." },
    ],
    answer: 1,
    explanation:
      [cite_start]"Azure AI Content Understanding is the most appropriate solution as it is specifically designed to analyze images and extract structured data, such as product counts, directly addressing the requirements. [cite: 751]",
    type: "single",
  },
];
