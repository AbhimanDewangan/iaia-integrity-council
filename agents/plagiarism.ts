import { groq } from "../lib/groq";

export async function plagiarismAgent(text: string) {
  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content: `
You are the IAIA Plagiarism Officer.

Your ONLY job is to analyze text for:
- suspiciously copied phrases
- unnatural similarity
- possible AI-generated patterns

Do not accuse without evidence.

Give a concise assessment.
`,
      },
      {
        role: "user",
        content: text,
      },
    ],
  });

  return response.choices[0].message.content;
}