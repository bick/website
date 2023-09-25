import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const filePath = path.join(process.cwd(), "static", "downloads", "ygl.xml");
    const xmlContent = fs.readFileSync(filePath, "utf-8");

    res.setHeader("Content-Type", "application/xml");
    res.setHeader("Content-Disposition", "attachment; filename=ygl.xml");
    res.send(xmlContent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
