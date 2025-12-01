import { GoogleGenAI } from "@google/genai";

// Ensure API Key is available
const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const generateAssistantResponse = async (userMessage: string): Promise<string> => {
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
        如果被问及特定国家（中国、日本、韩国）的市场趋势，请提供基于常识的行业见解。
        语言：请始终使用中文回答，除非用户特别要求使用其他语言。`,
      }
    });

    return response.text || "抱歉，我现在无法回答，请稍后再试。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "系统繁忙，请检查网络连接或 API Key 配置。";
  }
};
