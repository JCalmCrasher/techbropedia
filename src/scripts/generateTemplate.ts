/*
  This script generates a Markdown template for the "Techbropedia" project with provided details.

  Usage:
  - Run the script using the command: `pnpm run techbropedia:new`
  - The script will prompt you to enter information about the tech bro/sis.
  - After input is provided, a Markdown file will be generated based on the input.

  Note:
  - The generated Markdown file will have a filename based on the tech bro/sis's name.
  - The file will be saved in the src/contents dir.
*/
type Question = {
 name: string;
 gender: string;
 linkedin: string;
 twitter: string;
 github: string;
 dp: string;
 occupation: string;
 companies: string[];
 brief: string;
 [key: string]: string | string[];
};
const template = `---
name: {{name}}
gender: {{gender}}
linkedin: {{linkedin}}
twitter: {{twitter}}
github: {{github}}
dp: {{dp}}
occupation:
  - {{occupation}}
companies:
  - {{companies}}
brief: <section class='section'><p>{{brief}}</p></section>
---
`;
const data: Question = {
 brief: "",
 companies: [],
 dp: "",
 gender: "",
 github: "",
 linkedin: "",
 name: "",
 occupation: "",
 twitter: ""
};

function generateTemplate() {
 const fs = require("fs");
 const path = require("path");
 const readline = require("readline-sync");

 data.name = readline.question("Name: ");
 data.gender = readline.question("Gender: ");
 data.linkedin = readline.question("LinkedIn: ");
 data.twitter = readline.question("Twitter: ");
 data.github = readline.question("GitHub: ");
 data.dp = readline.question("DP (Profile Picture) URL: ");
 data.occupation = readline.question("Occupation: ");
 data.companies = readline.question(
  "Companies (enter multiple companies by separating with commas): "
 );
 data.brief = readline.question("Brief: ");

 const generatedTemplate = template.replace(
  /\{\{(\w+)\}\}/g,
  (_, key) => data[key] as string
 );

 const name = data.name as string;
 const templateFileName = `${name.toLowerCase().replace(/\s+/g, "-")}.md`;
 const templateFilePath = path.join(
  __dirname,
  "..",
  "contents",
  templateFileName
 );

 const templateDirectory = path.dirname(templateFilePath);
 if (!fs.existsSync(templateDirectory)) {
  fs.mkdirSync(templateDirectory, { recursive: true });
 }

 fs.writeFileSync(templateFilePath, generatedTemplate);

 console.log(`Template generated at: ${templateFilePath}`);
}

generateTemplate();
