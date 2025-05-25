// questions/AI-900.js
export const questions = [
  {
    id: 1,
    question:
      "Which type of service provides a platform for conversational artificial intelligence (AI)?",
    options: [
      { id: 0, text: "Azure AI Bot Service" },
      { id: 1, text: "Azure AI Translator" },
      { id: 2, text: "Azure AI Vision" },
      { id: 3, text: "Azure AI Document Intelligence" },
    ],
    answer: 0,
    explanation:
      "Azure AI Bot Service provide a platform for conversational artificial intelligence (AI)…",
    type: "single",
  },
  {
    id: 2,
    question:
      "Which AI service can be integrated into chat applications and generate content in the form of text?",
    options: [
      { id: 0, text: "Azure OpenAI" },
      { id: 1, text: "Azure AI Vision" },
      { id: 2, text: "Azure AI Language" },
      { id: 3, text: "Azure AI Speech" },
    ],
    answer: 0,
    explanation:
      "Azure OpenAI is the only service capable of generating text that can be used in chat applications to create conversational experiences.",
    type: "single",
  },
  {
    id: 3,
    question:
      "Which type of artificial intelligence (AI) workload has the primary purpose of making large amounts of data searchable?",
    options: [
      { id: 0, text: "Knowledge mining" },
      { id: 1, text: "Computer vision" },
      { id: 2, text: "Natural language processing" },
      { id: 3, text: "Anomaly detection" },
    ],
    answer: 0,
    explanation:
      "Knowledge mining is an artificial intelligence (AI) workload that has the purpose of making large amounts of data searchable.",
    type: "single",
  },
  {
    id: 4,
    question:
      "Which two artificial intelligence (AI) workload scenarios are examples of natural language processing (NLP)? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "Performing sentiment analysis on social media data" },
      {
        id: 1,
        text: "Translating text between different languages from product reviews",
      },
      { id: 2, text: "Detecting faces in an image" },
      { id: 3, text: "Predicting equipment failure" },
    ],
    answers: [0, 1],
    explanation:
      "Translating text between different languages from product reviews is an NLP workload that uses the Azure AI Translator service. Performing sentiment analysis on social media data is an NLP that uses the sentiment analysis feature of the Azure AI Service for Language.",
    type: "multiple",
  },
  {
    id: 5,
    question:
      "You are exploring solutions to improve the document search and indexing service for employees. You need an artificial intelligence (AI) search solution that will include searching text in various types of documents, such as images. Which type of AI workload is this?",
    options: [
      { id: 0, text: "Data mining" },
      { id: 1, text: "Computer vision" },
      { id: 2, text: "Conversational AI" },
      { id: 3, text: "Semantic segmentation" },
    ],
    answer: 0,
    explanation:
      "Data mining workloads primarily focus on the searching and indexing of data. Computer vision can be used to extract information from images, but it is not a search and indexing solution on its own for this broad purpose.",
    type: "single",
  },
  {
    id: 6,
    question:
      "Which two artificial intelligence (AI) workload features are part of the Azure AI Vision service? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "Optical character recognition (OCR)" },
      { id: 1, text: "Spatial analysis" },
      { id: 2, text: "Sentiment analysis" },
      { id: 3, text: "Entity recognition" },
      { id: 4, text: "Key phrase extraction" },
    ],
    answers: [0, 1],
    explanation:
      "OCR and Spatial Analysis are part of the Azure AI Vision service. Sentiment analysis, entity recognition, and key phrase extraction are not part of the computer vision service.",
    type: "multiple",
  },
  {
    id: 7,
    question:
      "Which principle of responsible artificial intelligence (AI) raises awareness about the limitations of AI-based solutions?",
    options: [
      { id: 0, text: "Transparency" },
      { id: 1, text: "Accountability" },
      { id: 2, text: "Privacy and security" },
      { id: 3, text: "Reliability and safety" },
    ],
    answer: 0,
    explanation:
      "Transparency provides clarity regarding the purpose of AI solutions, the way they work, as well as their limitations.",
    type: "single",
  },
  {
    id: 8,
    question:
      "Which principle of responsible artificial intelligence (AI) has the objective of ensuring that AI solutions benefit all parts of society regardless of gender or ethnicity?",
    options: [
      { id: 0, text: "Inclusiveness" },
      { id: 1, text: "Privacy and security" },
      { id: 2, text: "Reliability and safety" },
      { id: 3, text: "Accountability" },
    ],
    answer: 0,
    explanation:
      "The inclusiveness principle is meant to ensure that AI solutions empower and engage everyone, regardless of criteria such as physical ability, gender, sexual orientation, or ethnicity.",
    type: "single",
  },
  {
    id: 9,
    question:
      "Which principle of responsible artificial intelligence (AI) defines the framework of governance and organization principles that meet ethical and legal standards of AI solutions?",
    options: [
      { id: 0, text: "Accountability" },
      { id: 1, text: "Fairness" },
      { id: 2, text: "Transparency" },
      { id: 3, text: "Inclusiveness" },
    ],
    answer: 0,
    explanation:
      "Accountability defines the framework of governance and organizational principles, which are meant to ensure that AI solutions meet ethical and legal standards that are clearly defined.",
    type: "single",
  },
  {
    id: 10,
    question:
      "Which two principles of responsible artificial intelligence (AI) are most important when designing an AI system to manage healthcare data? Each correct answer presents part of the solution.",
    options: [
      { id: 0, text: "Accountability" },
      { id: 1, text: "Privacy and security" },
      { id: 2, text: "Fairness" },
      { id: 3, text: "Inclusiveness" },
    ],
    answers: [0, 1],
    explanation:
      "The accountability principle states that AI systems are designed to meet any ethical and legal standards that are applicable. The system must be designed to ensure that privacy of the healthcare data is of the highest importance.",
    type: "multiple",
  },
  {
    id: 11,
    question:
      "Which type machine learning algorithm predicts a numeric label associated with an item based on that item's features?",
    options: [
      { id: 0, text: "Regression" },
      { id: 1, text: "Clustering" },
      { id: 2, text: "Classification" },
      { id: 3, text: "Unsupervised learning" },
    ],
    answer: 0,
    explanation:
      "The regression algorithms are used to predict numeric values. Clustering algorithms groups data points. Classification algorithms predict categories. Unsupervised learning is a category of algorithms.",
    type: "single",
  },
  {
    id: 12,
    question:
      "Predicting rainfall for a specific geographical location is an example of which type of machine learning?",
    options: [
      { id: 0, text: "Regression" },
      { id: 1, text: "Clustering" },
      { id: 2, text: "Featurization" },
      { id: 3, text: "Classification" },
    ],
    answer: 0,
    explanation:
      "Predicting rainfall is an example of regression machine learning, as it will predict a numeric value for future rainfall.",
    type: "single",
  },
  {
    id: 13,
    question:
      "A healthcare organization has a dataset consisting of bone fracture scans that are categorized by using predefined fracture types. The organization wants to use machine learning to detect the different types of bone fractures for new scans. Which type of machine learning is this?",
    options: [
      { id: 0, text: "Classification" },
      { id: 1, text: "Featurization" },
      { id: 2, text: "Regression" },
      { id: 3, text: "Clustering" },
    ],
    answer: 0,
    explanation:
      "Classification is used to predict categories of data. It can predict which category or class an item of data belongs to, such as the type of bone fracture.",
    type: "single",
  },
  {
    id: 14,
    question:
      "You plan to use machine learning to predict the probability of humans developing diabetes based on their age and body fat percentage. What should the model include?",
    options: [
      { id: 0, text: "Two features and one label" },
      { id: 1, text: "Two labels and one feature" },
      { id: 2, text: "One feature and two labels" },
      { id: 3, text: "Multiple labels and multiple features" },
    ],
    answer: 0,
    explanation:
      "The scenario represents a model that is meant to establish a relationship between two features (age and body fat percentage) and one label (the likelihood of developing diabetes).",
    type: "single",
  },
  {
    id: 15,
    question:
      "In a regression machine learning algorithm, how are features and labels handled in a validation dataset?",
    options: [
      {
        id: 0,
        text: "Features are used to generate predictions for the label, which is compared to the actual label values.",
      },
      {
        id: 1,
        text: "Labels are used to generate predictions for the features.",
      },
      {
        id: 2,
        text: "Features from validation are compared to features from training.",
      },
      {
        id: 3,
        text: "Labels from validation are compared to labels from training.",
      },
    ],
    answer: 0,
    explanation:
      "In a regression machine learning algorithm, features from the validation set are used to generate predictions for the label, which is then compared to the actual label values in the validation set to evaluate model performance.",
    type: "single",
  },
  {
    id: 16,
    question:
      "Which assumption of the multiple linear regression model should be satisfied to avoid misleading predictions?",
    options: [
      { id: 0, text: "Features are independent of each other" },
      { id: 1, text: "Labels are independent of each other" },
      { id: 2, text: "Features are dependent on labels" },
      { id: 3, text: "Labels are dependent on features" },
    ],
    answer: 0,
    explanation:
      "Multiple linear regression models the relationship between several features and a single label. The features must be independent of each other (low multicollinearity) for the model's predictions to be reliable.",
    type: "single",
  },
  {
    id: 17,
    question:
      "In a regression machine learning algorithm, what are the characteristics of features and labels in a validation dataset?",
    options: [
      { id: 0, text: "Known feature and label values" },
      { id: 1, text: "Known feature values and unknown label values" },
      { id: 2, text: "Unknown feature values and known label values" },
      { id: 3, text: "Unknown feature and label values" },
    ],
    answer: 0,
    explanation:
      "In a regression machine learning algorithm, a validation set contains known feature and label values. The known labels are used to evaluate the model's predictions made using the known features.",
    type: "single",
  },
  {
    id: 18,
    question:
      "What is the purpose of a validation dataset used for as part of the development of a machine learning model?",
    options: [
      { id: 0, text: "Evaluating the trained model" },
      { id: 1, text: "Cleaning missing data" },
      { id: 2, text: "Feature engineering" },
      { id: 3, text: "Summarizing the data" },
    ],
    answer: 0,
    explanation:
      "The validation dataset is a sample of data held back from a training dataset. It is then used to evaluate the performance of the trained model on unseen data.",
    type: "single",
  },
  {
    id: 19,
    question:
      "What should you do after preparing a dataset and before training the machine learning model?",
    options: [
      { id: 0, text: "Split data into training and validation datasets" },
      { id: 1, text: "Normalize the data" },
      { id: 2, text: "Clean missing data" },
      { id: 3, text: "Summarize the data" },
    ],
    answer: 0,
    explanation:
      "Splitting data into training and validation datasets is a crucial step after data preparation and before model training to allow for unbiased evaluation.",
    type: "single",
  },
  {
    id: 20,
    question:
      "You need to create an automated machine learning (automated ML) model. Which resource should you create first in Azure Machine Learning studio?",
    options: [
      { id: 0, text: "A dataset" },
      { id: 1, text: "An Azure container instance" },
      { id: 2, text: "A workspace" },
      { id: 3, text: "An AKS cluster" },
    ],
    answer: 0,
    explanation:
      "A dataset is required to create an automated machine learning (automated ML) run. While a workspace is needed to access the studio, the dataset is the first specific resource for the automated ML process itself.",
    type: "single",
  },
  {
    id: 21,
    question:
      "You need to use the Azure Machine Learning designer to train a machine learning model. What should you do first in the Machine Learning designer?",
    options: [
      { id: 0, text: "Create a pipeline" },
      { id: 1, text: "Add a dataset" },
      { id: 2, text: "Add training modules" },
      { id: 3, text: "Deploy a service" },
    ],
    answer: 0,
    explanation:
      "Before you can start training a machine learning model, you must first create a pipeline in the Machine Learning designer. This pipeline will then host your dataset and training modules.",
    type: "single",
  },
  {
    id: 22,
    question:
      "Which three supervised machine learning models can you train by using automated machine learning (automated ML) in the Azure Machine Learning studio? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "Classification" },
      { id: 1, text: "Regression" },
      { id: 2, text: "Time-series forecasting" },
      { id: 3, text: "Clustering" },
      { id: 4, text: "Inference pipeline" },
    ],
    answers: [0, 1, 2],
    explanation:
      "Time-series forecasting, regression, and classification are supervised machine learning models that can be trained using automated ML in Azure Machine Learning studio. Clustering is unsupervised.",
    type: "multiple",
  },
  {
    id: 23,
    question:
      "Which artificial intelligence (AI) technique serves as the foundation for modern image classification solutions?",
    options: [
      { id: 0, text: "Deep learning" },
      { id: 1, text: "Semantic segmentation" },
      { id: 2, text: "Linear regression" },
      { id: 3, text: "Multiple linear regression" },
    ],
    answer: 0,
    explanation:
      "Modern image classification solutions are based on deep learning techniques, typically involving convolutional neural networks (CNNs).",
    type: "single",
  },
  {
    id: 24,
    question:
      "Which two specialized domain models are supported by Azure AI Vision when categorizing an image? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "Celebrities" },
      { id: 1, text: "Landmarks" },
      { id: 2, text: "Image types" },
      { id: 3, text: "People_" },
    ],
    answers: [0, 1],
    explanation:
      "When categorizing an image, the Azure AI Vision service supports two specialized domain models: celebrities and landmarks.",
    type: "multiple",
  },
  {
    id: 25,
    question:
      "You have a set of images. Each image shows one type of bone fracture. What allows you to identify bone fractures in different X-ray images?",
    options: [
      { id: 0, text: "Image classification" },
      { id: 1, text: "Object detection" },
      { id: 2, text: "Conversational AI" },
      { id: 3, text: "Facial detection" },
    ],
    answer: 0,
    explanation:
      "Image classification is part of computer vision and can be used to evaluate images from an X-ray machine to quickly classify specific bone fracture types.",
    type: "single",
  },
  {
    id: 26,
    question:
      "Which feature of computer vision involves associating an image with metadata that summarizes the attributes of the image?",
    options: [
      { id: 0, text: "Tagging" },
      { id: 1, text: "Detecting image types" },
      { id: 2, text: "Content organization" },
      { id: 3, text: "Categorizing" },
    ],
    answer: 0,
    explanation:
      "Tagging involves associating an image with metadata (tags) that summarize the attributes or content of the image.",
    type: "single",
  },
  {
    id: 27,
    question:
      "Which three parts of the machine learning process does the Azure AI Vision service eliminate the need for? Each correct answer presents part of the solution.",
    options: [
      { id: 0, text: "Choosing a model" },
      { id: 1, text: "Evaluating a model" },
      { id: 2, text: "Training a model" },
      { id: 3, text: "Azure resource provisioning" },
      { id: 4, text: "Inferencing" },
    ],
    answers: [0, 1, 2],
    explanation:
      "The Azure AI Vision service provides pre-trained models, thus eliminating the need for choosing, training, and evaluating a model for common vision tasks.",
    type: "multiple",
  },
  {
    id: 28,
    question:
      "Which analytical task of the Azure AI Vision service returns bounding box coordinates?",
    options: [
      { id: 0, text: "Object detection" },
      { id: 1, text: "Image categorization" },
      { id: 2, text: "Tagging" },
      { id: 3, text: "OCR" },
    ],
    answer: 0,
    explanation:
      "Detecting objects identifies common objects and, for each, returns bounding box coordinates indicating their location in the image.",
    type: "single",
  },
  {
    id: 29,
    question:
      "Which two specialized domain models are supported by using the Azure AI Vision service? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "Celebrities" },
      { id: 1, text: "Landmarks" },
      { id: 2, text: "Animals" },
      { id: 3, text: "Cars" },
      { id: 4, text: "Plants" },
    ],
    answers: [0, 1],
    explanation:
      "The Azure AI Vision service supports the celebrities and landmarks specialized domain models for image analysis.",
    type: "multiple",
  },
  {
    id: 30,
    question:
      "Which two Azure AI Document Intelligence models include identifying common data fields as part of its data extraction capabilities? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "Business card model" },
      { id: 1, text: "Invoice model" },
      { id: 2, text: "General document model" },
      { id: 3, text: "Read model" },
      { id: 4, text: "Layout model" },
    ],
    answers: [0, 1],
    explanation:
      "The business card model and the invoice model in Azure AI Document Intelligence are pre-trained to extract common data fields specific to those document types.",
    type: "multiple",
  },
  {
    id: 31,
    question:
      "When using the Face Detect API of the Azure AI Face service, which feature helps identify whether a human face has glasses or headwear?",
    options: [
      { id: 0, text: "Face attributes" },
      { id: 1, text: "Face rectangle" },
      { id: 2, text: "Face ID" },
      { id: 3, text: "Face landmarks" },
    ],
    answer: 0,
    explanation:
      "Face attributes are a set of features that can be detected by the Face Detect API, including accessories like glasses or headwear.",
    type: "single",
  },
  {
    id: 32,
    question:
      "When using the Azure AI Face service, what should you use to perform one-to-many or one-to-one face matching? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "Face identification" },
      { id: 1, text: "Face verification" },
      { id: 2, text: "Face attributes" },
      { id: 3, text: "Find similar faces operation" },
    ],
    answers: [0, 1],
    explanation:
      "Face identification performs one-to-many matching. Face verification performs one-to-one matching to confirm if two faces belong to the same person.",
    type: "multiple",
  },
  {
    id: 33,
    question:
      "Which natural language processing (NLP) technique normalizes words before counting them?",
    options: [
      { id: 0, text: "Stemming" },
      { id: 1, text: "Frequency analysis" },
      { id: 2, text: "N-grams" },
      { id: 3, text: "Vectorization" },
    ],
    answer: 0,
    explanation:
      "Stemming is a process of reducing inflected (or sometimes derived) words to their word stem, base or root form, which helps in normalizing words before analysis like frequency counting.",
    type: "single",
  },
  {
    id: 34,
    question:
      "What is the confidence score returned by the Azure AI Language detection service of natural language processing (NLP) for an unknown language name?",
    options: [
      { id: 0, text: "NaN" },
      { id: 1, text: "Unknown" },
      { id: 2, text: "0" },
      { id: 3, text: "1" },
    ],
    answer: 0,
    explanation:
      "NaN (Not a Number) designates an unknown confidence score when the language cannot be determined or is not supported with confidence.",
    type: "single",
  },
  {
    id: 35,
    question:
      "Which Azure AI Service for Language feature can be used to analyze online user reviews to identify whether users view a product positively or negatively?",
    options: [
      { id: 0, text: "Sentiment analysis" },
      { id: 1, text: "Named entity recognition" },
      { id: 2, text: "Key phrase extraction" },
      { id: 3, text: "Language detection" },
    ],
    answer: 0,
    explanation:
      "Sentiment analysis provides sentiment labels (such as negative, neutral, and positive) based on a confidence score from text analysis, suitable for product reviews.",
    type: "single",
  },
  {
    id: 36,
    question:
      "Which two Azure AI Services features can be used to enable both text-to-text and speech-to-text between multiple languages? Each correct answer presents part of the solution.",
    options: [
      { id: 0, text: "The Speech service" },
      { id: 1, text: "The Translator service" },
      { id: 2, text: "Conversational Language Understanding" },
      { id: 3, text: "Key phrase extraction" },
      { id: 4, text: "Language detection" },
    ],
    answers: [0, 1],
    explanation:
      "The Azure AI Speech service can handle speech-to-text (and text-to-speech, including translation). The Azure AI Translator service directly supports text-to-text translation.",
    type: "multiple",
  },
  {
    id: 37,
    question:
      "Which feature of the Azure AI Language service includes functionality that returns links to external websites to disambiguate terms identified in a text?",
    options: [
      { id: 0, text: "Entity recognition" },
      { id: 1, text: "Key phrase extraction" },
      { id: 2, text: "Language detection" },
      { id: 3, text: "Sentiment analysis" },
    ],
    answer: 0,
    explanation:
      "Entity recognition includes entity linking, which can return links to external data sources (like Wikipedia) to disambiguate identified entities.",
    type: "single",
  },
  {
    id: 38,
    question:
      "Which Azure resource provides direct access to both Azure AI Translator and Azure AI Speech services through a single endpoint and authentication key?",
    options: [
      { id: 0, text: "Azure AI Services" },
      { id: 1, text: "Azure AI Language service" },
      { id: 2, text: "Machine Learning service" },
      { id: 3, text: "Azure AI Bot Service" },
    ],
    answer: 0,
    explanation:
      "An Azure AI Services multi-service resource provides access to multiple AI services (including Translator and Speech) through a single key and endpoint.",
    type: "single",
  },
  {
    id: 39,
    question:
      "Which three features are elements of the Azure AI Speech service? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "Speaker recognition" },
      { id: 1, text: "Voice assistants" },
      { id: 2, text: "Language identification" },
      { id: 3, text: "Text translation" },
      { id: 4, text: "Document translation" },
    ],
    answers: [0, 1, 2],
    explanation:
      "Language identification, speaker recognition, and voice assistants are all elements of the Azure AI Speech service. Text and document translation are part of the Translator service.",
    type: "multiple",
  },
  {
    id: 40,
    question:
      "Which feature of the Azure AI Translator service is available only to Custom Translator?",
    options: [
      { id: 0, text: "Model training with a dictionary" },
      { id: 1, text: "Real-time text translation" },
      { id: 2, text: "Document translation" },
      { id: 3, text: "Language detection" },
    ],
    answer: 0,
    explanation:
      "Model training with a dictionary (phrase or sentence) is a feature specific to Custom Translator, allowing customization with smaller datasets when parallel sentences are insufficient.",
    type: "single",
  },
  {
    id: 41,
    question:
      "When using the Face Detect API of the Azure AI Face service, which feature helps identify whether a human face has glasses or headwear?",
    options: [
      { id: 0, text: "Face attributes" },
      { id: 1, text: "Face rectangle" },
      { id: 2, text: "Face ID" },
      { id: 3, text: "Face landmarks" },
    ],
    answer: 0,
    explanation:
      "Face attributes are a set of features that can be detected by the Face Detect API, including accessories like glasses or headwear.",
    type: "single",
  },
  {
    id: 42,
    question:
      "When using the Azure AI Face service, what should you use to perform one-to-many or one-to-one face matching? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "Face identification" },
      { id: 1, text: "Face verification" },
      { id: 2, text: "Face attributes" },
      { id: 3, text: "Find similar faces operation" },
    ],
    answers: [0, 1],
    explanation:
      "Face identification performs one-to-many matching. Face verification performs one-to-one matching to confirm if two faces belong to the same person.",
    type: "multiple",
  },
  {
    id: 43,
    question:
      "Which natural language processing (NLP) technique normalizes words before counting them?",
    options: [
      { id: 0, text: "Stemming" },
      { id: 1, text: "Frequency analysis" },
      { id: 2, text: "N-grams" },
      { id: 3, text: "Vectorization" },
    ],
    answer: 0,
    explanation:
      "Stemming is a process of reducing inflected (or sometimes derived) words to their word stem, base or root form, which helps in normalizing words before analysis like frequency counting.",
    type: "single",
  },
  {
    id: 44,
    question:
      "What is the confidence score returned by the Azure AI Language detection service of natural language processing (NLP) for an unknown language name?",
    options: [
      { id: 0, text: "NaN" },
      { id: 1, text: "Unknown" },
      { id: 2, text: "0" },
      { id: 3, text: "1" },
    ],
    answer: 0,
    explanation:
      "NaN (Not a Number) designates an unknown confidence score when the language cannot be determined or is not supported with confidence.",
    type: "single",
  },
  {
    id: 45,
    question:
      "Which Azure AI Service for Language feature can be used to analyze online user reviews to identify whether users view a product positively or negatively?",
    options: [
      { id: 0, text: "Sentiment analysis" },
      { id: 1, text: "Named entity recognition" },
      { id: 2, text: "Key phrase extraction" },
      { id: 3, text: "Language detection" },
    ],
    answer: 0,
    explanation:
      "Sentiment analysis provides sentiment labels (such as negative, neutral, and positive) based on a confidence score from text analysis, suitable for product reviews.",
    type: "single",
  },
  {
    id: 46,
    question:
      "Select the answer that correctly completes the sentence. [Answer choice] can used to identify constraints and styles for the responses of a generative AI model.",
    options: [
      { id: 0, text: "System messages" },
      { id: 1, text: "User prompts" },
      { id: 2, text: "Temperature settings" },
      { id: 3, text: "Fine-tuning data" },
    ],
    answer: 0,
    explanation:
      "System messages (or system prompts) are used to set the context, define the persona, and identify constraints and styles for the responses of a generative AI model.",
    type: "single",
  },
  {
    id: 47,
    question:
      "Which two capabilities are examples of a GPT model? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "Create natural language" },
      { id: 1, text: "Understand natural language" },
      { id: 2, text: "Classify images" },
      { id: 3, text: "Detect objects in video" },
    ],
    answers: [0, 1],
    explanation:
      "GPT (Generative Pre-trained Transformer) models are excellent at both understanding natural language inputs and creating (generating) natural language responses.",
    type: "multiple",
  },
  {
    id: 48,
    question:
      "Which three capabilities are examples of image generation features for a generative AI model? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "Creating variations of an image" },
      { id: 1, text: "Editing an image" },
      { id: 2, text: "New image creation" },
      { id: 3, text: "Animation of static images" },
      { id: 4, text: "Image classification" },
    ],
    answers: [0, 1, 2],
    explanation:
      "Image generation models can create new images from prompts, edit existing images (e.g., inpainting/outpainting), and create variations of a provided image.",
    type: "multiple",
  },
  {
    id: 49,
    question:
      "You plan to develop an image processing solution that will use DALL-E as a generative AI model. Which capability is NOT supported by the DALL-E model?",
    options: [
      { id: 0, text: "Image description" },
      { id: 1, text: "Creating variations of an image" },
      { id: 2, text: "Editing an image" },
      { id: 3, text: "New image creation from text" },
    ],
    answer: 0,
    explanation:
      "DALL-E is primarily for generating and editing images. While some multimodal models can describe images, DALL-E's core strength is not image description (generating text from an image).",
    type: "single",
  },
  {
    id: 50,
    question:
      "Select the answer that correctly completes the sentence. [Answer choice] can search, classify, and compare sources of text for similarity.",
    options: [
      { id: 0, text: "Embeddings" },
      { id: 1, text: "Data grounding" },
      { id: 2, text: "Prompt engineering" },
      { id: 3, text: "Tokenization" },
    ],
    answer: 0,
    explanation:
      "Embeddings convert text into numerical vectors that capture semantic meaning. These vectors can then be used to search, classify, and compare sources of text for similarity.",
    type: "single",
  },
  {
    id: 51,
    question:
      "Which natural language processing (NLP) workload is used to generate closed caption text for live presentations?",
    options: [
      { id: 0, text: "Azure AI Speech" },
      { id: 1, text: "Azure AI Translator" },
      { id: 2, text: "Azure AI Language" },
      { id: 3, text: "Azure AI Vision" },
    ],
    answer: 0,
    explanation:
      "Azure AI Speech provides speech-to-text and text-to-speech capabilities through speech recognition and synthesis, suitable for generating closed captions.",
    type: "single",
  },
  {
    id: 52,
    question:
      "Which type of artificial intelligence (AI) workload provides the ability to generate bounding boxes that identify the locations of different types of vehicles in an image?",
    options: [
      { id: 0, text: "Object detection" },
      { id: 1, text: "Image classification" },
      { id: 2, text: "Semantic segmentation" },
      { id: 3, text: "Facial detection" },
    ],
    answer: 0,
    explanation:
      "Object detection provides the ability to generate bounding boxes identifying the locations of different types of vehicles in an image.",
    type: "single",
  },
  {
    id: 53,
    question:
      "Which type of artificial intelligence (AI) workload provides the ability to classify individual pixels in an image depending on the object that they represent?",
    options: [
      { id: 0, text: "Semantic segmentation" },
      { id: 1, text: "Object detection" },
      { id: 2, text: "Image classification" },
      { id: 3, text: "Instance segmentation" },
    ],
    answer: 0,
    explanation:
      "Semantic segmentation provides the ability to classify individual pixels in an image depending on the object that they represent.",
    type: "single",
  },
  {
    id: 54,
    question:
      "Which principle of responsible artificial intelligence (AI) is applied in the design of an AI system to ensure that users understand constraints and limitations of AI?",
    options: [
      { id: 0, text: "Transparency" },
      { id: 1, text: "Inclusiveness" },
      { id: 2, text: "Fairness" },
      { id: 3, text: "Privacy and security" },
    ],
    answer: 0,
    explanation:
      "The transparency principle states that AI systems must be designed in such a way that users are made fully aware of the purpose of the systems, how they work, and which limitations can be expected during use.",
    type: "single",
  },
  {
    id: 55,
    question:
      "A bank is developing a new artificial intelligence (AI) system to support the process of accepting or rejecting mortgage applications. Which two issues should be considered as part of the responsible AI principle of fairness to avoid biased decision making? Each correct answer presents part of the solution.",
    options: [
      { id: 0, text: "Ethnicity" },
      { id: 1, text: "Gender" },
      { id: 2, text: "Salary" },
      { id: 3, text: "Payment history" },
      { id: 4, text: "Credit utilization" },
    ],
    answers: [0, 1],
    explanation:
      "The AI system must be designed to ensure that biased decision making is avoided and not based on factors such as ethnicity and gender. Salary, payment history, and credit utilization are standard metrics.",
    type: "multiple",
  },
  {
    id: 56,
    question:
      "Which principle of responsible artificial intelligence (AI) ensures that an AI system meets any legal and ethical standards it must abide by?",
    options: [
      { id: 0, text: "Accountability" },
      { id: 1, text: "Privacy and security" },
      { id: 2, text: "Inclusiveness" },
      { id: 3, text: "Fairness" },
    ],
    answer: 0,
    explanation:
      "The accountability principle ensures that AI systems are designed to meet any ethical and legal standards that are applicable.",
    type: "single",
  },
  {
    id: 57,
    question:
      "A company is currently developing driverless agriculture vehicles to help harvest crops. The vehicles will be deployed alongside people working in the crop fields, and as such, the company will need to carry out robust testing. Which principle of responsible artificial intelligence (AI) is most important in this case?",
    options: [
      { id: 0, text: "Reliability and safety" },
      { id: 1, text: "Transparency" },
      { id: 2, text: "Accountability" },
      { id: 3, text: "Fairness" },
    ],
    answer: 0,
    explanation:
      "The reliability and safety principles are of paramount importance here as it requires an AI system to work alongside people in a physical environment by using AI-controlled machinery.",
    type: "single",
  },
  {
    id: 58,
    question:
      "You need to identify numerical values that represent the probability of humans developing diabetes based on age and body fat percentage. Which type of machine learning model should you use?",
    options: [
      { id: 0, text: "Logistic regression" },
      { id: 1, text: "Linear regression" },
      { id: 2, text: "Hierarchical clustering" },
      { id: 3, text: "K-Means clustering" },
    ],
    answer: 0,
    explanation:
      "Logistic regression is a type of classification model, which returns either a Boolean value or a categorical decision, often interpreted as a probability.",
    type: "single",
  },
  {
    id: 59,
    question:
      "Which type of machine learning algorithm assigns items to a set of predefined categories?",
    options: [
      { id: 0, text: "Classification" },
      { id: 1, text: "Regression" },
      { id: 2, text: "Clustering" },
      { id: 3, text: "Unsupervised learning" },
    ],
    answer: 0,
    explanation:
      "Classification algorithms are used to predict a predefined category to which an input value belongs.",
    type: "single",
  },
  {
    id: 60,
    question:
      "A company deploys an online marketing campaign to social media platforms for a new product launch. The company wants to use machine learning to measure the sentiment of users on the Twitter platform who made posts in response to the campaign. Which type of machine learning is this?",
    options: [
      { id: 0, text: "Classification" },
      { id: 1, text: "Clustering" },
      { id: 2, text: "Regression" },
      { id: 3, text: "Data transformation" },
    ],
    answer: 0,
    explanation:
      "Classification is used to predict categories of data. In this example, sentiment analysis can be carried out on the Twitter posts with a numeric value applied to the posts to identify and classify positive or negative sentiment.",
    type: "single",
  },
  {
    id: 61,
    question:
      "An electricity utility company wants to develop a mobile app for its customers to monitor their energy use and to display their predicted energy use for the next 12 months. The company wants to use machine learning to provide a reasonably accurate prediction of future energy use by using the customers' previous energy-use data. Which type of machine learning is this?",
    options: [
      { id: 0, text: "Regression" },
      { id: 1, text: "Multiclass classification" },
      { id: 2, text: "Clustering" },
      { id: 3, text: "Classification" },
    ],
    answer: 0,
    explanation:
      "Regression is a machine learning scenario that is used to predict numeric values, such as future energy consumption.",
    type: "single",
  },
  {
    id: 62,
    question:
      "Which feature makes regression an example of supervised machine learning?",
    options: [
      {
        id: 0,
        text: "Use of historical data with known label values to train a model",
      },
      { id: 1, text: "Use of randomly generated data for training" },
      { id: 2, text: "Use of unlabeled data" },
      { id: 3, text: "It groups data points with similar characteristics" },
    ],
    answer: 0,
    explanation:
      "Regression is an example of supervised machine learning due to the use of historical data with known label values to train a model.",
    type: "single",
  },
  {
    id: 63,
    question:
      "You need to use Azure Machine Learning to train a regression model. What should you create in Machine Learning studio?",
    options: [
      { id: 0, text: "A job" },
      { id: 1, text: "A workspace" },
      { id: 2, text: "An Azure container instance" },
      { id: 3, text: "An AKS cluster" },
    ],
    answer: 0,
    explanation:
      "A job must be created in Machine Learning studio to use Machine Learning to train a regression model.",
    type: "single",
  },
  {
    id: 64,
    question:
      "Which machine learning algorithm module in the Azure Machine Learning designer is used to train a model for predicting a continuous numerical value?",
    options: [
      { id: 0, text: "Linear Regression" },
      { id: 1, text: "Clean Missing Data" },
      { id: 2, text: "Select Columns in Dataset" },
      { id: 3, text: "Evaluate Model" },
    ],
    answer: 0,
    explanation:
      "Linear regression is a machine learning algorithm module used for training regression models, which predict continuous numerical values.",
    type: "single",
  },
  {
    id: 65,
    question:
      "What is an unsupervised machine learning algorithm module for training models in the Azure Machine Learning designer?",
    options: [
      { id: 0, text: "K-Means Clustering" },
      { id: 1, text: "Linear Regression" },
      { id: 2, text: "Two-Class Logistic Regression" },
      { id: 3, text: "Normalize Data" },
    ],
    answer: 0,
    explanation:
      "K-means clustering is an unsupervised machine learning algorithm component used for training clustering models. You can use unlabeled data with this algorithm.",
    type: "single",
  },
  {
    id: 66,
    question:
      "Which computer vision solution provides the ability to identify a person's age based on a photograph?",
    options: [
      { id: 0, text: "Facial detection" },
      { id: 1, text: "Image classification" },
      { id: 2, text: "Object detection" },
      { id: 3, text: "Semantic segmentation" },
    ],
    answer: 0,
    explanation:
      "Facial detection provides the ability to detect and analyze human faces in an image, including identifying a person's age based on a photograph.",
    type: "single",
  },
  {
    id: 67,
    question:
      "Which process allows you to use optical character recognition (OCR)?",
    options: [
      { id: 0, text: "Digitizing medical records" },
      { id: 1, text: "Identifying wildlife in an image" },
      { id: 2, text: "Identifying a user requesting access to a laptop" },
      { id: 3, text: "Translating speech to text" },
    ],
    answer: 0,
    explanation:
      "OCR can extract printed or handwritten text from images. In this case, it can be used to extract text from scanned medical records to produce a digital archive from paper-based documents.",
    type: "single",
  },
  {
    id: 68,
    question:
      "You have a set of images. Each image shows multiple vehicles. What allows you to identify different vehicle types in the same traffic monitoring image?",
    options: [
      { id: 0, text: "Object detection" },
      { id: 1, text: "Linear regression" },
      { id: 2, text: "Image classification" },
      { id: 3, text: "OCR" },
    ],
    answer: 0,
    explanation:
      "Object detection can be used to evaluate traffic monitoring images to quickly classify specific vehicle types, such as car, bus, or cyclist.",
    type: "single",
  },
  {
    id: 69,
    question:
      "What can be used for an attendance system that can scan handwritten signatures?",
    options: [
      { id: 0, text: "Optical character recognition (OCR)" },
      { id: 1, text: "Face detection" },
      { id: 2, text: "Object detection" },
      { id: 3, text: "Image classification" },
    ],
    answer: 0,
    explanation:
      "OCR is used to extract text and handwriting from images. In this case, it can be used to extract signatures for attendance purposes.",
    type: "single",
  },
  {
    id: 70,
    question:
      "Which two prebuilt models allow you to use the Azure AI Document Intelligence service to scan information from international passports and sales accounts? Each correct answer presents part of the solution.",
    options: [
      { id: 0, text: "ID document model" },
      { id: 1, text: "Invoice model" },
      { id: 2, text: "Business card model" },
      { id: 3, text: "Receipt model" },
      { id: 4, text: "Language model" },
    ],
    answers: [0, 1],
    explanation:
      "The invoice model extracts key information from sales invoices and is suitable for extracting information from sales account documents. The ID document model is optimized to analyze and extract key information from US driver’s licenses and international passport biographical pages.",
    type: "multiple",
  },
  {
    id: 71,
    question:
      "Which natural language processing (NLP) technique assigns values to words such as plant and flower, so that they are considered closer to each other than a word such as airplane?",
    options: [
      { id: 0, text: "Vectorization" },
      { id: 1, text: "Lemmatization" },
      { id: 2, text: "Frequency analysis" },
      { id: 3, text: "N-grams" },
    ],
    answer: 0,
    explanation:
      "Vectorization captures semantic relationships between words by assigning them to locations in n-dimensional space, making similar words closer.",
    type: "single",
  },
  {
    id: 72,
    question:
      "What is the first step in the statistical analysis of terms in a text in the context of natural language processing (NLP)?",
    options: [
      { id: 0, text: "Removing stop words" },
      { id: 1, text: "Counting occurrences of each word" },
      { id: 2, text: "Creating a vectorized model" },
      { id: 3, text: "Encoding words as numeric features" },
    ],
    answer: 0,
    explanation:
      "Removing stop words (common words like 'the', 'is', 'in') is typically the first step in statistical text analysis to focus on meaningful terms.",
    type: "single",
  },
  {
    id: 73,
    question:
      "For which two scenarios is the Universal Language Model used by the speech-to-text API optimized? Each correct answer presents a complete solution.",
    options: [
      { id: 0, text: "Conversational" },
      { id: 1, text: "Dictation" },
      { id: 2, text: "Acoustic modeling" },
      { id: 3, text: "Pronunciation assessment" },
      { id: 4, text: "Language identification" },
    ],
    answers: [0, 1],
    explanation:
      "The Universal Language Model used by the speech-to-text API is optimized for conversational and dictation scenarios.",
    type: "multiple",
  },
  {
    id: 74,
    question:
      "Which generative AI model is used to generate images based on natural language prompts?",
    options: [
      { id: 0, text: "DALL-E" },
      { id: 1, text: "GPT-4" },
      { id: 2, text: "Embeddings" },
      { id: 3, text: "Whisper" },
    ],
    answer: 0,
    explanation:
      "DALL-E is a model that can generate images from natural language. GPT-4 and GPT-3.5 can understand and generate natural language and code but not images. Embeddings convert text into numerical vector form. Whisper can transcribe and translate speech to text.",
    type: "single",
  },
];
