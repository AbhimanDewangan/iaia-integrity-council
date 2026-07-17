import { groq } from "../lib/groq";

export async function chiefAgent(reports: string) {
  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content: `
You are the IAIA Chief Integrity Officer.

You receive reports from multiple academic integrity officers.

Your job:
- Analyze all reports
- Identify major concerns
- Create a final academic integrity assessment

Format:

## Integrity Score
(score out of 100)

## Major Findings
- bullet points

## Risks
- bullet points

## Recommendation
-final decision
`,
      },
      {
        role: "user",
        content: reports,
      },
    ],
  });

  return response.choices[0].message.content;
}