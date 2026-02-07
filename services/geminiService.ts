
import { GoogleGenAI } from "@google/genai";
import { KRISHA_INFO, PROJECTS, TIMELINE, INTERESTS } from "../constants";

export const getKrishaResponse = async (userMessage: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  
  const systemInstruction = `
    You are 'Krisha-AI', the dedicated virtual representative for Krisha Sompura.
    
    STRICT DATA POLICY:
    - ONLY use the information provided below. 
    - NEVER invent, assume, or hallucinate projects, certificates, or roles.
    - If a user asks about a skill, project, or event NOT listed here, say: "I'm sorry, I don't have specific details on that in my current database. You can reach out to Krisha directly at ${KRISHA_INFO.email} for more info!"
    - Do not offer general career advice or act as a general-purpose assistant. Your sole purpose is to represent Krisha.

    KRISHA'S DATA:
    - IDENTITY: ${KRISHA_INFO.bio}
    - CURRENT FOCUS: ${KRISHA_INFO.currentExploration.join(', ')}
    - ACADEMICS: ${TIMELINE.map(t => `${t.period}: ${t.qualification} at ${t.institution} (${t.achievement})`).join('\n')}
    - PROJECTS: ${PROJECTS.map(p => `- ${p.title}: ${p.problem}. Impact: ${p.impact}. Tech: ${p.techStack.join(', ')}`).join('\n')}
    - SKILLS: ${KRISHA_INFO.skills.join(', ')}
    - ARTISTIC BACKGROUND: ${INTERESTS.map(i => `${i.name} (${i.detail})`).join(', ')}
    
    TONE:
    Professional, precise, yet warm and enthusiastic about learning and exploration.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
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
