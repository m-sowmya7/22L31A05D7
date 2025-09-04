const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMmwzMWEwNWQ3QGdtYWlsLmNvbSIsImV4cCI6MTc1Njk2OTQzMSwiaWF0IjoxNzU2OTY4NTMxLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiODExYmNiZWYtMTg0Ni00NWEzLWIwZWEtYWU0NjMxOWFkZTZlIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic293bXlhIGxha3NobWkgc3JpIG11c3RpIiwic3ViIjoiMTdhNGI0ZmYtMGYwYS00NGMxLWI3M2MtZWU3YjM3NjhmMTg1In0sImVtYWlsIjoiMjJsMzFhMDVkN0BnbWFpbC5jb20iLCJuYW1lIjoic293bXlhIGxha3NobWkgc3JpIG11c3RpIiwicm9sbE5vIjoiMjJsMzFhMDVkNyIsImFjY2Vzc0NvZGUiOiJZenVKZVUiLCJjbGllbnRJRCI6IjE3YTRiNGZmLTBmMGEtNDRjMS1iNzNjLWVlN2IzNzY4ZjE4NSIsImNsaWVudFNlY3JldCI6InFSWHVWWmJzallBRHduZWcifQ.2EUDA_td0IHhNyZ0Khb_DJ7zgcvAXaQAi84mvpRZxmw";
const LOG_API_URL = "http://20.244.56.144/evaluation-service/logs";

async function Log(stack, level, pkg, message) {
  try {
    const response = await fetch(LOG_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${ACCESS_TOKEN}`
      },
      body: JSON.stringify({
        stack,
        level,
        package: pkg,
        message
      })
    });
    if (!response.ok) {
      console.error("Log API call failed:", response.status, await response.text());
    } else {
      const data = await response.json();
      console.log("Log created successfully:", data);
    }
  } catch (error) {
    console.error("Error in Log middleware:", error);
  }
}

export default { Log };
