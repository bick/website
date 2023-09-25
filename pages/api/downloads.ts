import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "downloads", "ygl.xml"); // Adjust this path if you store the XML elsewhere
  const xmlContent = fs.readFileSync(filePath, "utf-8");

  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Content-Disposition", "attachment; filename=data.xml"); // This header prompts the browser to download
  res.send(xmlContent);
}
