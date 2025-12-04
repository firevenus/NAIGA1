
import { GoogleGenAI } from "@google/genai";
import { LanguageCode } from '../types';

// Ensure API Key is available
const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

const LANGUAGE_INSTRUCTIONS: Record<LanguageCode, string> = {
  zh: "请始终使用中文回答，除非用户要求其他语言。",
  en: "Please answer in English.",
  ko: "한국어로 대답해 주세요.",
  ja: "日本語で答えてください。",
  ru: "Пожалуйста, отвечайте на русском языке.",
  mn: "Монгол хэлээр хариулна уу."
};

export const generateAssistantResponse = async (userMessage: string, lang: LanguageCode = 'zh'): Promise<string> => {
  try {
    if (!apiKey) {
        return "请在环境中配置 API_KEY 以使用 AI 助手功能。";
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: `你是一个东北亚独立游戏联盟（NAIGA）的智能助手。
        你的任务是帮助独立游戏开发者解决关于市场推广、本地化（中日韩）、技术栈选择以及发行相关的问题。
        请用专业、鼓励且简洁的语气回答。
        如果被问及特定国家（中国、日本、韩国、俄罗斯、蒙古）的市场趋势，请提供基于常识的行业见解。
        
        当前语言设置：${LANGUAGE_INSTRUCTIONS[lang]}`,
      }
    });

    return response.text || "抱歉，我现在无法回答，请稍后再试。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "系统繁忙，请检查网络连接或 API Key 配置。";
  }
};

export const translatePost = async (title: string, content: string): Promise<{ titles: Record<LanguageCode, string>, summaries: Record<LanguageCode, string> } | null> => {
    if (!apiKey) return null;

    const prompt = `
    You are a professional localization engine for the Northeast Asia Indie Game Alliance.
    
    Task:
    1. Translate the provided Title and Content into the following 6 languages: English (en), Chinese (zh), Japanese (ja), Korean (ko), Russian (ru), Mongolian (mn).
    2. For the 'content', create a concise 2-sentence summary in each language.
    3. Return ONLY a valid JSON object with no markdown formatting.

    Input Title: "${title}"
    Input Content: "${content}"

    Output Format (JSON):
    {
        "titles": { "en": "...", "zh": "...", "ja": "...", "ko": "...", "ru": "...", "mn": "..." },
        "summaries": { "en": "...", "zh": "...", "ja": "...", "ko": "...", "ru": "...", "mn": "..." }
    }
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: 'application/json'
            }
        });
        
        const text = response.text;
        if (!text) return null;
        
        return JSON.parse(text);
    } catch (error) {
        console.error("Translation Error:", error);
        return null;
    }
}
