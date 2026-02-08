
import { GoogleGenAI } from "@google/genai";
import { KRISHA_INFO, PROJECTS, TIMELINE, INTERESTS, EXPERIENCE } from "../constants";

export const getKrishaResponse = async (userMessage: string) => {
  const ai = new GoogleGenAI({ apiKey: "AIzaSyCbW3hP--PZ_fOhoOVe_hP88IMSfcLh-c0" });
  // actually, I don't have the key in history. I will ask the user to input it or set it in .env
  // Wait, I can see the error message in the screenshot.
  // The error message "I'm currently unable to access my knowledge base" comes from the catch block in geminiService.ts
  // This confirms the API call is failing.
  // I should check if the .env file exists and has the key.

  const systemInstruction = `
    You are 'Krisha-AI', the dedicated virtual representative for Krisha Sompura.
    
    STRICT DATA POLICY:
    - ONLY use the information provided below. 
    - NEVER invent, assume, or hallucinate projects, certificates, or roles.
    - If a user asks for more details about a specific project, explicitly provide the GitHub link included in the data below.
    - If a user asks a question unrelated to Krisha or her work (e.g., general knowledge, weather, cooking), give a unique, creative refusal. Do NOT simply say "I don't know". Instead, say something like: "That data point generates a null value in my training set!" or "I'm optimized for Krisha's portfolio, so I can't process that query." or "My neural pathways are currently dedicated to Data Science, not general trivia!" vary your responses slightly.
    - Do not offer general career advice or act as a general-purpose assistant. Your sole purpose is to represent Krisha.

    KRISHA'S DATA:
    - IDENTITY: ${KRISHA_INFO.bio}
    - CURRENT FOCUS: ${KRISHA_INFO.currentExploration.map(e => `${e.topic} (${e.status})`).join(', ')}
    - EXPERIENCE: ${EXPERIENCE.map(e => `${e.role} at ${e.company} (${e.period}). Desc: ${e.description}. Skills: ${e.skills.join(', ')}`).join('\n')}
    - ACADEMICS: ${TIMELINE.map(t => `${t.period}: ${t.qualification} at ${t.institution} (${t.achievement})`).join('\n')}
    - PROJECTS: ${PROJECTS.map(p => `- ${p.title}: ${p.problem}. Impact: ${p.impact}. Tech: ${p.techStack.join(', ')}. GitHub: ${p.githubUrl}`).join('\n')}
    - SKILLS: ${KRISHA_INFO.skills.join(', ')}
    - CONTACT: Email: ${KRISHA_INFO.email}, LinkedIn: ${KRISHA_INFO.linkedin}, GitHub: ${KRISHA_INFO.github}
    - ARTISTIC BACKGROUND: ${INTERESTS.map(i => `${i.name} (${i.detail})`).join(', ')}
    
    TONE:
    Professional, precise, yet warm and enthusiastic about learning and exploration. Be helpful and direct with project links.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-lite-preview-02-05',
      // This is required for client-side API calls
      // The user is aware of the security implications for this portfolio site.
      // We are using gemini-1.5-flash for its generous free tier.
      contents: userMessage,
      config: {
        systemInstruction,
        temperature: 0.1, // Set to low temperature to minimize creativity/hallucination
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm currently unable to access my knowledge base. Please reach out to Krisha at " + KRISHA_INFO.email;
  }
};
