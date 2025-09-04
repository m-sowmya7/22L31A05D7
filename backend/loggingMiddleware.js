// {
//     "token_type": "Bearer",
//     "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMmwzMWEwNWQ3QGdtYWlsLmNvbSIsImV4cCI6MTc1Njk2MjgwNSwiaWF0IjoxNzU2OTYxOTA1LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiYjFiMGY1MmYtOTgyNi00ODdhLWEwMTEtMDQ2MDlkMWQwYmNiIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic293bXlhIGxha3NobWkgc3JpIG11c3RpIiwic3ViIjoiMTdhNGI0ZmYtMGYwYS00NGMxLWI3M2MtZWU3YjM3NjhmMTg1In0sImVtYWlsIjoiMjJsMzFhMDVkN0BnbWFpbC5jb20iLCJuYW1lIjoic293bXlhIGxha3NobWkgc3JpIG11c3RpIiwicm9sbE5vIjoiMjJsMzFhMDVkNyIsImFjY2Vzc0NvZGUiOiJZenVKZVUiLCJjbGllbnRJRCI6IjE3YTRiNGZmLTBmMGEtNDRjMS1iNzNjLWVlN2IzNzY4ZjE4NSIsImNsaWVudFNlY3JldCI6InFSWHVWWmJzallBRHduZWcifQ.RMMZ9HV_QPFer9Gph2TcUHUhncWbibMbGYLUqm8xxPY",
//     "expires_in": 1756962805
// }

import axios from "axios";

const LOG_URL = "http://20.244.56.144/evaluation-service/logs";

async function LOG(stack, level, pkg, message) {
  try {
    await axios.post(LOG_URL, {
      stack,
      level,
      package: pkg,
      message,
    });
    console.log(`[${level}] (${pkg}) ${message}`);
  } catch (error) {
    console.log("Error: ", error);
  }
}

export { LOG };