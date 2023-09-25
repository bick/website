import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), "downloads", "ygl.xml"); // Adjust if you use a different path
  const xmlContent = fs.readFileSync(filePath, "utf-8");

  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Content-Disposition", "attachment; filename=ygl.xml"); // This header prompts the download
  res.send(xmlContent);
}
