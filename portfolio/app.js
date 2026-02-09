const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", {
    name: "Name",
    title: "Full-Stack Developer",
    subtitle: "Node.js • Express • AI • Web Uygulamaları",
    skills: [
  "C",
  "C#",
  "C++",
  "HTML5",
  "CSS3",
  "JavaScript",
  "PHP",
  "Python",
  "Java",
  "Dart",

  "Node.js",
  "Express.js",
  "Next.js",
  "React",
  "NPM",

  "AWS",
  "Google Cloud",
  "Azure",

  ".NET",
  "Chart.js",

  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Microsoft SQL Server",

  "Apache",

  "TensorFlow",
  "Scikit-learn",

  "Git",
  "Adobe Photoshop",
  "Adobe Premiere Pro"
]
,
    projects: [
  {
    name: "Your_Project",
    desc: "Details.",
    tech: "Tech.",
    link: "Link_Get"
  },
  {
    name: "Your_Project",
    desc: "Details.",
    tech: "Tech.",
    link: "Link_Get"
  }
]

  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 App live on port ${PORT}`);
});
