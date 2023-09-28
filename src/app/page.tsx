import fs from "fs";
import matter from "gray-matter";
import Landing from "../components/landing";

type FileData = {
 slug: string;
 data: Record<string, any>;
 content: string;
};

const getUsers = async () => {
 // Getting all our contents at build time

 // Get all the contents from the contents folder
 const files = fs.readdirSync("src/contents");

 // Separate the files into two arrays: one for 'techbro_sis' and one for the rest
 const dummyFiles: FileData[] = [];
 const techbro_sisFiles: FileData[] = [];

 const techbroSisRegex = /^techbro_sis\d+/; // Regular expression to match 'techbro_sis' followed by any number

 files.forEach((file) => {
  const slug = file.replace(".md", "");
  const filecontent = fs.readFileSync(`src/contents/${file}`, "utf-8");
  const parsedContent = matter(filecontent);
  const { data, content } = parsedContent;

  if (techbroSisRegex.test(slug)) {
   dummyFiles.push({ slug, data, content });
  } else {
   techbro_sisFiles.push({ slug, data, content });
  }
 });

 // Randomly shuffle the otherFiles array
 techbro_sisFiles.sort(() => Math.random() - 0.5);

 // Combine techbroSisFiles and shuffled otherFiles
 const allContents = [...techbro_sisFiles, ...dummyFiles];

 return { contents: allContents };
};

const Home = async () => {
 const data = await getUsers();

 return <Landing contents={data.contents} />;
};

export default Home;
