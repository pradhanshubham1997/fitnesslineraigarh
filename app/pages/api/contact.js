export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
    }
  
    const { name, phone, objective } = req.body;
  
    // 👉 You can send this to email / DB / WhatsApp
  
    console.log("New Lead:", { name, phone, objective });
  
    return res.status(200).json({ message: "Success" });
  }