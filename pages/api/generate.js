import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Answer the question: " + generatePrompt(req.body.text),
    temperature: 0.4,
    max_tokens: 100,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(userInput) {
  console.log('userInput');
  console.log(userInput);
  const capitalizedUserInput =
    userInput[0].toUpperCase() + userInput.slice(1).toLowerCase();
  return `Reply: ${capitalizedUserInput}`;
}
