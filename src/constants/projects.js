import {
  AltiumLogo,
  BashLogo,
  BlenderLogo,
  CPlusPlusLogo,
  CSSLogo,
  CSharpLogo,
  DaVinciLogo,
  DiscordLogo,
  GitHubLogo,
  HTMLLogo,
  JavascriptLogo,
  MatlabLogo,
  MicrosoftExcelLogo,
  MicrosoftWordLogo,
  PythonLogo,
  ReactLogo,
  SlackLogo,
  TailwindLogo,
  TrelloLogo,
  UnityLogo,
  VisualStudioLogo,
} from "../assets/codingLanguageLogos";

export const projects = [
  {
    title: "DavidUrschel.com - This Website",
    body: "Created a feature-rich, interactive website from scratch using React and TypeScript for front-end development, with a responsive and visually appealing design crafted using Tailwind CSS. Implemented dynamic content presentation to show my portfolio.",
    images: [ReactLogo, CSSLogo, HTMLLogo, JavascriptLogo, TailwindLogo],
    date: "Aug. 2023 - Sep. 2023",
    sourceLink: "",
    demonstrationLink: "",
  },

  {
    title: "STARR Avionics Team - PDB Design",
    body: "I was part of a 4-7 member university student team that designed Power Distribution Boards for an Altimeter and GPS tracking system. We collaborated with a software design team to create a ground station for recording avionics and flight tracking data. This project allowed me to learn PCB design using Altium and develop practical solutions for design issues.",
    images: [AltiumLogo, SlackLogo, MicrosoftWordLogo, MicrosoftExcelLogo],
    date: "Sep. 2022 - Jun. 2023",
  },

  {
    title: "Water Control System Architecture Design",
    body: "During ENGG 160 at the University of Alberta, I crafted a proposal for a sophisticated control system. This involved creating detailed architectural diagrams in Blender 3.0, producing a compelling video presentation using DaVinci Resolve 16 and Blender, and conducting in-depth research on various control system components, enhancing my analytical skills.",
    images: [BlenderLogo, DiscordLogo, DaVinciLogo, MicrosoftWordLogo],
    date: "Jan. 2022 - May. 2022",
    sourceLink: "",
    demonstrationLink: "",
  },

  {
    title: "VTK to Unity",
    body: "Collaborated with medical experts to create a C# program using VTK and Unity for 3D medical image visualization and editing. Employed Visual Studio and GitHub for efficient file sharing, while Trello boards facilitated task organization and communication with supervisors.",
    images: [CSharpLogo, VisualStudioLogo, GitHubLogo, UnityLogo, TrelloLogo],
    date: "Jun. 2020 - Aug. 2020",
  },
];
